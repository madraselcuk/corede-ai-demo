import React from 'react'
import HeroWrapper from './HeroWrapper'
import HeroContent from './HeroContent'

const index = () => {
  return (
    <HeroWrapper backgroundVariant="gradient" fullHeight={true}>
      <HeroContent />
    </HeroWrapper>
  )
}

export default index
