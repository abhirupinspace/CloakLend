import React from 'react'
import Navbar from '../components/navbar'

const Dashboard = () => {
    return (
        <main>
            <Navbar />
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bg2.png")] '>
            <h1>Dashboard</h1>
            </div>
        </main>
    )
}

export default Dashboard
