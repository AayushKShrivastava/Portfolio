import React from 'react'
import NotesImg from '../assets/notes.png'
import Quizzical from '../assets/quizzical.png'
import Meme from '../assets/meme.png'
import Tenzies from '../assets/tenzies.png'
import Calculator from '../assets/calculator.png'
import Amazon from '../assets/amazon2.png'
import Scheduler from '../assets/scheduler.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>-- Check out some of my recent works</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div style={{backgroundImage: `url(${Scheduler})`}} className='border-2 border-pink-600 hover:border-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-while tracking-wider'>Meeting Scheduler</span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/AayushKShrivastava/Scaler-Interview-Scheduler'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Amazon})`}} className='border-2 border-pink-600 hover:border-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-while tracking-wider'>Amazon Clone</span>
                        <div className='pt-8 text-center'>
                            <a href='https://clone-19369.firebaseapp.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/AayushKShrivastava/amazon-clone'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${NotesImg})`}} className='border-2 border-pink-600 hover:border-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-while tracking-wider'>Markdown Notes App</span>
                        <div className='pt-8 text-center'>
                            <a href='https://notes-app01.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/AayushKShrivastava/notes-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Quizzical})`}} className='border-2 border-pink-600 hover:border-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-while tracking-wider'>Quizzical App</span>
                        <div className='pt-8 text-center'>
                            <a href='https://quizzical01.netlify.app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/AayushKShrivastava/quizzical'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Meme})`}} className='border-2 border-pink-600 hover:border-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-while tracking-wider'>Meme Generator</span>
                        <div className='pt-8 text-center'>
                            <a href='https://meme-generator-01.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/AayushKShrivastava/meme-generator'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Calculator})`}} className='border-2 border-pink-600 hover:border-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-while tracking-wider'>Calculator</span>
                        <div className='pt-8 text-center'>
                            <a href='https://aayushkshrivastava.github.io/calculator/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/AayushKShrivastava/calculator'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font- text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
