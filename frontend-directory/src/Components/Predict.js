import React, { useState } from 'react';
import axios from 'axios';

const Predict = () => {
    const [formData, setFormData] = useState({
        BMI: '',
        BMR: '',
        Total_Calories: '',
        veg_only: false
    });
    const [output, setOutput] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/app/predict/', {
                BMI: parseFloat(formData.BMI),
                BMR: parseFloat(formData.BMR),
                Total_Calories: parseFloat(formData.Total_Calories),
                veg_only: formData.veg_only
            });
            setOutput(JSON.stringify(response.data, null, 2));
        } catch (error) {
            setOutput('Error: ' + error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h2 className="text-2xl font-bold mb-4">Diet Recommendation Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="BMI" style={{ color: "white", fontSize: '20px' }} className="block mb-1">BMI  :   </label>
                    <input
                        type="number"
                        id="BMI"
                        name="BMI"
                        value={formData.BMI}
                        onChange={handleInputChange}
                        step="0.01"
                        required
                        className="w-full p-2 border rounded"
                    />
                    <br /><br /><br /><br />
                </div>
                <div>
                    <label htmlFor="BMR" style={{ color: "white", fontSize: '20px' }} className="block mb-1">BMR  :  </label>
                    <input
                        type="number"
                        id="BMR"
                        name="BMR"
                        value={formData.BMR}
                        onChange={handleInputChange}
                        step="0.01"
                        required
                        className="w-full p-2 border rounded"
                    /><br /><br /><br />
                </div>
                <div>
                    <label htmlFor="Total_Calories" style={{ color: "white", fontSize: '20px' }} className="block mb-1">Total Calories :  </label>
                    <input
                        type="number"
                        id="Total_Calories"
                        name="Total_Calories"
                        value={formData.Total_Calories}
                        onChange={handleInputChange}
                        step="0.01"
                        required
                        className="w-full p-2 border rounded"
                    /><br /><br /><br />
                </div>
                <div>
                    <label htmlFor="veg_only" style={{ color: "white", fontSize: '20px' }} className="inline-flex items-center">
                        <input
                            type="checkbox"
                            id="veg_only"
                            name="veg_only"
                            checked={formData.veg_only}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        Vegetarian Only
                    </label>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Submit
                </button>
            </form>
            {output && (
                <div className="mt-6 p-4 bg-white border rounded" style={{ color: "white", fontSize: '20px' }}>
                    <pre>{output}</pre>
                </div>
            )}
        </div>
    );
};

export default Predict;