import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import {services} from '../data'

const index = () => {
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
        <h5 className='my-3 font-medium'>
          I am a fresh graduate of Bachelor in Software Systems Development and am 
          looking for a job opportunity as a software developer to utilize the skills and 
          knowledge that I have learned from school in an actual job environment. 
          Hardworking, responsible, and diligent are the few good points I have. I am 
          ready to learn more from my new working environment to grow personally and professionally.
          </h5>
          <div className='flex-grow p-4 mt-5 bg-gray-400' 
          style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
            <h6 className='my-3 text-xl font-bold tracking-wide'>My Profile</h6>
            <div className='grid gap-6 lg:grid-cols-2'>
              {services.map(service => (
                <div className='bg-gray-200 rounded-lg lg:col-span-1'>
                  <ServiceCard services={service} />
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default index




