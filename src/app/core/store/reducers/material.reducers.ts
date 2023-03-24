import { createReducer, on } from "@ngrx/store";
import { addItems } from "../actions/material.action";
import { InitialMaterialsState } from "./materials-state";

export const materialsReducer = createReducer(
    InitialMaterialsState,

    on(addItems, (state, {payload}) => {
        
        const newState = {
            materials: [...payload],
            currentSelected: state.currentSelected
        }

        return newState;
    }),
)