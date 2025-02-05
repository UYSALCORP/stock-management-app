import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import authReducer from "../features/authSlice";
import storage from 'redux-persist/lib/storage' //! Defaults to localStroge for web


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
