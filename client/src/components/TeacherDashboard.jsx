import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaFilter } from 'react-icons/fa';
import jsPDF from 'jspdf';
import { downloadPdf } from '../../utils';

const TeacherDashboard = () => {
    const token = useSelector((state) => state.auth.token);
    const [quizData, setQuizData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async () => {
        try {
            if (!token) {
                console.error('User is not authenticated');
                return;
            }
            const response = await axios.get('https://localhost:7093/api/Quiz/all-quizzes', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'text/plain',
                },
            });
            if (response.status === 200) {
                console.log('Response from Teacher dashboard:', response.data.data);
                setQuizData(response.data.data);
                setFilteredData(response.data.data); // Initialize filtered data
            } else {
                console.error('Failed to fetch quiz data');
            }
        } catch (error) {
            console.error(`Error fetching quiz data: ${error.message}`);
        }
    };

    // Filter data based on the search term and username
    useEffect(() => {
        const filtered = quizData.filter((record) =>
            record.userName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, quizData]);

    useEffect(() => {
        fetchData();
    }, [token]);

    const handleDownloadPdf = async (quizID) => {
        await downloadPdf(quizID, token);
    };

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold mb-4 text-[#2b2a2a]">Students Quizzes</h1>
                <div className="mb-4 flex items-center space-x-2">
                    <FaFilter style={{
                        fontSize: '1rem',
                        color: '#555',
                        cursor: 'pointer',
                    }} />
                    <input
                        type="text"
                        placeholder="Search by username..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border p-2 rounded-xl w-full"
                    />
                </div>
            </div>

            <div className="overflow-x-auto border border-gray-300 rounded-lg text-[#302f2f]">
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
                                    <td className="p-4 border">{record.quizID}</td>
                                    <td className="p-4 border">{record.categoryName}</td>
                                    <td className="p-4 border">{record.userName}</td>
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

export default TeacherDashboard;
