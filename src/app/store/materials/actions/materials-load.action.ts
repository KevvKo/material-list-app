import {createAction, props } from '@ngrx/store';
import { LoadMaterialsSuccessAction } from './materials-action.types';

export const MaterialsLoadAction = {
    loadMaterials: createAction('[MATERIAL] Load Materials'),
    loadMaterialsSuccess: createAction('[MATERIAL] Load Materials successful', props <{payload: LoadMaterialsSuccessAction}> ()),
    loadMaterialsError: createAction('[MATTERIAL] Update Photo Error'),
}
