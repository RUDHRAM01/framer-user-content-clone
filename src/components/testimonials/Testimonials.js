import React from 'react'
import TagLine from '../landing/TagLine'


function Testimonials() {
    const data = {
        icon: "🧡",
        title1: "TESTIMONIALS",
        size: { title1: "50px" },
        title2: "Hear from our",
        highlighted: "Satisfied",
        title3: "clients",
        title4: "Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.",
    }
  return (
      <div>
          <TagLine data={data} />
    </div>
  )
}

export default Testimonials