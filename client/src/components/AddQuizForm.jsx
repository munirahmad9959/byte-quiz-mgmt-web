import React, { useState } from "react";

const AddQuizForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        totalMarks: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle quiz submission
        console.log("Form submitted:", formData);
    };

    return (
        <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add a New Quiz</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Total Marks</label>
                    <input
                        type="number"
                        name="totalMarks"
                        value={formData.totalMarks}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#7847b8] text-white px-4 py-2 rounded hover:bg-[#8854c0]"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddQuizForm;
