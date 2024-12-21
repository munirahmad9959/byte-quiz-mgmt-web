import React, { useState, useEffect } from "react";
import { ApiClient, fetchQuizCategories } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const AddQuizForm = ({ setShowSidebar, setNavDropDown }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [quizzes, setQuizzes] = useState([]);
    const [message, setMessage] = useState("");
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false); // New state for delete confirmation
    const [quizToDelete, setQuizToDelete] = useState(null); // Store the quiz to be deleted
    const token = useSelector((state) => state.auth.token);
    const loading = useSelector((state) => state.auth.loading);
    const dispatch = useDispatch();

    const handleQuizClick = () => {
        if (selectedCategory !== "Choose a subject" && selectedCategory !== "") {
            ApiClient
                .get(`/Quiz/get-quizzes/catName`, {
                    params: { catName: selectedCategory },
                    headers: { Authorization: `Bearer ${token}`, Accept: "text/plain" },
                })
                .then((response) => {
                    if (response.status === 200) {
                        setQuizzes(response.data.data);
                        setMessage("");
                    }
                })
                .catch((error) => {
                    if (error.response && error.response.status === 404) {
                        setQuizzes([]);
                        setMessage(error.response.data.message);
                    } else {
                        console.error("Error:", error.response ? error.response.data : error.message);
                        setMessage("An error occurred while retrieving quizzes.");
                    }
                });
        } else {
            alert("Please select a subject to take quiz first!");
        }
    };

    const clearTextboxes = () => {
        document.getElementById("questionText").value = "";
        ["A", "B", "C", "D"].forEach((option) => {
            document.getElementById(`option${option}`).value = "";
        });
        document.getElementById("correctOption").value = "";
    };

    const handleAddQuiz = () => {
        const questionText = document.getElementById("questionText").value.trim();
        const correctOption = document.getElementById("correctOption").value.trim();
        const options = ["A", "B", "C", "D"].map((option) => ({
            Option: option,
            Text: document.getElementById(`option${option}`).value.trim(),
        }));

        if (!selectedCategory) {
            alert("Please select a category!");
            return;
        }
        if (!questionText) {
            alert("Please enter a question!");
            return;
        }
        if (options.some((opt) => !opt.Text)) {
            alert("Please fill out all options!");
            return;
        }
        if (!correctOption || !["A", "B", "C", "D"].includes(correctOption)) {
            alert("Correct option must be one of A, B, C, or D!");
            return;
        }

        const payload = {
            QuestionText: questionText,
            Options: JSON.stringify(options),
            CorrectAnswer: correctOption,
        };

        ApiClient
            .post(
                `/Quiz/add-quizzes/catName`,
                payload,
                {
                    params: { catName: selectedCategory },
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                alert("Quiz added successfully!");
                clearTextboxes(); // Clear fields on success
                handleQuizClick(); // Refresh quiz list
            })
            .catch((error) => {
                console.error("Error adding quiz:", error.response ? error.response.data : error.message);
                alert(
                    error.response?.data?.message || "An error occurred while adding the quiz."
                );
                clearTextboxes(); // Clear fields on error
            });
    };

    const handleEditQuiz = () => {
        if (!selectedQuiz) {
            alert("Please select a quiz to edit.");
            return;
        }

        const questionText = document.getElementById("questionText").value.trim();
        const correctOption = document.getElementById("correctOption").value.trim();
        const options = ["A", "B", "C", "D"].map((option) => ({
            Option: option,
            Text: document.getElementById(`option${option}`).value.trim(),
        }));

        if (!selectedCategory) {
            alert("Please select a category!");
            return;
        }
        if (!questionText) {
            alert("Please enter a question!");
            return;
        }
        if (options.some((opt) => !opt.Text)) {
            alert("Please fill out all options!");
            return;
        }
        if (!correctOption || !["A", "B", "C", "D"].includes(correctOption)) {
            alert("Correct option must be one of A, B, C, or D!");
            return;
        }

        const payload = {
            QuestionID: selectedQuiz.questionID, // Use the ID from the selected quiz
            QuestionText: questionText,
            Options: JSON.stringify(options),
            CorrectAnswer: correctOption,
        };

        ApiClient
            .post(
                `/Quiz/edit-quizzes/catName`,
                payload,
                {
                    params: { catName: selectedCategory },
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                alert("Quiz updated successfully!");
                clearTextboxes(); // Clear fields on success
                handleQuizClick(); // Refresh quiz list
            })
            .catch((error) => {
                console.error("Error updating quiz:", error.response ? error.response.data : error.message);
                alert(
                    error.response?.data?.message || "An error occurred while updating the quiz."
                );
            });

    };

    const handleDeleteQuiz = (quizId) => {
        setQuizToDelete(quizId); // Store the quiz ID for deletion
        setShowDeleteDialog(true); // Show the confirmation dialog
    };

    const confirmDelete = () => {
        if (quizToDelete) {
            ApiClient
                .delete(`/Quiz/delete/quiz/${quizToDelete}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    alert("Quiz deleted successfully!");
                    clearTextboxes(); // Clear fields on success
                    handleQuizClick(); // Refresh quiz list
                })
                .catch((error) => {
                    console.error("Error deleting quiz:", error.response ? error.response.data : error.message);
                    alert(
                        error.response?.data?.message || "An error occurred while deleting the quiz."
                    );
                });

        }
        setShowDeleteDialog(false); // Hide confirmation dialog after action
    };

    const cancelDelete = () => {
        setShowDeleteDialog(false); // Close the dialog without deletion
    };

    const handleRowClick = (quiz) => {
        setSelectedQuiz(quiz);
        document.getElementById("questionText").value = quiz.quest;

        const options = JSON.parse(quiz.options);
        options.forEach((option) => {
            const optionInput = document.getElementById(`option${option.Option}`);
            if (optionInput) {
                optionInput.value = option.Text;
            }
        });

        document.getElementById("correctOption").value = quiz.correctOptions;
    };


    useEffect(() => {
        fetchQuizCategories(token, setCategories, dispatch);
    }, [token, dispatch]);

    return (
        <div className="p-6 bg-gray-50 min-h-screen" onClick={() => { setShowSidebar(false); setNavDropDown(false); }}>
            <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">
                Manage Your Quizzes
            </h1>

            <div className="flex items-center space-y-2 mb-4 space-x-0 md:space-x-4 md:flex-row flex-col">
                <select
                    id="default"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-[300px] sm:w-[250px] text-sm"
                    style={{
                        width: "200px", // Adjust the dropdown box width
                    }}
                >
                    <option value="">Choose a subject</option>
                    {categories.length > 0 &&
                        categories.map((category) => (
                            <option key={category.categoryID} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                </select>
                <button
                    className="bg-[#7847b8] hover:bg-[#8854c0] text-white px-4 py-2 md:py-2 rounded-lg shadow"
                    onClick={handleQuizClick}
                >
                    Show Quizzes
                </button>
            </div>


            {/* Input Fields for Quiz Management */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <input
                    id="questionText"
                    type="text"
                    placeholder="Enter Question Text"
                    className="border border-gray-300 p-3 rounded-lg w-full"
                />
                {["A", "B", "C", "D"].map((option, idx) => (
                    <input
                        key={idx}
                        id={`option${option}`}
                        type="text"
                        placeholder={`Enter Option ${option}`}
                        className="border border-gray-300 p-3 rounded-lg w-full"
                    />
                ))}
                <input
                    id="correctOption"
                    type="text"
                    placeholder="Enter Correct Option (A, B, C, or D)"
                    className="border border-gray-300 p-3 rounded-lg w-full"
                />
            </div>

            {/* Buttons for Quiz Actions */}
            <div className="flex justify-center space-x-6 mb-6">
                <button
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg"
                    onClick={handleAddQuiz}
                >
                    Add Quiz
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg" onClick={handleEditQuiz}>
                    Edit Quiz
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg" onClick={() => handleDeleteQuiz(selectedQuiz?.questionID)}>
                    Delete Quiz
                </button>
            </div>

            {/* Display Quiz List */}
            {quizzes.length > 0 ? (
                <div>
                    <h2 className="text-2xl font-bold text-purple-800 mb-4">Quiz List</h2>
                    <div className="overflow-x-auto shadow-lg rounded-lg">
                        <table className="table-auto w-full border border-gray-300">
                            <thead>
                                <tr className="bg-purple-100">
                                    {[
                                        "Question ID",
                                        "Category Name",
                                        "Question",
                                        "Options",
                                        "Correct Option",
                                    ].map((header, idx) => (
                                        <th
                                            key={idx}
                                            className="px-4 py-2 text-left text-gray-700 font-semibold border-b"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {quizzes.map((quiz, index) => (
                                    <tr key={index} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(quiz)}>
                                        <td className="px-4 py-2 border-b">{quiz.questionID}</td>
                                        <td className="px-4 py-2 border-b">{quiz.catName}</td>
                                        <td className="px-4 py-2 border-b">{quiz.quest}</td>
                                        <td className="px-4 py-2 border-b">
                                            {JSON.parse(quiz.options)
                                                .map((option) => `${option.Option}: ${option.Text}`)
                                                .join(", ")}
                                        </td>
                                        <td className="px-4 py-2 border-b">{quiz.correctOptions}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-500 text-xl mt-8">{message}</div>
            )}

            {showDeleteDialog && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">
                            Are you sure you want to delete this quiz?
                        </h3>
                        <div className="flex justify-between">
                            <button
                                onClick={confirmDelete}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={cancelDelete}
                                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AddQuizForm;
