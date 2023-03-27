import { createAction, props } from '@ngrx/store';
import { BookAmountAction } from './materials-action.types';

export const MaterialsUpdateAmountAction = {
    updateAmount : createAction('[MATERIAL] Update Amount', props<{payload: BookAmountAction}> ()),
    updateAmountSuccess : createAction('[MATERIAL] Update Amount success', props<{payload: BookAmountAction}> ()),
    updateAmountError : createAction('[MATERIAL] Update Amount error'),
}