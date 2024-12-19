import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaFilter } from "react-icons/fa";
import { downloadPdf } from "../../utils";

const TeacherDashboard = () => {
  const token = useSelector((state) => state.auth.token);
  const [quizData, setQuizData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("https://localhost:7093/api/Quiz/all-quizzes", {
        headers: { Authorization: `Bearer ${token}`, Accept: "text/plain" },
      });
      if (response.status === 200) {
        setQuizData(response.data.data);
        setFilteredData(response.data.data);
      }
    } catch (error) {
      console.error(`Error fetching quiz data: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  useEffect(() => {
    const filtered = quizData.filter((record) =>
      record.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, quizData]);

  const handleDownloadPdf = async (quizID) => {
    await downloadPdf(quizID, token);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#2b2a2a]">Students Quizzes</h1>
        <div className="flex items-center space-x-2">
          <FaFilter className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md bg-white">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-4">Quiz ID</th>
              <th className="p-4">Topic</th>
              <th className="p-4">User Name</th>
              <th className="p-4">Marks Obtained</th>
              <th className="p-4">Total Marks</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((record) => (
                <tr key={record.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{record.quizID}</td>
                  <td className="p-4">{record.categoryName}</td>
                  <td className="p-4">{record.userName}</td>
                  <td className="p-4">{record.marksObtained}</td>
                  <td className="p-4">{record.totalMarks}</td>
                  <td className="p-4 text-center">
                    <button
                      className="bg-[#7847b8] hover:bg-[#8854c0] text-white py-1 px-3 rounded-lg shadow-sm"
                      onClick={() => handleDownloadPdf(record.quizID)}
                    >
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherDashboard;
