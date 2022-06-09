import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface EquipedWeapons {
  Classic: string,
  Shorty: string,
  Frenzy: string,
  Ghost: string,
  Sheriff: string,
  Bucky: string,
  Judge: string,
  Stinger: string,
  Spectre: string,
  Bulldog: string,
  Guardian: string,
  Phantom: string,
  Vandal: string,
  Marshall: string,
  Operator: string,
  Ares: string,
  Odin: string,
  Melee: string
}

const initialState: EquipedWeapons = {
  Classic: "",
  Shorty: "",
  Frenzy: "",
  Ghost: "",
  Sheriff: "",
  Bucky: "",
  Judge: "",
  Stinger: "",
  Spectre: "",
  Bulldog: "",
  Guardian: "",
  Phantom: "",
  Vandal: "",
  Marshall: "",
  Operator: "",
  Ares: "",
  Odin: "",
  Melee: ""
}

export const equipedWeaponsSlide = createSlice({
  name: 'equipedWeapons',
  initialState,
  reducers: {
    changeEquipedSkin: (state, action: PayloadAction<{ key: string, value: string }>) => {
      const { key, value } = action.payload
      state[key] = value

      console.log(`equiped ${key} to ${value}. state: ${state}`)

    }
  }
})

export const { changeEquipedSkin } = equipedWeaponsSlide.actions

export default equipedWeaponsSlide.reducer