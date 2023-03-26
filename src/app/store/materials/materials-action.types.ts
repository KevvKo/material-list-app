import { MaterialModel } from "src/app/core/models";

export interface BookAmountAction {
    amount: number;
    materialId: number;
}

export interface LoadMaterialsSuccessAction {
    materials: MaterialModel[];
}
