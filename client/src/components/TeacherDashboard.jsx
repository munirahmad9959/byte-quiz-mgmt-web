import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const TeacherDashboard = () => {

    const token = useSelector((state) => state.auth.token)
    const [quizData, setQuizData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');



    const fetchData = async () => {
        try {
            // Check if token exists
            if (!token) {
                console.error("User is not authenticated");
                return;
            }
            const response = await axios.post('https://localhost:7093/api/Quiz/all-quizzes', data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'text/plain'
                }
            });
            if (response.status === 200) {
                setQuizData(response.data);
                setFilteredData(response.data)
            } else {
                console.error("Failed to fetch quiz data");
            }

        } catch (error) {
            console.log(`Error from student dashboard with message is: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchData();
    }, [token]);


    useEffect(() => {
        const filtered = quizData.filter((record) =>
            record.topic.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, quizData]);


    return (
        <>
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
    )
}

export default TeacherDashboard
