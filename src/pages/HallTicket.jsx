import React from 'react'
import Bannerimg from '../images/banner.png'
import '../pages/home.css'
import icon from '../images/icon.png'
import { Link } from 'react-router-dom'



function HallTicket() {
    const Email = localStorage.getItem('emailu')
    const Rollno = localStorage.getItem('rollNo');
    const Name = localStorage.getItem('nameu');
    const Dept = localStorage.getItem('deptu')
    const courseCode = localStorage.getItem('coursecode')
    const courseName = localStorage.getItem('coursename')
    const Date = localStorage.getItem('date')
    const Hallno = localStorage.getItem('hallnumu')
    const startTime = localStorage.getItem('startime')
    const endTime = localStorage.getItem('endtime')
    const Seat = localStorage.getItem('seat')	


    return (
        <>
            <div className='imagebanner'>
                <img src={Bannerimg} alt="load" />
            </div>


            <nav class="border-gray-200 bg-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center">
                        <img src={icon} class="h-14 mr-6" alt="Hall Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap ">EXAM HALL</span>
                    </a>
                    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">

                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page"><Link to='/homeuser'>Home</Link></a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to='/hallstud'>Hall Allocation</Link></a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to='/profilestud'>Profile</Link></a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to='/about'>About Us</Link></a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "><b>{Name}&nbsp;&nbsp;&nbsp;&nbsp;({Rollno})&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;{Dept}</b></a>
                    </div>
                </div>
            </nav>
            <br />
            <br />
            <br />

            <div className='con'>

                <div className="container">
                    <br />
                    <h1><b>{Rollno}</b></h1>
                    <br /><br />
                    <br />


                    <div className="hall-ticket">
      <h1>Hall Ticket</h1>
      <div>
        <p>Name: {Name}</p>
        <p>Roll No: {Rollno}</p>
        <p>Department: {Dept}</p>
      </div>
      <div>
        <p>Course Code: {courseCode}</p>
        <p>Course Name: {courseName}</p>
        <p>Date: {Date}</p>
        <p>Time: {startTime} - {endTime}</p>
        </div>
        </div>



                </div>
            </div>
            <br /><br />


            {/* <footer class="bg-black rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-blue-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer> */}






        </>

    )
}

export default HallTicket
