import {createAction, props } from '@ngrx/store';
import { MaterialModel } from '../../../core/models';

export const MaterialsAddItemsAction = {
    addItems: createAction('[MATERIAL] Add Materials', props<{payload: Array<MaterialModel>}> ()),
}
