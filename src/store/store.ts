import {combineReducers, configureStore, Action, ThunkAction} from "@reduxjs/toolkit";
import { DashboardSliceReducer } from "../featuries/model/dashboard/dashboard-slice";

const rootReducer = combineReducers({
  dashboard: DashboardSliceReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>