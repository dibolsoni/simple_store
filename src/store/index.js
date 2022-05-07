import { configureStore } from '@reduxjs/toolkit'
import shoppingReduceer from './shopping/reducer'

export default configureStore({
    reducer: shoppingReduceer,
})