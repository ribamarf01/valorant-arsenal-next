import { useEffect } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NotFound = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000) 
  }) 

  return (<>
    <Head>
      <title>Not found :(</title>
    </Head>

    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <h1 className="text-white text-7xl font-bold font-tungsten">This page doesn&apost exist.</h1>
      <Link href="/">
        <p className='text-white text-5xl font-tungsten cursor-pointer hover:text-gray-300 transition-all duration-300'>Go back to home clicking here or wait 3 seconds :D</p>
      </Link>
    </div>
  </>)

}

export default NotFound