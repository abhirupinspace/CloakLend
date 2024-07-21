import React from 'react';
import Navbar from '../components/navbar';

const Dashboard = () => {
    const userLoans = [
        { id: 1, amount: '50 DAI', status: 'Active', dueDate: '2024-08-10' },
        { id: 2, amount: '100 DAI', status: 'Repaid', dueDate: '2024-07-15' },
    ];

    const userDeposits = [
        { id: 1, amount: '200 DAI', interestEarned: '5 DAI', status: 'Active' },
    ];

    return (
        <main>
            <Navbar />
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bg1.png")] flex flex-col items-center py-12 text-white'>
                <h1 className='text-4xl font-bold mb-6'>Dashboard</h1>
                <p className='text-xl mb-12'>Manage your loans and deposits in one place.</p>
                <div className='w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-md mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Your Loans</h2>
                    {userLoans.map((loan) => (
                        <div key={loan.id} className='bg-gray-700 p-4 rounded-lg mb-4'>
                            <p className='mb-2'><strong>Amount:</strong> {loan.amount}</p>
                            <p className='mb-2'><strong>Status:</strong> {loan.status}</p>
                            <p className='mb-4'><strong>Due Date:</strong> {loan.dueDate}</p>
                            <button className='w-full py-2 bg-black rounded-md text-white font-semibold hover:bg-indigo-700'>
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                <div className='w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-semibold mb-4'>Your Deposits</h2>
                    {userDeposits.map((deposit) => (
                        <div key={deposit.id} className='bg-gray-700 p-4 rounded-lg mb-4'>
                            <p className='mb-2'><strong>Amount:</strong> {deposit.amount}</p>
                            <p className='mb-2'><strong>Interest Earned:</strong> {deposit.interestEarned}</p>
                            <p className='mb-4'><strong>Status:</strong> {deposit.status}</p>
                            <button className='w-full py-2 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700'>
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
