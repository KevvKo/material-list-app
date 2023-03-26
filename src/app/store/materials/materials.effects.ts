import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap,mergeMap, map, catchError } from "rxjs/operators";
import { StorageService } from "src/app/core/services/storage-service/storage.service";
import { MaterialsActions } from "./material.action";

@Injectable()
export class MaterialsEffects {

    constructor(private actions$: Actions, private storage: StorageService) {}

    loadMaterials$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MaterialsActions.loadMaterials),
            mergeMap(() => this.storage.loadData().pipe(
                map( materials => {
                    return MaterialsActions.loadMaterialsSuccess({payload: { materials }})
                }),
                catchError(() => [MaterialsActions.loadMaterialsError()])
            ))
        )
    );
}