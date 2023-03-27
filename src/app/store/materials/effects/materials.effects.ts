import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { switchMap,mergeMap, map, catchError, tap, distinctUntilChanged } from "rxjs/operators";
import { StorageService } from "src/app/core/services/storage-service/storage.service";
import { getMaterials } from "../selectors/materials.selectors";
import { MaterialsLoadAction } from "../actions/materials-load.action";
import { MaterialsUpdateAmountAction } from "../actions/materials-update-amount.actions";

@Injectable()
export class MaterialsEffects {

    constructor(private actions$: Actions, private store: Store, private storage: StorageService) {}

    loadMaterials$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MaterialsLoadAction.loadMaterials),
            mergeMap(() => this.storage.loadData().pipe(
                map( materials => {
                    return MaterialsLoadAction.loadMaterialsSuccess({payload: { materials }})
                }),
                catchError(() => [MaterialsLoadAction.loadMaterialsError()])
            ))
        )
    );
    updateAmout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MaterialsUpdateAmountAction.updateAmount),
            map(({payload}) => MaterialsUpdateAmountAction.updateAmountSuccess({payload})),
            catchError(() => [MaterialsUpdateAmountAction.updateAmountError()])
        )
    );
    serialize$ = createEffect(() => 
            this.actions$.pipe(
                ofType(MaterialsUpdateAmountAction.updateAmountSuccess, MaterialsLoadAction.loadMaterialsSuccess),
                switchMap(() => this.store.select(getMaterials)),
                distinctUntilChanged(),
                tap((materials) => this.storage.updateStorage(materials)),
            ),
            { dispatch: false },
    )
}
