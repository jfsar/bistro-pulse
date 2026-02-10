import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='min-h-screen w-full mx-auto items-center bg-neutral-50'>
        { children }
    </main>
  )
}

export default AuthLayout;