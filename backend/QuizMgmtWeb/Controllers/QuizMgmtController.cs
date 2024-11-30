using Microsoft.AspNetCore.Mvc;
using QuizMgmtWeb.Data;
using QuizMgmtWeb.Models;
using System.Linq;

namespace QuizMgmtWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizMgmtController : ControllerBase
    {
        private readonly AppDbContext _context;

        public QuizMgmtController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/QuizMgmt/login
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel loginData)
        {
            if (loginData == null || string.IsNullOrEmpty(loginData.Email) || string.IsNullOrEmpty(loginData.Password))
            {
                return BadRequest(new { message = "Email and password are required." });
            }

            var user = _context.Users.FirstOrDefault(u => u.Email == loginData.Email && u.Password == loginData.Password);

            if (user == null)
            {
                return Unauthorized(new { message = "Invalid email or password." });
            }

            var userDetails = new
            {
                user.UserId,
                user.FirstName,
                user.LastName,
                user.Email,
                user.Role
            };

            return Ok(new { message = "Login successful.", user = userDetails });
        }

        // GET: api/QuizMgmt
        [HttpGet]
        public IActionResult GetAllQuizzes()
        {
            var quizzes = _context.Quizzes.ToList();
            return Ok(quizzes);
        }

        // GET: api/QuizMgmt/{id}
        [HttpGet("{id}")]
        public IActionResult GetQuizById(int id)
        {
            var quiz = _context.Quizzes.Find(id);

            if (quiz == null)
            {
                return NotFound(new { message = "Quiz not found." });
            }

            return Ok(quiz);
        }

        // POST: api/QuizMgmt
        [HttpPost]
        public IActionResult CreateQuiz([FromBody] Quiz quiz)
        {
            _context.Quizzes.Add(quiz);
            _context.SaveChanges();
            return Ok(new { message = "Quiz created successfully.", quiz });
        }

        // PUT: api/QuizMgmt/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateQuiz(int id, [FromBody] Quiz updatedQuiz)
        {
            var quiz = _context.Quizzes.Find(id);

            if (quiz == null)
            {
                return NotFound(new { message = "Quiz not found." });
            }

            quiz.CategoryName = updatedQuiz.CategoryName;
            quiz.MarksObtained = updatedQuiz.MarksObtained;
            quiz.TotalMarks = updatedQuiz.TotalMarks;
            quiz.StartTime = updatedQuiz.StartTime;
            quiz.EndTime = updatedQuiz.EndTime;

            _context.SaveChanges();
            return Ok(new { message = "Quiz updated successfully.", quiz });
        }

        // DELETE: api/QuizMgmt/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteQuiz(int id)
        {
            var quiz = _context.Quizzes.Find(id);

            if (quiz == null)
            {
                return NotFound(new { message = "Quiz not found." });
            }

            _context.Quizzes.Remove(quiz);
            _context.SaveChanges();
            return Ok(new { message = "Quiz deleted successfully." });
        }

        // POST: api/QuizMgmt/submit
        [HttpPost("submit")]
        public IActionResult SubmitQuiz([FromBody] Submission submission)
        {
            var quiz = _context.Quizzes.Find(submission.QuizID);

            if (quiz == null)
            {
                return NotFound(new { message = "Quiz not found." });
            }

            // Copy quiz details to submission
            submission.TotalMarks = quiz.TotalMarks;
            submission.MarksObtained = quiz.MarksObtained;
            submission.StartTime = quiz.StartTime;
            submission.EndTime = quiz.EndTime;

            _context.Submissions.Add(submission);
            _context.SaveChanges();

            return Ok(new { message = "Quiz submission saved successfully.", submission });
        }
    }
}
