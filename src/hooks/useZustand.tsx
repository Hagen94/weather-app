import { create } from 'zustand'

export const UseStore = create((set) => ({
  city:"",
  changeCity: (newCity) => set({city: newCity}),
 
}))


