import { useEffect, useState } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

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

const SkinPicker = ({ info: { uuid, displayName, defaultSkinUuid, displayIcon, skins }, initialSlide}) => {

  const defaultWeaponSkin: WeaponSkin = {
    uuid: defaultSkinUuid,
    displayName: `Standard ${displayName}`,
    displayIcon
  }

  const [selectedSkin, setSelectedSkin] = useState<WeaponSkin>(defaultWeaponSkin)

  const changeSkin = (skin: WeaponSkin): void => {
    skin.uuid === defaultSkinUuid ? setSelectedSkin(defaultWeaponSkin) : setSelectedSkin(skin)
  }

  return (<>
    <Head>
      <title>Picking {displayName} skin</title>
    </Head>

    <div className="flex flex-col h-screen justify-between items-center py-5">
      <h1 className='text-yellow-200 text-center text-5xl font-semibold tracking-wider'>{displayName}</h1>

      <img className='h-64' src={selectedSkin.displayIcon} alt={`Image for ${selectedSkin.displayName}`} />

      <div className='flex flex-col items-center w-full'>
        <h1 className='text-gray-200 text-center text-5xl'>{selectedSkin.displayName}</h1>

        <Swiper
          className='w-10/12 my-6 px-6'
          spaceBetween={4}
          slidesPerView={11}
          initialSlide={initialSlide}
          loop={true}
          centeredSlides={true}
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
    
    if (skin.uuid === data.defaultSkinUuid) initialSlide = index

    return {
      uuid: skin.uuid,
      displayName: skin.displayName,
      displayIcon: skin.displayIcon
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