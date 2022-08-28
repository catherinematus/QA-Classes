import { IsTypeEqual, FirstArgument, typeAssert } from '../assertions';
import { Person, logPerson, persons } from '../tasks/3-person-type';

typeAssert<
    IsTypeEqual<
        Person,
        { name: string; age: number } & ({ occupation: string } | { role: string })
    >
>();

typeAssert<
    IsTypeEqual<
        typeof persons,
        ({ name: string; age: number } & ({ occupation: string } | { role: string }))[]
    >
>();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof logPerson>,
        { name: string; age: number } & ({ occupation: string } | { role: string })
    >
>();

typeAssert<
    IsTypeEqual<
        ReturnType<typeof logPerson>,
        void
    >
>();