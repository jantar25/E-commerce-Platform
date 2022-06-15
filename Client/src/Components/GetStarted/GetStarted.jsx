import React from 'react'
import { BsDot } from 'react-icons/bs';

const GetStarted = () => {
  return (
            <div className='px-4 sm:px-8 lg:px-20 pt-8 text-white'>
            <h3 className="text-center text-green-500 mb-2 text-xl">Are you Farmer?</h3>
            <h2 className="text-center text-orange-500 font-[400] text-3xl">Want to join our comunity?</h2>
            <h1 className="text-center font-[700] text-3xl md:text-5xl mb-16">It's simple to get started</h1>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1 flex md:flex-col">
                    <div className=" relative flex flex-col justify-center md:w-full mb-4">
                        <h1 className="text-8xl text-green-500 font-[600] mb-4 hidden md:flex">1</h1>
                        <div className="flex items-center justify-center bg-green-200 w-[40px] h-[40px] rounded-full z-10">
                            <p className="text-green-500"><BsDot style={{fontSize:'80px'}} /></p>
                        </div>
                        <div className="absolute w-[2px] h-[110px] bottom-[-80px] md:bottom-[18px] left-5 md:left-4 md:w-full md:h-[2px] bg-green-500"></div>
                    </div>
                    <div className="pl-4 md:pl-8">
                        <h1 className="text-xl font-[600] mb-4">Sign Up</h1>
                        <p className="text-gray-400 md:w-2/3">Create an account for free using your emain address</p>
                    </div>
                </div>
                <div className="flex-1 flex md:flex-col my-8 md:my-0">
                    <div className=" relative flex flex-col justify-center md:w-full mb-4">
                        <h1 className="text-8xl text-green-500 font-[600] mb-4 hidden md:flex">2</h1>
                        <div className="flex items-center justify-center bg-green-200 w-[40px] h-[40px] rounded-full z-10">
                            <p className="text-green-500"><BsDot style={{fontSize:'80px'}} /></p>
                        </div>
                        <div className="absolute w-[2px] h-[110px] bottom-[-80px] md:bottom-[18px] left-5 md:left-4 md:w-full md:h-[2px] bg-green-500"></div>
                    </div>
                    <div className="pl-4 md:pl-8">
                        <h1 className="text-xl font-[600] mb-4">Explore the platform</h1>
                        <p className="text-gray-400">See what it's like to get a residence without surrounding in street</p>
                    </div>
                </div>
                <div className="flex-1 flex md:flex-col">
                    <div className=" relative flex flex-col justify-center md:w-full mb-4">
                        <h1 className="text-8xl text-green-500 font-[600] mb-4 hidden md:flex">3</h1>
                        <div className="flex items-center justify-center bg-green-200 w-[40px] h-[40px] rounded-full z-10">
                            <p className="text-green-500"><BsDot style={{fontSize:'80px'}} /></p>
                        </div>
                        <div className="absolute md:bottom-[18px] left-5 md:left-4 md:w-full md:h-[2px] bg-green-500"></div>
                    </div>
                    <div className="pl-4 md:pl-8">
                        <h1 className="text-xl font-[600] mb-4">Post your products</h1>
                        <p className="text-gray-400 ">Put your recommendation and let money come to you</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center my-24">
                <h1 className="font-[700] text-3xl mb-6 text-center">Ready to get free access to the Kivugreen world?</h1>
                <p className="text-gray-500 text-lg mb-4 text-center">Login in your account to start using the platform</p>
            </div>
        </div>
  )
}

export default GetStarted