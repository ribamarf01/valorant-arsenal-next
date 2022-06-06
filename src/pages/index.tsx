import Head from 'next/head'
import EcoGun from '../components/EcoGun'
import HeavyGun from '../components/HeavyGun'
import RifleGun from '../components/RifleGun'

import SmallGun from '../components/SmallGun'

const Home = () => {

  return (<>

    <Head>
      <title>Valorant arsenal maker</title>
    </Head>

    {/* Yours name arsenal */}

    {/* Weapons */}
    <div className='flex w-full min-h-full justify-center uppercase gap-x-8'>

      <div className='flex flex-col items-center'>
        <h1 className='tracking-widest text-xl text-white py-1 font-tungsten'>Sidearm</h1>
        <div className='flex flex-col gap-6'>
          <SmallGun name="Classic" uuid="29a0cfab-485b-f5d5-779a-b59f85e204a8" />
          <SmallGun name="Shorty" uuid="42da8ccc-40d5-affc-beec-15aa47b42eda" />
          <SmallGun name="Frenzy" uuid="44d4e95c-4157-0037-81b2-17841bf2e8e3" />
          <SmallGun name="Ghost" uuid="1baa85b4-4c70-1284-64bb-6481dfc3bb4e" />
          <SmallGun name="Sheriff" uuid="e336c6b8-418d-9340-d77f-7a9e4cfe0702" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <h1 className="tracking-widest text-xl text-white py-1 font-tungsten text-center">Smgs</h1>
          <EcoGun className='mb-6' name="Stinger" uuid="f7e1b454-4ad4-1063-ec0a-159e56b58941" />
          <EcoGun name="Spectre" uuid="462080d1-4035-2937-7c09-27aa2a5c27a7" />
          <h1 className="tracking-widest text-xl text-white py-2 font-tungsten flex justify-center items-center h-6">Shotguns</h1>
          <EcoGun className='mb-6' name="Bucky" uuid="910be174-449b-c412-ab22-d0873436b21b" />
          <EcoGun name="Judge" uuid="ec845bf4-4f79-ddda-a3da-0db3774b2794" />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='tracking-widest text-xl text-white py-1 font-tungsten'>Sidearm</h1>
        <div className='flex flex-col gap-6'>
          <RifleGun name="Bulldog" uuid="ae3de142-4d85-2547-dd26-4e90bed35cf7" />
          <RifleGun name="Guardian" uuid="4ade7faa-4cf1-8376-95ef-39884480959b" />
          <RifleGun name="Phantom" uuid="ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a" />
          <RifleGun name="Vandal" uuid="9c82e19d-4575-0200-1a81-3eacf00cf872" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <h1 className="tracking-widest text-xl text-white py-1 font-tungsten text-center">Sniper Rifles</h1>
          <HeavyGun className="mb-6 font-tungsten" name="Marshal" uuid="c4883e50-4494-202c-3ec3-6b8a9284f00b" />
          <HeavyGun name="Operator" uuid="a03b24d3-4319-996d-0f8c-94bbfba1dfc7" />

          <h1 className="tracking-widest text-xl text-white py-1 font-tungsten flex justify-center items-center h-6">Machine guns</h1>
          <HeavyGun className="mb-6 font-tungsten" name="Ares" uuid="55d8a0f4-4274-ca67-fe2c-06ab45efdf58" />
          <HeavyGun name="Odin" uuid="63e6c2b6-4a8e-869c-3d4c-e38355226584" />
          
          <h1 className="tracking-widest text-xl text-white py-1 font-tungsten flex justify-center items-center h-6">Melee</h1>
          <HeavyGun name="Melee" uuid="2f59173c-4bed-b6c3-2191-dea9b58be9c7" />
        </div>
      </div>

    </div>


  </>)

}

export default Home
