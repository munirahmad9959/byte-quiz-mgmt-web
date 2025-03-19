import jsPDF from "jspdf";
import axios from "axios";
import { setLoading } from "./src/state";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

// PDF Download Function
export const downloadPdf = async (quizID, token) => {
    // <ToastContainer position="top-right" autoClose={3000} />
    toast.success(`Downloading PDF for Quiz ID: ${quizID}`);

    try {
        const response = await axios.get(`https://localhost:7093/api/Quiz/get-record/quizId`, {
            params: { quizId: quizID },
            headers: { Authorization: `Bearer ${token}`, Accept: 'text/plain' },
        });

        const { data } = response.data;

        // Parse the answeredQuestions and questions
        const answeredQuestions = JSON.parse(data.answeredQuestions);
        const questions = data.questions.map((q) => ({
            questionID: q.questionID,
            questionText: q.questionText,
            options: JSON.parse(q.options),
            correctAnswer: q.correctAnswer,
        }));

        // Create a new jsPDF instance
        const doc = new jsPDF();

        // Add heading
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text("Quiz Result", 105, 20, null, null, "center");

        // Add Quiz Details
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(`Quiz ID: ${data.quizId}`, 10, 30);
        doc.text(`Submission ID: ${data.submissionId}`, 10, 40);
        doc.text(`Marks Obtained: ${data.marksObtained}/${data.totalMarks}`, 10, 50);
        doc.text(`Start Time: ${new Date(data.startTime).toLocaleString()}`, 10, 60);
        doc.text(`End Time: ${new Date(data.endTime).toLocaleString()}`, 10, 70);

        // Add Question Details
        let yPosition = 80;
        questions.forEach((question, index) => {
            // Question Heading
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text(`Q${index + 1}. ${question.questionText}`, 10, yPosition);
            yPosition += 10;

            // Options
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            question.options.forEach((option) => {
                doc.text(`${option.Option}: ${option.Text}`, 20, yPosition);
                yPosition += 10;
            });

            // Correct Answer and User Selected Option
            const userAnswer = answeredQuestions.find((aq) => aq.questionID === question.questionID)?.selectedOption || "N/A";
            const isCorrect = userAnswer === question.correctAnswer;

            // Correct Answer (Green)
            doc.setTextColor(0, 128, 0); // Green color
            doc.text(`Correct Answer: ${question.correctAnswer}`, 20, yPosition);

            // User Selected Option (Green if correct, Red if incorrect)
            if (isCorrect) {
                doc.setTextColor(0, 128, 0); // Green for correct
                doc.text(`User Selected: ${userAnswer}`, 20, yPosition + 10);
            } else {
                doc.setTextColor(255, 0, 0); // Red for incorrect
                doc.text(`User Selected: ${userAnswer}`, 20, yPosition + 10);
            }

            yPosition += 20;

            // Reset text color to black
            doc.setTextColor(0, 0, 0);

            // Add a new page if content exceeds the page height
            if (yPosition > 270) {
                doc.addPage();
                yPosition = 20;
            }
        });

        // Save the PDF
        doc.save(`Quiz_${quizID}_Result.pdf`);
    } catch (error) {
        console.error(`Error fetching quiz data: ${error.message}`);
        toast.error("Failed to download the PDF. Please try again.");
    }
}

// Fetch Quiz Categories
export const fetchQuizCategories = async (token, setCategories, dispatch) => {
    dispatch((setLoading(true)));
    try {
        const response = await axios.get("https://localhost:7093/api/Quiz/categories", {
            headers: { Authorization: `Bearer ${token}`, Accept: "text/plain" },
        });
        if (response.status === 200) {
            setCategories(response.data.data);
        } else {
            console.error("Failed to fetch categories");
        }
    } catch (error) {
        console.error(`Error fetching categories: ${error.message}`);
    } finally {
        dispatch(setLoading(false));
    }
};


export const ApiClient = axios.create({
    baseURL: 'https://localhost:7093/api', 
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
    },
});

