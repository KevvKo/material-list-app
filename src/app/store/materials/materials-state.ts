import { MaterialModel } from '../../core/models';

export type MaterialsState = {
    materials: Array<MaterialModel>
    currentSelected: MaterialModel | undefined
}

export const InitialMaterialsState: MaterialsState = {
    materials: [],
    currentSelected: undefined
};
