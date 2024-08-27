import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container max-w-[1400px] px-[20px] m-auto' >
        {children}
    </div>
  )
}

export {Container}