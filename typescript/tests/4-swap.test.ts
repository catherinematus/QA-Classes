import { IsTypeEqual, typeAssert } from '../assertions';
import { swap } from '../tasks/4-swap';

const pair1 = swap(123, 'hello');
typeAssert<
    IsTypeEqual<
        typeof pair1,
        [string, number]
    >
>();

const pair2 = swap(true as const, false as const);
typeAssert<
    IsTypeEqual<
        typeof pair2,
        [false, true]
    >
>();

const pair3 = swap(null, undefined);
typeAssert<
    IsTypeEqual<
        typeof pair3,
        [undefined, null]
    >
>();