import { FC } from 'react'

interface WeaponSkin {
  uuid?: string
  displayName: string
  displayIcon: string
}

const WeaponSkinContainer: FC<WeaponSkin> = ({ displayName, displayIcon }) => {
  return (<>
    <div className='w-[8.375rem] h-[8.375rem] relative overflow-hidden border border-yellow-300 flex items-center justify-center'>
      <div className='w-32 h-32 absolute border-blue-300 border-2'>
        <img className='w-32 h-32 object-cover object-center' src={displayIcon} alt={`Image for ${displayName}`} />
      </div>
      <div className="w-32 h-32 bg-gray-200 opacity-20 absolute">
        <span className="hidden">nothing</span>
      </div>
    </div>
  </>)
}

export default WeaponSkinContainer