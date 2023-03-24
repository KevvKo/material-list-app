import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MaterialsState } from '../reducers/materials-state';

export const getMaterialsState = createFeatureSelector<MaterialsState>("materials");

export const getMaterials = createSelector(
    getMaterialsState,
    (state: MaterialsState) => state.materials
);
