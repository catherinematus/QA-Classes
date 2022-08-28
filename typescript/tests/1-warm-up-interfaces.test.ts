import { IsTypeEqual, typeAssert } from '../assertions';
import { City, montreal, tampa } from '../tasks/1-warm-up-interfaces';

typeAssert<
    IsTypeEqual<
        typeof montreal,
        {
            coords: {
                latitude: number,
                longitude: number,
            },
            name: string,
        }
    >
>();

typeAssert<
    IsTypeEqual<
        typeof tampa,
        City & {
            coords: {
                latitude: number,
                longitude: number,
            },
        }
    >
>();