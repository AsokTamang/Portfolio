import {myProjects} from '../../constants'
import Project from '@/components/project'
export default function Projects(){
    return(
        <section className='relative c-space section-spacing'>
            <h2 className='text-heading'>My Projects</h2>
            <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full'>
              {myProjects.map((project,index)=>(
                <Project key={index}   {...project}/>    /**here we are passing all the details of project as the props */

              ))}
            </div>
           
        </section>
    )

}