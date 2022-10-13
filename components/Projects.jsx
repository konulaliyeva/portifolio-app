import React from 'react';
import todoImg from '../public/assets/projects/todo.png';
import currencyImg from '../public/assets/projects/currencyApp.png'
import expenseImg from '../public/assets/projects/expense.png'
import tourismImg from '../public/assets/projects/tourism.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={todoImg}
            projectUrl='/todo'
            tech='Vanilla JS'
          />
          <ProjectItem
            title='Currency App'
            backgroundImg={currencyImg}
            projectUrl='/currency'
            tech='React JS'

          />
          <ProjectItem
            title='Expense List App'
            backgroundImg={expenseImg}
            projectUrl='/expense'
            tech='React JS'

          />
          <ProjectItem
            title='Tourism Service Website'
            backgroundImg={tourismImg}
            projectUrl='/tourism'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;