import { FC, useEffect, useState } from 'react'

import Link from 'next/link'

import { useSelector } from 'react-redux'
import { RootState } from '../store'

interface GunProps {
  uuid: string
  name: string
}

const RifleGun: FC<GunProps> = ({ uuid, name }) => {

  const [imageUrl, setImageUrl] = useState<string>("")
  const selectedSkin = useSelector((state: RootState) => state.equipedWeapons[name])

  useEffect(() => {
    const newImageUrl = `https://media.valorant-api.com/weapons/${uuid}/displayicon.png`

    const settedSkin = selectedSkin === "" ? newImageUrl : selectedSkin

    setImageUrl(settedSkin)
  }, [])

  return (<>
    <Link href={`/${uuid}`}>
      <div className={`flex flex-col items-center h-36 w-[22rem] bg-gray-200 bg-opacity-25 hover:cursor-pointer group`}>
        <img className='px-4 my-auto' src={imageUrl} alt={name} />
        <p className='bg-gray-400 font-tungstenNarrow bg-opacity-80 w-full text-center text-white text-sm font-bold duration-500 group-hover:bg-amber-300'>{ name }</p>
      </div>
    </Link>
  </>)
}

export default RifleGun