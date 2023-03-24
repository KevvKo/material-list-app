import { SetupService } from '../../core/services/setup.service';

export function initMaterialLoadFactory(provider: SetupService) {
    return () => provider.loadJSON();
}