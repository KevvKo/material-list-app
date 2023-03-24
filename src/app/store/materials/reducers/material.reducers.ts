import { createReducer, on } from "@ngrx/store";
import { addItems } from "../actions/material.action";
import { InitialMaterialsState } from "../materials-state";

export const materialsReducer = createReducer(
    InitialMaterialsState,
    on(addItems, (state, {payload}) => ({ ...state, materials: [...state.materials, ...payload] })
))