import {
   combineReducers,
   configureStore,
   getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
   persistReducer,
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "reduxjs-toolkit-persist";
// import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import userReducer from "./Slices/UserSlice";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import { Reducer } from "redux";
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistConfig = {
   key: "root",
   storage: storageSession,
   stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
   user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers as Reducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware({
      serializableCheck: {
         /* ignore persistance actions */
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
});
