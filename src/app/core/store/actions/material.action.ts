import {createAction, props } from '@ngrx/store';
import { MaterialModel } from '../../models';

export const bookAmount = createAction('[MATERIAL] Book Amount');
export const addItems = createAction('[MATERIAL] Add Materials', props<{payload: Array<MaterialModel>}> ());
