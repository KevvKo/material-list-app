import { MaterialModel } from '../../models'

export type MaterialsState = {
    materials: Array<MaterialModel>
    currentSelected: MaterialModel | null
}

export const InitialMaterialsState: MaterialsState = {
    materials: [],
    currentSelected: null
};
