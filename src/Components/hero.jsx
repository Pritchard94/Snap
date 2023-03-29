import React from 'react'
import databiz from '../assets/images/client-databiz.svg'
import audiophile from '../assets/images/client-audiophile.svg'
import maker from '../assets/images/client-maker.svg'
import meet from '../assets/images/client-meet.svg'
import mobile from '../assets/images/image-hero-mobile.png'

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 md:pl-8 items-center justify-between mt-5'>
        <div className='order-last  mt-2 px-3'>
            <h1 className='text-[40px] md:text-[50px] md:text-left xl:w-[400px] text-center font-bold'>
                Make remote work
            </h1>
            <p className='text-[20px] md:text-left xl:w-[500px] md:mt-3 font-medium text-center text-gray-500'>
                Get your team in sync no matter your location.
                Streamline processes create team rituals and watch productivity soar
            </p>
            <div className='text-center md:text-left md:mt-[40px]'>
                <button className='mt-[30px] text-white bg-black py-2 px-3  rounded-xl'>Learn More</button>
            </div>
            <div className='flex justify-between mt-[30px] w-full shrink-[2]'>
                <img src={databiz} alt="databiz"/>
                <img src={audiophile} alt ='Audiophile'/>
                <img src ={maker} alt="maker"/>
                <img src={meet} alt="meet"/>
               
            </div>
        </div>
        <div className='md:order-last'>
            <img className='' src={mobile} alt='heroimg'/>
        </div>
      
    </div>
  )
}

export default Hero