import {
  none,
  some,
  fromNullable,
  isSome,
  isNone,
  map,
  getOrElse,
  Option,
  fold,
} from 'fp-ts/lib/Option';
// Option<T> ==> none | some<T>

const isEven = (n: number): boolean => n % 2 === 0;

// const noneValue = fromNullable(isEven(3));

// const someValue = some(10);

// console.log(someValue);
// console.log(isSome(someValue) ? someValue.value : 'none');

// getByUser(id): Option<{name: string, age: number}> ===> axios.get(`/users/${id}`)

const noneValue = none;
const someValue = some('rajesh');

const result = getOrElse(() => 'defult')(noneValue);

type TUser = {
  name?: string;
  age?: number;
};

type User = {
  name: Option<string>;
  age: Option<number>;
};

const userRajesh: TUser = { name: 'Sandeep' }; /// afterPAi call

const parseUser = (user: TUser): User => {
  return {
    name: fromNullable(user.name), // none | some<string>
    age: fromNullable(user.age),
  };
};

const userValue = parseUser(userRajesh);

//console.log(getOrElse(() => 50)(userValue.age));
//fold  (f1, f2)
// map
//console.log(result);

const foldValue = fold(
  () => 'name not found',
  (x: User) => `Welcome ${isSome(x.name) ? x.name.value : 'unknown'}`,
);

const optUser: Option<User> = some({ name: some('Rajesh'), age: some(20) });

console.log(foldValue(optUser));
