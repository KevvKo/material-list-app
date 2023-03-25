import {createAction, props } from '@ngrx/store';
import { MaterialModel } from '../../../core/models';
import { MaterialsBookAmountAction } from '../reducers/materials-reducer.types';

export const bookAmount = createAction('[MATERIAL] Book Amount', props<{payload: MaterialsBookAmountAction}> ());
export const addItems = createAction('[MATERIAL] Add Materials', props<{payload: Array<MaterialModel>}> ());

export const MaterialsActions = {
    bookAmount,
    addItems
}