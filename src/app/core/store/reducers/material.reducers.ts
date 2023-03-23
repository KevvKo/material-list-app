import { createReducer, on } from "@ngrx/store";
import { addItems, bookAmount } from "../actions/material.action";
import { MaterialModel } from "../../models";

const initialState: Array<MaterialModel> = [];

export const materialsReducer = createReducer(
    initialState,
    on(addItems, (state, {payload}) => [...state, ...payload]),
)