import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user/userSlice'
//import { createStore } from 'redux'
import { saveState, loadState } from '../localStorage'

const persistedState = loadState()

// convert object to string and store in localStorage
//function saveToLocalStorage(state) {
//  try {
//    const serialisedState = JSON.stringify(state)
//    localStorage.setItem('persistantState', serialisedState)
//  } catch (e) {
//    console.warn(e)
//  }
//}

// load string from localStarage and convert into an Object
// invalid output must be undefined
//function loadFromLocalStorage() {
//  try {
////    const serialisedState = localStorage.getItem('persistantState')
//    if (serialisedState === null) return undefined
////////    return JSON.parse(serialisedState)
//  } catch (e) {
//    console.warn(e)
//    return undefined
//  }
//}

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

store.subscribe(() => {
  saveState({
    user: store.getState().user,
  })
})

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
//const store = createStore(userReducer, loadFromLocalStorage())

//store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
