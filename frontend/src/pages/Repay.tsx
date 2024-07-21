import React, { useState } from 'react';
import Navbar from '../components/navbar';

const Repay = () => {
    const [loanId, setLoanId] = useState('');
    const [repayAmount, setRepayAmount] = useState('');

    const handleRepay = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add logic to repay the loan
    };

    return (
        <main>
            <Navbar />
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bghome.png")] flex flex-col items-center py-12 text-white'>
                <h1 className='text-4xl font-bold mb-6'>Repay Your Loan</h1>
                <p className='text-xl mb-12'>Easily repay your active loans with a few clicks.</p>

                <form onSubmit={handleRepay} className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Repay Loan</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Loan ID</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            value={loanId}
                            onChange={(e) => setLoanId(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Repayment Amount</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            value={repayAmount}
                            onChange={(e) => setRepayAmount(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="w-full py-2 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700">Repay</button>
                </form>
            </div>
        </main>
    );
};

export default Repay;
