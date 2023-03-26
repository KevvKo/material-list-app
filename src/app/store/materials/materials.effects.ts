import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { MaterialsActions } from "./material.action";

import { LoadMaterialsAction } from "./materials-action.types";

@Injectable();

export class MaterialsEffects {

    constructor(private actions: Actions) {}

    loadMaterials = createEffect(() =>
        this.actions.pipe(
            ofType(MaterialsActions.loadMaterials),
            switchMap(() => {
                const data = localStorage.getItem("materials")
                MaterialsActions.addItems({data: data})
            })
        )
    );
}