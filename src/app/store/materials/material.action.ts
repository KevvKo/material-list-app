import {createAction, props } from '@ngrx/store';
import { MaterialModel } from '../../core/models';
import { BookAmountAction, LoadMaterialsAction } from './materials-action.types';

export const bookAmount = createAction('[MATERIAL] Book Amount', props<{payload: BookAmountAction}> ());
export const addItems = createAction('[MATERIAL] Add Materials', props<{payload: Array<MaterialModel>}> ());
export const loadMaterials = createAction('[MATERIAL] Load Materials', props <{payload: LoadMaterialsAction}> ());

export const MaterialsActions = {
    bookAmount,
    addItems,
    loadMaterials
}