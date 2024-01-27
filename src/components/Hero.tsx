import React from 'react'

const Hero = () => {
  return (
    <section className='hero_section bg-["/hero_bg.png"]'>
        
        <div className='hero_float'>
            <p>New Arrival</p>
            <h2>Discover our new collection</h2>
            <p className='hidden md:inline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className='button_solid block'>Buy now</button>
        </div>
    </section>
  )
}

export default Hero