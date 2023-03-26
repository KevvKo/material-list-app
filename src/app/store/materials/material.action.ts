import {createAction, props } from '@ngrx/store';
import { MaterialModel } from '../../core/models';
import { BookAmountAction, LoadMaterialsSuccessAction, UpdateSelectedMaterialAction } from './materials-action.types';

export const addItems = createAction('[MATERIAL] Add Materials', props<{payload: Array<MaterialModel>}> ());

export const loadMaterials = createAction('[MATERIAL] Load Materials');
export const loadMaterialsSuccess = createAction('[MATERIAL] Load Materials successful', props <{payload: LoadMaterialsSuccessAction}> ());
export const loadMaterialsError = createAction('[MATTERIAL] Update Photo Error');

export const updateAmount = createAction('[MATERIAL] Update Amount', props<{payload: BookAmountAction}> ());
export const updateAmountSuccess = createAction('[MATERIAL] Update Amount success', props<{payload: BookAmountAction}> ());
export const updateAmountError = createAction('[MATERIAL] Update Amount error');

export const updateSelectedMaterial = createAction('[MATERIAL] Update current selected material', props<{payload: UpdateSelectedMaterialAction}> ());
export const removeSelectedMaterial = createAction('[MATERIAL] Remove current selected material');

export const MaterialsActions = {
    addItems,
    updateAmount,
    updateAmountSuccess,
    updateAmountError,
    loadMaterials,
    loadMaterialsError,
    loadMaterialsSuccess,
    updateSelectedMaterial,
    removeSelectedMaterial
}