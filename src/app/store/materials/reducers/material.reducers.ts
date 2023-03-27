import { createReducer, on } from "@ngrx/store";
import { InitialMaterialsState } from "../materials-state";
import { MaterialsLoadAction } from "../actions/materials-load.action";
import { MaterialsUpdateAmountAction } from "../actions/materials-update-amount.actions";
import { MaterialsSelectedAction } from "../actions/materials-selected.actions";
import { MaterialsAddItemsAction } from "../actions/materials-add-items.actions";

export const materialsReducer = createReducer(
    InitialMaterialsState,
    on(MaterialsAddItemsAction.addItems, (state, {payload}) => ({ ...state, materials: [...state.materials, ...payload] })),
    on(MaterialsUpdateAmountAction.updateAmountSuccess, (state, {payload}) => {

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
    on(MaterialsLoadAction.loadMaterialsSuccess, (state, { payload }) => {
        return {
            ...state,
            materials: [...state.materials, ...payload.materials]
        }
    }),
    on(MaterialsSelectedAction.update, (state, { payload }) => {
        return {
            ...state,
            currentSelected: payload.material
        }
    }),
    on(MaterialsSelectedAction.remove, (state) => {
        return {
            ...state,
            currentSelected: null
        }
    }),
)
