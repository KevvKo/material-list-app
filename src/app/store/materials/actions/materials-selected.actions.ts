import {createAction, props } from '@ngrx/store';
import { UpdateSelectedMaterialAction } from './materials-action.types';

export const MaterialsSelectedAction = {
    update: createAction('[MATERIAL] Update current selected material', props<{payload: UpdateSelectedMaterialAction}> ()),
    remove: createAction('[MATERIAL] Remove current selected material')
}
