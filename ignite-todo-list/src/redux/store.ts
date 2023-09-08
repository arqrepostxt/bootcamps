import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import themeReducer from "./themeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";



const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  task: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
