import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import storage from "redux-persist/lib/storage"; // используется localStorage по умолчанию
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// Настройка persist для сохранения части состояния
const campersPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["favorites"], // Сохраняем только favorites
};

// Обертка редюсера для его персистирования
const persistedCampersReducer = persistReducer(
  campersPersistConfig,
  campersReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Создание persistor для управления сохранением состояния
export const persistor = persistStore(store);
