import { combineReducers, configureStore } from "@reduxjs/toolkit";

import menuReducer from "./slices/menuSlice";
import cartReducer from "./slices/cartSlice";
// import orderReducer from "./slices/orderSlice";

import { menuApi } from "./apis/menuApi";
import { orderApi } from "./apis/orderApi";
import { reviewsApi } from "./apis/reviewsApi";

import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";

const persistCartConfig = {
  key: 'cart',
  storage,
}

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: persistReducer(persistCartConfig,cartReducer),
  [orderApi.reducerPath]: orderApi.reducer,
  [menuApi.reducerPath]: menuApi.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware,reviewsApi.middleware,orderApi.middleware),
});

export const persistor = persistStore(store);
