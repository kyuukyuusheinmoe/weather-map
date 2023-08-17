import React from 'react'

function Layout({children}) {
  return (
    <div className='mx-auto max-w-2xl'>
        {children}
    </div>
  )
}

export default Layout
