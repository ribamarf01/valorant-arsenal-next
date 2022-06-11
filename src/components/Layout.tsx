import { useRef } from 'react'

import Image from 'next/image'

import { toPng } from 'html-to-image'
import { saveAs } from 'file-saver'

const Layout = ({ children }) => {

  const imageRef = useRef()

  const getImage = () => {
    toPng(imageRef.current).then(image => saveAs(image, 'image.png'))
  }

  return (
    <div className="flex justify-center relative w-full h-screen overflow-hidden">
      <div className='absolute w-full min-h-screen bg-valorant bg-top-16' ref={imageRef}>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="absolute z-10 w-auto min-w-full min-h-screen max-w-none -top-16"
        >
          <source
            src="video/ContractGlitches.webm"
            type="video/webm"
          />
        </video>

        <div className="absolute z-20 w-full min-h-screen">
          {children}
        </div>

      </div>

      <div className='absolute top-6 right-6 z-30'>
        <Image
          className='invert cursor-pointer'
          onClick={() => getImage()}
          src={'/img/camera.png'}
          width={32}
          height={32}
        />
      </div>
    </div>
  )
}

export default Layout
