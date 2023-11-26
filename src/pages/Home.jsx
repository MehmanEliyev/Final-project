import React from 'react';
import {Line, Circle} from '../SVG/index';
import Button from '../components/Button';
import {Link} from 'react-router-dom';

export const Home = () => {
  return (
    <div className='h-rest bg-primary'>
        <div className="container xl:max-w-screen-xl mx-auto ">
          <div className="flex h-rest items-center">
             <div className="w-7/12 ">
                <div className='flex justify-items-start items-center p-2'>
                  <Line className='m-4'/>
                  <p className='text-white text-h5 font-serif italic '>Welcome to Pages</p>
                </div>
                <p className='text-white text-h1 font-serif font-bold p-2 leading-tight'>Books are uniquely portable magic</p>
                <p className='text-white text-base font-sans font-light p-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className='flex items-center'>
                  <Button
                    className="h-65 w-220 bg-secondary text-primary font-serif font-bold text-base mt-8 mr-4 hover:bg-white hover:text-primary "
                    text="Order Today"
                  />
                  <Link
                    className="h-65 w-220 text-white font-serif font-bold text-base ml-6 pt-4 mt-8 underline underline-offset-8"
                    to="/"
                  >
                  Read Free Demo
                  </Link>
                
                </div>
                  <div className='flex items-center mt-8'>
                    <div className='w-4/12 flex'>
                      <div className='pt-2'><Circle/></div>
                      <div className='ml-4'>
                        <p className='text-white font-serif font-bold text-h5'>Pages:</p>
                        <p className='text-shadow font-sans text-blockquote font-light'>586pages</p>
                      </div>
                    </div>
                    <div className='w-4/12 flex'>
                      <div className='pt-2'><Circle/></div>
                      <div className='ml-4'>
                        <p className='text-white font-serif font-bold text-h5'>Length:</p>
                        <p className='text-shadow font-sans text-blockquote font-light'>10 Hours</p>
                      </div>
                    </div>
                    <div className='w-4/12 flex'>
                      <div className='pt-2'><Circle/></div>
                      <div className='ml-4'>
                        <p className='text-white font-serif font-bold text-h5'>Raitings:</p>
                        <p className='text-shadow font-sans text-blockquote font-light'>4.5/5 (305 ratings)</p>
                      </div>
                    </div>
                    
                  </div>
                
              </div>
              <div className="w-5/12 flex justify-center items-center ">
                <div className='w-96'>
                  <img className='object-contain' src="../../photos/Book.png" alt="" />
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

// 