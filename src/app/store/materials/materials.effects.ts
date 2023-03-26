import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { switchMap,mergeMap, map, catchError, tap, distinctUntilChanged } from "rxjs/operators";
import { StorageService } from "src/app/core/services/storage-service/storage.service";
import { MaterialsActions } from "./material.action";
import { getMaterials } from "./materials.selectors";

@Injectable()
export class MaterialsEffects {

    constructor(private actions$: Actions, private store: Store, private storage: StorageService) {}

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
    updateAmout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MaterialsActions.updateAmount),
            map(({payload}) => MaterialsActions.updateAmountSuccess({payload})),
            catchError(() => [MaterialsActions.updateAmountError()])
        )
    );
    serialize$ = createEffect(() => 
            this.actions$.pipe(
                ofType(MaterialsActions.updateAmountSuccess, MaterialsActions.loadMaterialsSuccess),
                switchMap(() => this.store.select(getMaterials)),
                distinctUntilChanged(),
                tap((materials) => this.storage.updateStorage(materials)),
            ),
            { dispatch: false },
    )
}
