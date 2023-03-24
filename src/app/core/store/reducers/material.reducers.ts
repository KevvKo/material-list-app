import { createReducer, on } from "@ngrx/store";
import { addItems, bookAmount } from "../actions/material.action";
import { MaterialModel } from "../../models";

const initialState: Array<MaterialModel> = [
    {
        "Material": "6396734",
        "Quantity": "2",
        "DescTxt": "E06396734       \\D400",
        "CustomerPrice": "40000.000",
        "CustomerCurrency": "EUR",
        "RepairPrice": "9592.000",
        "RepairCurrency": "EUR",
        "Available": "16093",
        "ExtUnit": "ST",
        "MatStatus": "",
        "StorageLoc": "1000",
        "StorageLocDesc": "10032476",
        "NDFQuote": "002",
        "NDFCounter": "000001",
        "TSPercentage": "016",
        "TSPercentageCounter": "000001"
      },
];

export const materialsReducer = createReducer(
    initialState,
    on(addItems, (state, {payload}) => [...state, ...payload]),
)