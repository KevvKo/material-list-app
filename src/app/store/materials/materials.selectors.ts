import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MaterialsState } from './materials-state';

export const getMaterialsState = createFeatureSelector<MaterialsState>("materials");

export const getMaterials = createSelector(
    getMaterialsState,
    (state: MaterialsState) => state.materials
);

export const getSelectedMaterial = createSelector(
    getMaterialsState,
    (state: MaterialsState) => state.currentSelected
);
