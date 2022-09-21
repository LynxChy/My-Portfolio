import React from 'react'
import Bar from '../Components/Bar'
import { languages, tools } from '../data'
import { FaUserGraduate } from 'react-icons/fa'

const resume = () => {
  return (
    <div className='px-6 py-2'>
        {/* //content */}

        <div className='grid gap-6 md:grid-cols-2'>
          <div>
            <div className='flex items-center space-x-2'>
            <FaUserGraduate/>
            <h5 className='my-3 text-2xl font-bold'>Education</h5>
            </div>
            
            <div>
              <h5 className='my-2 text-xl font-bold'>Software Systems Development</h5>
              <p className='font-semibold'>Tunku Abdul Rahman University College (2020–2022)</p>
              <p className='my-3'>
              Awarded a Bachelor of Information Technology in Software System 
              Development in May 2022. Major in Object-Oriented Analysis and Design,
              Web Application Development, Visual Programming, Mobile Application 
              Development, Advanced Computer Networks, and Cloud Computing.
              Current CGPA: 3.28 points.
              </p>
            </div>
          </div>
          <div>
            <h5 className='my-3 text-2xl font-bold'>Work Experience</h5>
            <div>
              <h5 className='my-2 text-xl font-bold'>Software Developer (Internship)</h5>
              <p className='font-semibold'>QR Retail Automation Sdn. Bhd. (Jan - Jul 2022)</p>
              <p className='my-3'>
              Worked as an internship with the roles of Software developer and 
              located under AMS team which handle mostly backend task that required
              to solve issue and user’s inquiry that faced by client side which 
              required problem solving skills. Having the opportunity to involved in 
              server migration activities. The company has increased my knowledge towards 
              programming skills which involved Java and SQL languages. 
              </p>
            </div>
          </div>
        </div>

        {/* //languages & tools */}
        <div className="grid gap6 md:grid-cols-2">
          <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className='my-2'>
            {
              languages.map(language=><Bar data={language} key={language.name}/>)
            }
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className='my-2'>
              {tools.map(tool => (
                (<Bar data={tool} key={tool.name}/>)
              ))}
          </div>
        </div>
      </div>

        </div>
  )
}

export default resume