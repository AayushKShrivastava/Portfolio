import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right pb-8 pl-4 text-4xl font-bold'>
                    <p>Hi, I'm Aayush, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                        Dedicated to create impact with software development work and problem solving attitude. Adept at using Ruby, C++, SQL, JavaScript, React, HTML5, and CSS, with upright command on Data Structures and Algorithms to produce
                        clean, and efficient code. Well-organized and collaborative team player with strong communication, analytical, and
                        learning abilities. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About