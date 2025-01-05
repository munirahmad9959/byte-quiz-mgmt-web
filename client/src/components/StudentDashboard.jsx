import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import { ApiClient, downloadPdf, fetchQuizCategories } from '../../utils';
import { FaFilter } from 'react-icons/fa';

const StudentDashboard = ({ setShowSidebar, setNavDropDown }) => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const [quizData, setQuizData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch();

    const handleQuizClick = () => {
        if (selectedCategory !== 'Choose a subject' && selectedCategory !== '') {
            ApiClient
                .get(`/Quiz/category`, {
                    params: { categoryName: selectedCategory },
                    headers: { Authorization: `Bearer ${token}`, Accept: 'text/plain' },
                })
                .then((response) => {
                    const quizQuestions = response.data.data;
                    if (quizQuestions.length !== 0) {
                        const category = categories.find((cat) => cat.name === selectedCategory);
                        navigate('/take-quiz', {
                            state: {
                                quizData: quizQuestions,
                                categoryID: category?.categoryID,
                                categoryName: selectedCategory,
                            },
                        });
                    } else {
                        alert('No questions available for this category');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error.response ? error.response.data : error.message);
                });
        } else {
            alert('Please select a subject to take quiz first!');
        }
    };

    const fetchData = async () => {
        try {
            if (!token) {
                console.error('User is not authenticated');
                return;
            }
            const response = await ApiClient.get('/Quiz/user', {
                headers: { Authorization: `Bearer ${token}`, Accept: 'text/plain' },
            });
            if (response.status === 200) {
                setQuizData(response.data.data);
                setFilteredData(response.data.data); // Initialize filtered data
            } else {
                console.error('Failed to fetch quiz data');
            }
        } catch (error) {
            console.error(`Error fetching quiz data: ${error.message}`);
        }
    };

    const handleDownloadPdf = async (quizID) => {
        try {
            console.log('Downloading PDF for quizID:', quizID); // Debugging log
            console.log('Token:', token); // Debugging log
            await downloadPdf(quizID, token);
        } catch (error) {
            console.error('Error in handleDownloadPdf:', error.message);
            alert('Failed to download PDF. Please check your connection or try again.');
        }
    };

    // Filter logic
    useEffect(() => {
        const filtered = quizData.filter((record) =>
            record.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, quizData]);

    useEffect(() => {
        fetchData();
        fetchQuizCategories(token, setCategories, dispatch);
    }, [token, dispatch]);

    return (
        <div className="p-6 bg-gray-50 min-h-screen"
            onClick={() => {
                setShowSidebar(false);
                setNavDropDown(false);
            }}>

            <div className="flex justify-center">
                <h1 className="text-3xl font-bold mb-6 text-[#2b2a2a]">Available Quizzes</h1>
            </div>

            <div className="flex">
                <div className="flex items-center space-y-2 mb-4 space-x-0 md:space-x-4 md:flex-row flex-col">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-[300px] sm:w-[250px] text-sm"
                        style={{
                            width: "200px", // Adjust the dropdown box width
                        }}
                    >
                        <option value="">Choose a category</option>
                        {categories.map((category) => (
                            <option key={uuidv4()} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <button
                        className="bg-[#7847b8] hover:bg-[#8854c0] text-white px-4 py-2 md:py-2 rounded-lg shadow"
                        onClick={handleQuizClick}
                    >
                        Start Quiz
                    </button>
                </div>
                <div className="filter flex items-center space-x-2 ml-auto ">
                    <span>
                        <FaFilter className="text-gray-500" />
                    </span>
                    <input
                        type="text"
                        placeholder="Filter by category..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-[20vw] mb-4 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg shadow bg-white">
                <table className="min-w-full text-sm text-gray-700">
                    <thead className="bg-gray-100 uppercase text-xs text-gray-600">
                        <tr>
                            <th className="p-4">Quiz ID</th>
                            <th className="p-4">Topic</th>
                            <th className="p-4">Marks Obtained</th>
                            <th className="p-4">Total Marks</th>
                            <th className="p-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((record) => (
                                <tr key={uuidv4()} className="border-t hover:bg-gray-50">
                                    <td className="p-4">{record.quizID}</td>
                                    <td className="p-4">{record.categoryName}</td>
                                    <td className="p-4">{record.marksObtained}</td>
                                    <td className="p-4">{record.totalMarks}</td>
                                    <td className="p-4 text-center">
                                        <button
                                            className="bg-[#7847b8] hover:bg-[#8854c0] text-white px-4 py-1 rounded-lg"
                                            onClick={() => handleDownloadPdf(record.quizID)}
                                        >
                                            Download PDF
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="p-4 text-center text-gray-500">
                                    No quizzes available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentDashboard;
