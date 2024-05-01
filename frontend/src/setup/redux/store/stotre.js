import {configureStore} from "@reduxjs/toolkit";
import { rootReducer } from "../root/Slicers";

export const store = configureStore({
    reducer : rootReducer
})