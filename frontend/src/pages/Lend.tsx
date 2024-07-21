import React, { useState } from 'react';
import Navbar from '../components/navbar';

const Lend = () => {
    const [depositAmount, setDepositAmount] = useState('');

    const handleDeposit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add logic to deposit funds
    };

    const loanRequests = [
        { id: 1, amount: '100 DAI', collateral: '0.5 ETH', interestRate: '5%', duration: '30 days', reputationScore: '85', privacy: true },
        // Add more loan requests here
    ];

    return (
        <main>
            <Navbar />
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bg.png")] flex flex-col items-center py-12 text-white'>
                <h1 className="text-4xl font-bold mb-6">Lend Your Assets Securely</h1>
                <p className="text-xl mb-12">Provide liquidity and earn interest with confidence and privacy.</p>

                <form onSubmit={handleDeposit} className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-md mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Deposit Funds for Lending</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Amount to Deposit</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="w-full py-2 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700">Deposit</button>
                </form>

                <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Available Loan Requests</h2>
                    {loanRequests.map((request) => (
                        <div key={request.id} className="bg-gray-700 p-4 rounded-lg mb-4">
                            <p className="mb-2"><strong>Amount:</strong> {request.amount}</p>
                            <p className="mb-2"><strong>Collateral:</strong> {request.collateral}</p>
                            <p className="mb-2"><strong>Interest Rate:</strong> {request.interestRate}</p>
                            <p className="mb-2"><strong>Duration:</strong> {request.duration}</p>
                            <p className="mb-2"><strong>Reputation Score:</strong> {request.reputationScore}</p>
                            <p className="mb-4"><strong>Privacy:</strong> {request.privacy ? 'Enabled' : 'Disabled'}</p>
                            <button className="w-full py-2 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700">Fund Loan</button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Lend;
