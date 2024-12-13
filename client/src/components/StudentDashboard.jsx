import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const [quizData, setQuizData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleQuizClick = () => {
        console.log('Selected category:', selectedCategory);
        navigate('/take-quiz');
    }

    const fetchData = async () => {
        try {
            // Check if token exists
            if (!token) {
                console.error("User is not authenticated");
                return;
            }
            const response = await axios.get('https://localhost:7093/api/Quiz/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'text/plain',
                },
            });
            if (response.status === 200) {
                setQuizData(response.data.data);
                setFilteredData(response.data.data);
            } else {
                console.error("Failed to fetch quiz data");
            }
        } catch (error) {
            console.log(`Error from student dashboard with message is: ${error.message}`);
        }
    };


    const fetchCategories = async () => {
        try {
            const response = await axios.get(
                'https://localhost:7093/api/Quiz/categories',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'text/plain',
                    },
                }
            );

            if (response.status === 200) {
                // Extract the data array from the response
                setCategories(response.data.data); // Updated to access the `data` property
                console.log('Categories:', response.data.data); // Updated log statement
            } else {
                console.error('Failed to fetch categories');
            }
        } catch (error) {
            console.log(`Error fetching categories: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData();
        fetchCategories();
    }, [token]);

    // useEffect(() => {
    //     const filtered = quizData.filter((record) =>
    //         record.topic.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setFilteredData(filtered);
    // }, [searchTerm, quizData]);

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
                                {category.name} {/* Updated to use category.name */}
                            </option>
                        ))}
                </select>

                <button className="bg-[#8854C0] text-white px-5 py-2 rounded-xl" onClick={handleQuizClick}>
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
                            <th className="p-4 border">User Name</th>
                            <th className="p-4 border">Marks Obtained</th>
                            <th className="p-4 border">Total Marks</th>
                            <th className="p-4 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((record) => (
                                <tr key={record.id} className="hover:bg-gray-100">
                                    <td className="p-4 border">{record.id}</td>
                                    <td className="p-4 border">{record.topic}</td>
                                    <td className="p-4 border">{record.userName}</td>
                                    <td className="p-4 border">{record.marksObtained}</td>
                                    <td className="p-4 border">{record.totalMarks}</td>
                                    <td className="p-4 border text-center">
                                        <button className="bg-red-500 text-white px-4 py-1 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-4 text-center">
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
