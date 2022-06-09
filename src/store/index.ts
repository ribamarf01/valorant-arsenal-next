import { configureStore } from "@reduxjs/toolkit";
import equipedWeaponsReducer from "./equiped/equipedWeaponsSlice";

export const store = configureStore({
  reducer: {
    equipedWeapons: equipedWeaponsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch