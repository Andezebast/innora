import { combineReducers, configureStore } from "@reduxjs/toolkit";
import deleteReducer from "./deleteSlice";

const rootReducer = combineReducers({
  deleteReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
