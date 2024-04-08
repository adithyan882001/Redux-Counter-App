import {configureStore} from "@reduxjs/toolkit" 
import counterSlice from './counterSlice'

const counterStore = configureStore({
    reducer:{
        counterReducer : counterSlice
    }
})

export default counterStore;