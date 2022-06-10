import { useEffect, useState, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { changeEquipedSkin } from '../store/equiped/equipedWeaponsSlice'

import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import WeaponSkinContainer from '../components/WeaponSkinContainer'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface Weapon {
  uuid: string
  displayName: string
  defaultSkinUuid: string
  displayIcon: string
  skins: WeaponSkin[]
}

interface WeaponSkin {
  uuid: string
  displayName: string
  displayIcon?: string
}

const SkinPicker = ({ info: { uuid, displayName, defaultSkinUuid, displayIcon, skins }, initialSlide }) => {
  
  const defaultWeaponSkin: WeaponSkin = {
    uuid: defaultSkinUuid,
    displayName: `Standard ${displayName}`,
    displayIcon
  }

  const [selectedSkin, setSelectedSkin] = useState<WeaponSkin>(defaultWeaponSkin)
  const [initialSlidePlace, setInitialSlidePlace] = useState<number>(initialSlide)
  const dispatch = useDispatch()
  const equipedSkin = useSelector((state: RootState) => state.equipedWeapons[displayName])

  useEffect(() => {
    const actualEquipedSkinIndex = skins.findIndex(skin => equipedSkin === skin.displayIcon)

    if(actualEquipedSkinIndex === -1) return

    setSelectedSkin(skins[actualEquipedSkinIndex])
    setInitialSlidePlace(actualEquipedSkinIndex)
  }, [])

  const changeSkin = (skin: WeaponSkin): void => {
    skin.uuid === defaultSkinUuid ? setSelectedSkin(defaultWeaponSkin) : setSelectedSkin(skin)
  }

  return (<>
    <Head>
      <title>Picking {displayName} skin</title>
    </Head>

    <div className="flex flex-col h-screen justify-between items-center py-5 uppercase">

      {/* Lazy... */}
      <div className='flex items-center justify-between w-full px-12'>
        <Link href="/"><span className='text-white text-3xl font-tungsten tracking-wide cursor-pointer hover:text-gray-300 duration-300 transition-all'>Back</span></Link>
        <h1 className='text-yellow-300 text-7xl font-tungsten tracking-wider'>{displayName}</h1>
        <span className='invisible'>nothing</span>
      </div>

      <img className='h-64' src={selectedSkin.displayIcon} alt={`Image for ${selectedSkin.displayName}`} />

      <div className='flex flex-col items-center w-full'>
        <div className='flex flex-row justify-between items-center w-10/12'>
          <span className='invisible w-64'>nothing</span>
          <h1 className='text-gray-200 font-light tracking-tight text-center text-5xl'>{selectedSkin.displayName}</h1>
          <button 
            onClick={() => dispatch(changeEquipedSkin({ key: displayName, value: selectedSkin.displayIcon })) }
            className={`text-white bg-green-500 h-16 w-64 text-xl uppercase hover:bg-green-600 cursor-pointer duration-300 transition-all`}
          >
            Equip skin
          </button>
        </div>

        <Swiper
          className='w-10/12 my-6 px-6 select-none'
          spaceBetween={4}
          slidesPerView={11}
          initialSlide={initialSlidePlace}
          allowTouchMove={false}
          loop={true}
          centeredSlides={true}
          slideToClickedSlide={true}
        >
          {
            skins.map((skin, index) => (
              <SwiperSlide key={index} onClick={e => changeSkin(skins[index])}>
                <WeaponSkinContainer
                  uuid={skin.uuid}
                  displayName={skin.displayName}
                  displayIcon={skin.displayIcon}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>

    </div>

  </>)

}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://valorant-api.com/v1/weapons`)
  const { data } = await res.json()

  const paths = data.map(item => {
    return {
      params: {
        uuid: item.uuid
      }
    }
  })

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://valorant-api.com/v1/weapons/${params.uuid}`)
  const { data } = await res.json()

  let initialSlide

  const skins = data.skins.map((skin, index) => {

    let displayIcon = skin.displayIcon !== null ? skin.displayIcon : skin.chromas[0].displayIcon

    if (skin.uuid === data.defaultSkinUuid) {
      initialSlide = index
      displayIcon = data.displayIcon
    }

    return {
      uuid: skin.uuid,
      displayName: skin.displayName,
      displayIcon
    } as WeaponSkin
  })

  const info: Weapon = {
    uuid: data.uuid,
    displayName: data.displayName,
    defaultSkinUuid: data.defaultSkinUuid,
    displayIcon: data.displayIcon,
    skins
  }

  return {
    props: {
      info,
      initialSlide
    }
  }

}

export default SkinPicker