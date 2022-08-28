import { IsTypeEqual, typeAssert } from '../assertions';
import { User, logPerson, users } from '../tasks/2-user-type';

typeAssert<IsTypeEqual<User, { name: string, age: number, occupation: string }>>();
typeAssert<IsTypeEqual<typeof users, { name: string, age: number, occupation: string }[]>>();
typeAssert<IsTypeEqual<typeof logPerson, (user: { name: string, age: number, occupation: string }) => void>>();
