import React from 'react'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'

function Home() {
  return (
    <>
      <div className='overflow-hidden scroll-smooth'>
        <H1 />
        <H2 />
        <H3 />
        <H4 />
      </div>
    </>
  )
}

export default Home