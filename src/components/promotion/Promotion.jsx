import React from 'react'
import VideoImg from '@/assets/images/video.png'

const Promotion = () => {
  return (
    <div className='container'>
      <div className="text-center text-[#121212] py-10 flex flex-col gap-4">
        <h3 className="text-lg font-bold text-[#377DFF]">PROMOTION</h3>
        <h2 className="text-5xl font-medium">Winter Collections</h2>
        <p className="text-xl">Introducing the new winter jackets.</p>
      </div>
      <div className='container flex items-center justify-center pb-6'>
        <img src={VideoImg} alt="image" />
      </div>
    </div>
  );
}

export default Promotion