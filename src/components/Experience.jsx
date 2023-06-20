import React from 'react'
import ScalerLogo from '../assets/scaler-logo.png'

const Experience = () => {
    return (
        <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-left pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work Experience</p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className='sm:text-right pb-8 pl-4'>
                <h2 className='text-4xl sm:7xl font-bold text-[#8892b0]'>Software Developer Intern (Jan 2023 - Present) </h2>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4 items-center'>
                    <div className='sm:text-right pb-8 pl-4 text-4xl font-bold'>
                        <a href='https://www.scaler.com/'>
                            <img className='w-200 h-200 mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-500' src={ScalerLogo} alt='html' />
                        </a>
                    </div>
                    <div>
                        <ul className='list-disc pl-4'>
                            <li>
                                Saved thousands of dollars by eliminating single point of failure, while ensuring continuation of services
                            </li>
                            <li>
                                Brought the All Tools page to life, along with an intuitive platform for its management by the admins
                            </li>
                            <li>
                                Increased efficiency of content development process with in-house text editor
                            </li>
                            <li>
                                Improved search engine ranking by automating the creation of website sitemap
                            </li>
                            <li>
                                Tech stack used - Ruby on Rails, MySQL, Rspec, React, AWS
                            </li>
                        </ul>
                    </div>
                </div>
                <h1 className='text-2xl sm:7xl font-bold text-[#ccd6f6] mt-6'> Tech stack used - Ruby on Rails, MySQL, Rspec, React, AWS</h1>
            </div>
        </div>
    )
}

export default Experience