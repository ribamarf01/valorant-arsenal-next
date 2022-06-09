import { FC } from 'react'

interface WeaponSkin {
  uuid?: string
  displayName: string
  displayIcon: string
  active?: boolean
}

const WeaponSkinContainer: FC<WeaponSkin> = ({ uuid, displayName, displayIcon, active }) => {
  return (<>
    <div className={`w-[8.375rem] h-[8.375rem] relative overflow-hidden  flex items-center justify-center hover:cursor-pointer group ${active ? 'border border-yellow-300': ''}`}>
      <div className='z-20 w-32 h-32 absolute border-cyan-400 group-hover:border-cyan-600 border-2'>
        <img className='w-32 h-32 object-cover object-center' src={displayIcon} alt={`Image for ${displayName}`} />
      </div>
      <div className="z-10 w-32 h-32 bg-gray-200 opacity-10 absolute">
        <span className="hidden">nothing</span>
      </div>
    </div>
  </>)
}

export default WeaponSkinContainer