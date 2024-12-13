using backend.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly AppDbContext _context; // Injected AppDbContext

        public QuizController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("categories"), Authorize]
        public IActionResult GetCategories()
        {
            try
            {
                var categories = _context.Categories.ToList();
                Console.WriteLine("categories returned successfully");
                return Ok(new { message = "Categories are: ", data = categories});
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("all-quizzes"), Authorize(Roles = "Teacher")]
        public IActionResult GetQuizzes()
        {
            try
            {
                // Fetch data by joining Submission, User, and Category tables
                var quizResults = _context.Submissions
                    .Select(s => new
                    {
                        UserName = s.User.FirstName + " " + s.User.LastName, // Combine FirstName and LastName
                        CategoryName = s.Category.Name, // Get Category name
                        QuizID = s.QuizID,
                        MarksObtained = s.MarksObtained,
                        TotalMarks = s.TotalMarks
                    })
                    .ToList();
                return Ok(new { message = "Quiz Records are", data = quizResults });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("user"), Authorize(Roles = "Student")]
        public IActionResult GetQuizzesById()
        {
            try
            {
                // Get the current user's ID from the claims
                var userId = User.Claims.FirstOrDefault(c => c.Type == "UserID")?.Value;

                if (string.IsNullOrEmpty(userId) || !int.TryParse(userId, out int parsedUserId))
                {
                    return Unauthorized("Invalid or missing user ID.");
                }

                // Fetch quizzes for the logged-in teacher
                var quizResults = _context.Quizzes
                    .Where(q => q.UserId == parsedUserId) // Match the quizzes to the logged-in teacher
                    .Select(q => new
                    {
                        QuizID = q.QuizID,
                        CategoryName = q.CategoryName,
                        MarksObtained = q.MarksObtained,
                        TotalMarks = q.TotalMarks
                    })
                    .ToList();

                return Ok(new
                {
                    message = "Quiz records fetched successfully.",
                    data = quizResults
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(new
                {
                    message = "An error occurred while fetching quiz records.",
                    error = ex.Message
                });
            }
        }

    }
}
