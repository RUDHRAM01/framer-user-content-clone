import React from 'react'
import TagLine from '../landing/TagLine'
import Accordions from './Accordion'

function QA({isMobile}) {
  const data = {
    icon: "🙋‍♀️",
    title1: "FAQ",
    size: isMobile ? { title1: "20px" } : { title1: "50px" },
    title2: "Need",
    highlighted: "Answers?",
    title4: "Check out our most commonly asked questions below to find the information you need.",
  }
  return (
    <div className='qa'>
      <TagLine data={data} />
      <Accordions />
    </div>
  )
}

export default QA