import React, { useState } from 'react';
import Navbar from '../components/navbar';

const Borrow = () => {
    const [borrowAmount, setBorrowAmount] = useState('');
    const [collateral, setCollateral] = useState('');
    const [duration, setDuration] = useState('');
    const [privacy, setPrivacy] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add logic to create a new loan request
    };

    return (
        <main>
            <Navbar />
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bg.png")] flex flex-col items-center py-12 text-white'>
                <h1 className='text-4xl font-bold mb-6'>Borrow with Confidence and Privacy</h1>
                <p className='text-xl mb-12'>Access the liquidity you need with flexible terms and reputation-based trust.</p>

                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Create a New Loan Request</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Amount to Borrow</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            value={borrowAmount}
                            onChange={(e) => setBorrowAmount(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Collateral Offered</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            value={collateral}
                            onChange={(e) => setCollateral(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Loan Duration (in days)</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <div className="text-sm font-medium mr-2">Privacy-Preserving Loan</div>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-600"
                            checked={privacy}
                            onChange={() => setPrivacy(!privacy)}
                        />
                    </div>

                    <button type="submit" className="w-full py-2 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700">Submit Loan Request</button>
                </form>
            </div>
        </main>
    );
};

export default Borrow;
