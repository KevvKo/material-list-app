import { MatError } from "@angular/material/form-field";
import { createReducer, on } from "@ngrx/store";
import { MaterialsActions } from "./material.action";
import { InitialMaterialsState } from "./materials-state";

export const materialsReducer = createReducer(
    InitialMaterialsState,
    on(MaterialsActions.addItems, (state, {payload}) => ({ ...state, materials: [...state.materials, ...payload] })),
    on(MaterialsActions.bookAmount, (state, {payload}) => {

        const { materialId, amount} = payload;
        return {
            ...state,
            materials: state.materials.map( material => {
                if ( material.Id === materialId ) {
                    return {
                        ...material,
                        Quantity: Number(material.Quantity) + amount,
                        Available: Number(material.Available) - amount,
                    }
                }

                return material;
            })
        }
    }),
    on(MaterialsActions.loadMaterials, (state, { payload }) => {

        return {
            ...state,
            materials: [...state.materials, ...payload.materials]
        }
    }),
)