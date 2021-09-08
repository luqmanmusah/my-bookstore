import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: })

console.log(store.getState())