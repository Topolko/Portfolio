import React from 'react'
import { Link } from 'react-router-dom';
import {arrow } from '../Assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm: text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
           Hi, I am <span className='font-samibold'>Luka</span> 👋🏻
           <br/>
            A full-stack eveloper from Croatia
        </h1>
    ),  
    2: (
        <InfoBox 
            text={"I picked up many skills along the way"}
            link="/about"
            btnText="Learn more"
        />
    ),  
    3: (    
            <InfoBox 
            text={"Worked on many projects over the years. Curious?"}
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),  
    4: (    
            <InfoBox 
            text={"Need help with a project or looking for a dev?"}
            link="/contact"
            btnText="Let's talk"
        />
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo