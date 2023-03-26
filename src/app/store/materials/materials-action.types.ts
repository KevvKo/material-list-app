import { MaterialModel } from "src/app/core/models";

export interface BookAmountAction {
    amount: number;
    materialId: number;
}

export interface LoadMaterialsAction {
    materials: MaterialModel[];
}
