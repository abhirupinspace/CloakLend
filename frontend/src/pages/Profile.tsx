import React from 'react'
import Navbar from '../components/navbar'

const Profile = () => {
    return (
        <main>
            <Navbar />
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bg.png")] '>
            <h1>Profile</h1>
            </div>
        </main>
    )
}

export default Profile
