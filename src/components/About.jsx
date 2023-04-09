
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import{github,linkedin,leetcode}from'../assets'
import{styles}from'../styles';
import{services}from'../constants';
import{fadeIn,textVariant}from'../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
<motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
<div option={{max:45,scale:1,speed:450}}className='bg-tertiary riunded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>

<img src={icon} alt={title} className='w-16 h-16 object-contain'/>
<h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
</div>
</motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant( )}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>

      <div className={`${styles.heroSubText}absolute inset-0 flex justify-center m-3  mt-2 text-white-100`}>
<div onClick={()=>window.open("https://www.linkedin.com/in/devananth511/","_blank")}
className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '
>
  <img src={linkedin}
  className="w-1/2 h-1/2 object-contain"
  />
</div>
<div onClick={()=>window.open("https://github.com/DEVA5112002","_blank")}
className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '
>
  <img src={github}
  className="w-1/2 h-1/2 object-contain"
  />
</div>
<div onClick={()=>window.open("https://leetcode.com/devananth2024/","_blank")}
className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '
>
  <img src={leetcode}
  className="w-1/2 h-1/2 object-contain"
  />
</div>
  </div>

    </motion.div > 
    <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-45xl leading-[30px]">
    Aspiring computer programmer with a BTech (Hons.) degree an enthusiastic engineering fresh who is a self-starter
and capable to use technical skill for the betterment of the organization and enhance my proficiency in software development and looking forward to work in a
competitive environment that enhance overall learning.proven problem-solving and troubleshooting skills.To secure a challenging position in your reputable organization to utilize my technical skill for the growth of the organization
  as well as enhance my knowledge about new and emerging trends in the IT sector.
    


    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>{services.map((service,index)=>(<ServiceCard key={service.title} index={index}{...service}/>))}</div>
    </>
  )
}

export default SectionWrapper(About,"about")