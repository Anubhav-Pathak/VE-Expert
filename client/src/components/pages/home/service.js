import React from 'react'
import ServiceCarousel from './serviceCarousel'

const Service = () => {
    return (
        <section className='service min-h-screen flex items-center justify-center'>
            <div className='py-12 px-4 grid grid-cols-[30%_70%] gap-8 max-w-[1400px] place-items-center mx-auto'>
                <div className='text-white'>
                    <p className='flex items-center text-xl mt-3'><p>Our Services</p><span className='w-[50px] md:w-[150px] h-1 bg-yellow-400 ml-4 mt-2'></span></p>
                    <h1 className='text-5xl sm:text-6xl'>What we Offer</h1>
                    <p className='text-md sm:text-lg mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis minus alias rem dolorum excepturi sed? Minima iusto ex architecto ipsam quibusdam harum est porro illum cumque, quas praesentium exercitationem?</p>
                </div>
                <div className={"service-carousel"}>
                    <ServiceCarousel count={3} />
                </div>
            </div>
        </section>
    )
}

export default Service