import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ApiClient } from '../../utils';

const QuizPage = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    // State to track selected options and timer
    const [timeLeft, setTimeLeft] = useState(30); // Timer state in seconds
    const location = useLocation();
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const quizData = location.state?.quizData || []; // Retrieve passed quiz data
    const categoryID = location.state?.categoryID || null; // Retrieve passed categoryID
    const categoryName = location.state?.categoryName || 'Unknown'; // Retrieve passed categoryName
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleSubmit = async () => {
        if (isSubmitted) return; // Prevent duplicate submissions
        setIsSubmitted(true); // Mark as submitted

        const answeredQuestions = quizData.map((question) => {
            const options = JSON.parse(question.options);
            const selectedOption = selectedOptions[question.questionID];
            return {
                questionID: question.questionID,
                selectedOption,
                isCorrect: selectedOption === question.correctAnswer,
            };
        });

        const score = answeredQuestions.filter((q) => q.isCorrect).length;

        const quiz = {
            UserId: user.userId,
            CategoryName: categoryName,
            StartTime: new Date().toISOString(),
            EndTime: new Date().toISOString(),
            MarksObtained: score,
            TotalMarks: quizData.length
        };

        if (!quiz.UserId || !quiz.CategoryName) {
            alert('Missing required data for submission. Please try again.');
            return;
        }

        let responseData = null;

        try {
            const response = await ApiClient.post(
                '/Quiz/record/quizzies/submission',
                quiz, {
                headers: { Authorization: `Bearer ${token}`, Accept: "text/plain" },
            }
            );
            responseData = response.data.data;
            alert(`Quiz submitted! You scored ${score} out of ${quizData.length}.`);
        } catch (error) {
            console.error('Submission error:', error.response?.data || error.message);
            alert('Failed to submit the quiz. Please try again.');
            return; // Stop further execution if the first submission fails
        }

        const submission = {
            UserId: user.userId,
            CategoryID: categoryID,
            QuizID: responseData.quizID,
            MarksObtained: score,
            TotalMarks: quizData.length,
            StartTime: new Date().toISOString(),
            EndTime: new Date().toISOString(),
            AnsweredQuestions: JSON.stringify(answeredQuestions),
        };

        if (!submission.UserId || !submission.CategoryID || !submission.QuizID) {
            alert('Missing required data for submission. Please try again.');
            return;
        }

        try {
            const response = await ApiClient.post(
                '/Quiz/record/submission',
                submission, {
                headers: { Authorization: `Bearer ${token}`, Accept: "text/plain" },
            }
            );
            navigate('/dashboard');
        } catch (error) {
            console.error('Submission error:', error.response?.data || error.message);
            alert('Failed to submit the quiz. Please try again.');
        }
    };

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        } else if (!isSubmitted) {
            handleSubmit(); // Auto-submit when time runs out
        }
    }, [timeLeft, isSubmitted]);

    // Handle option selection
    const handleOptionSelect = (questionID, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [questionID]: option, // Update selected option for the question
        }));
    };


    // Handle submission logic

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Sticky Navbar */}
            <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
                <div className="max-w-3xl mx-auto flex justify-between items-center p-4">
                    <div className="text-lg font-semibold text-gray-800">
                        Time Left: {timeLeft}s
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition"
                    >
                        Submit Quiz
                    </button>
                </div>
            </div>

            {/* Quiz Questions */}
            <div className="mt-16 max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Quiz Questions
                </h1>
                {quizData.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No questions available for the selected category.
                    </p>
                ) : (
                    quizData.map((question, index) => {
                        const options = JSON.parse(question.options); // Deserialize JSON options
                        return (
                            <div
                                key={question.questionID}
                                className="mb-6 border border-gray-200 rounded-lg p-4 bg-gray-50"
                            >
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                                    Q{index + 1}: {question.questionText}
                                </h3>
                                <ul className="space-y-2">
                                    {options.map((option) => (
                                        <li
                                            key={option.Option}
                                            className={`p-3 rounded-md border cursor-pointer transition ${selectedOptions[question.questionID] === option.Option
                                                ? 'bg-blue-500 text-white border-blue-500'
                                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                                                }`}
                                            onClick={() =>
                                                handleOptionSelect(question.questionID, option.Option)
                                            }
                                        >
                                            <strong>{option.Option}</strong>: {option.Text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default QuizPage;
