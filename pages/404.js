import React from 'react';
import Link from 'next/link'
const Error = () => {
    return (
      <div className="container">
         <div className="error text-center">
           <h1 className='mt-5 pt-5 fw-bold text-secondary'>Page Not Found Error</h1>
           <p className='my-4'><Link href="/"><a className="link rounded-3 bg-secondary p-2 px-5 btn text-white my-5">Go Home</a></Link></p>
        </div>
      </div>
    )
}

export default Error;