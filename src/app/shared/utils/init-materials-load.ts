import { MaterialService } from "src/app/core/services/material.service";

export function initMaterialLoadFactory(provider: MaterialService) {
    return () => provider.loadMaterials();
}