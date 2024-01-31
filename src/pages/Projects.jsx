import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../Assets/icons'
import CTA from '../Components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
    <h1 className='head-text'>
      <span className='blue-gradient_text font-semibold drop-shadow'>Projects </span>
      I've workred on
    </h1>
    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map ((project) => (
        <div className='lg:w-[400px] w-full' key={project.name}>
          <div className='block-container w-12 h-12'>
            <div className={`btn-back rounded-xl ${project.theme}`}/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img
                src={project.iconUrl}
                alt='Project icon'
                className='w-[90%] h-[90%] object-contain'
              />
            </div>
          </div>
          <div className='mt-5 flex flex-col'>
            <h4 className='text-2xl font-popins font-semibold'>
              {project.name}
            </h4>
            <p className='mt-2 text-slate-500'>
              {project.description}
            </p>
            <div className='mt-5 flex items-center gap-2 font-popins'>
              <Link
                to={project.link}
                target="blank"
                rel="noopener norefer"
                className='font-semibold text-blue-500'
              >
                Live link
              </Link>
              <img
                src={arrow}
                alt='arrow'
                className='w-4 h-4 object-contain'/>
            </div>

          </div>
        </div>
      ))}
    </div>
    <hr className='border-slate-200'/>
    <CTA />
    </section>
  )
}

export default Projects