import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import { downloadPdf } from '../../utils';

const StudentDashboard = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const [quizData, setQuizData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleQuizClick = () => {
        if (selectedCategory !== 'Choose a subject' && selectedCategory !== '') {
            axios
                .get(`https://localhost:7093/api/Quiz/category`, {
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
            const response = await axios.get('https://localhost:7093/api/Quiz/user', {
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

    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://localhost:7093/api/Quiz/categories', {
                headers: { Authorization: `Bearer ${token}`, Accept: 'text/plain' },
            });
            if (response.status === 200) {
                setCategories(response.data.data);
            } else {
                console.error('Failed to fetch categories');
            }
        } catch (error) {
            console.error(`Error fetching categories: ${error.message}`);
        }
    }; 

    const handleDownloadPdf = async (quizID) => {
        await downloadPdf(quizID, token);
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
        fetchCategories();
    }, [token]);

    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">Select Quiz to Take</h1>

            <div className="flex items-center mb-4 mt-5 w-full space-x-5">
                <select
                    id="default"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-[#666] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5"
                >
                    <option value="">Choose a subject</option>
                    {categories.length > 0 &&
                        categories.map((category) => (
                            <option key={category.categoryID} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                </select>

                <button className="bg-[#7847b8] hover:bg-[#8854c0] text-white px-5 py-2 rounded-xl" onClick={handleQuizClick}>
                    Take Quiz
                </button>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by subject name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded w-full"
                />
            </div>

            <div className="overflow-x-auto border border-gray-300 rounded">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4 border">Quiz ID</th>
                            <th className="p-4 border">Topic</th>
                            <th className="p-4 border">Marks Obtained</th>
                            <th className="p-4 border">Total Marks</th>
                            <th className="p-4 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((record) => (
                                <tr key={record.id} className="hover:bg-gray-100">
                                    <td className="p-4 border">{record.quizID}</td>
                                    <td className="p-4 border">{record.categoryName}</td>
                                    <td className="p-4 border">{record.marksObtained}</td>
                                    <td className="p-4 border">{record.totalMarks}</td>
                                    <td className="p-4 border text-center">
                                        <button className="bg-[#7847b8] hover:bg-[#8854c0] text-white px-4 py-1 rounded" onClick={() => handleDownloadPdf(record.quizID)}>
                                            Download Pdf
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="p-4 text-center">
                                    No records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default StudentDashboard;
