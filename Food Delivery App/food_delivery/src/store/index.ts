import { cartReducer } from "./slices/cart.slice";
import { combineReducers, compose, configureStore, createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "root",
    storage
};

const reducer = combineReducers({
    cart: cartReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== "undefined" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, composeEnhancers());

export const persistor = persistStore(store);
