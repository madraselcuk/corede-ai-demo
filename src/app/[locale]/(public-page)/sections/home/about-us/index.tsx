import * as React from 'react'
import AboutUsImage from './AboutUsImage';
import AboutUsContent from './AboutUsContent';
import { GradientCircle } from '../../../components/background/GradientCircle';

const index = () => {
  return (
    <section className="py-8 flex flex-col relative md:flex-row items-center container max-w-7xl mx-auto justify-center gap-8 w-full overflow-x-hidden">
     
     <div className="absolute -z-10 left-0 top-0">
        <GradientCircle width={500} height={500} />
      </div>
      
      <div className="w-full lg:w-1/3">
        <AboutUsImage />
      </div>
      <div className="w-full lg:w-2/3 mt-12 md:mt-0 px-2">
        <AboutUsContent />
      </div>
    </section>
  )
}

export default index
