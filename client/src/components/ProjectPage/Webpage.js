import React from 'react';
import Description from './Descriptions/Description';
import ImageSlider from './ImageSlider';
import Title from './Title';
import { IoMdArrowBack } from 'react-icons/io';

const Webpage = ({ Project,goBack }) => {
  return (
    <div className='relative '>
      <div className="fixed">
        <button className="opacity-100 bg-black rounded-full p-2 text-white ml-5" onClick={goBack}>
          <IoMdArrowBack size={"30"}/>
        </button>
      </div>
      <div className='flex'>
        <div className=' border-8' style={{ flexGrow: 1, overflowY: 'hidden' }}>
          <div className="p-4"> {/* Add padding here */}
            <Title title={Project} />
          </div>
          <div className='p-4 bg-gradient-to-b from-white to-gray-300'>
            <Description Project={Project} />
          </div>
        </div>
        <div style={{ flexGrow: 2 }}>
          <ImageSlider name={Project} />
        </div>
      </div>
    </div>
  );
};

export default Webpage;
