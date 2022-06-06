import { FC, HTMLAttributes, useEffect, useState } from 'react'

interface GunProps extends HTMLAttributes<GunProps> {
  uuid: string
  name: string
}

const HeavyGun: FC<GunProps> = ({ uuid, name, className }) => {

  const [imageUrl, setImageUrl] = useState<string>("")

  useEffect(() => {
    const newImageUrl = `https://media.valorant-api.com/weapons/${uuid}/displayicon.png`
    setImageUrl(newImageUrl)
  }, [])

  return (<>
    <div className={`flex flex-col items-center h-36 w-[24rem] bg-gray-200 bg-opacity-25 hover:cursor-pointer group ${className ? className : ''}`}>
      <img className='px-4 my-auto overflow-hidden' src={imageUrl} />
      <p className='bg-gray-200 bg-opacity-80 w-full text-center text-white text-sm font-bold tracking-wider duration-500 group-hover:bg-amber-200'>{ name }</p>
    </div>
  </>)
}

export default HeavyGun