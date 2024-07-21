import React from 'react'
import Navbar from './components/navbar'
import { Link } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<Navbar />
			<div>
			<div className='bg-cover h-screen bg-fixed bg-[url("./assets/bghome.png")] '>
				<div className="flex flex-col items-center h-[1000px] w-[1200px] py-20 p spac">
					<div className="flex flex-col min-h-screen gap-5 p-20">
						<h1 className="font-bold text-8xl text-left text-black">Empower Your Lending with Privacy and Trust</h1>
						<h1 className="text-2xl font-semibold text-white">Connect your wallet and verify profile to continue.</h1>
						<div className="flex py-5 gap-5">
							<Link to={"/playground"}>
							<button className="bg-white hover:bg-black text-black hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
								START LENDING
							</button></Link>
							<a href=""><button className="bg-white hover:bg-black text-black hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
								LEARN MORE
							</button></a>
						</div>
					</div>

				</div>
			</div>
			</div>
		</div>
	)
}

export default App
