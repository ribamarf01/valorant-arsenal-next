import { FC, useEffect, useState } from 'react'

interface GunProps {
  uuid: string
  name: string
}

const SmallGun: FC<GunProps> = ({ uuid, name }) => {

  const [imageUrl, setImageUrl] = useState<string>("")

  useEffect(() => {
    const newImageUrl = `https://media.valorant-api.com/weapons/${uuid}/displayicon.png`
    setImageUrl(newImageUrl)
  }, [])

  return (<>
    <div className='flex flex-col items-center h-36 w-48 bg-gray-200 bg-opacity-25 hover:cursor-pointer group'>
      <img className='px-4 my-auto' src={imageUrl} />
      <p className='bg-gray-200 bg-opacity-80 w-full text-center text-white text-sm font-bold tracking-wider duration-500 group-hover:bg-amber-200'>{ name }</p>
    </div>
  </>)
}

export default SmallGun