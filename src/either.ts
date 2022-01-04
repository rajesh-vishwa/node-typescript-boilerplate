import { left, right, fromPredicate, getOrElse } from 'fp-ts/lib/Either';
// Either<E, A>

const leftValue = left('error');
const rightValue = right('success');

type EvenNumber = number;

const isEven = (n: number): n is EvenNumber => n % 2 === 0;

const eitherBuilder = fromPredicate(isEven, (n: number) => `${n} is not even`);

console.log(getOrElse(() => 0)(eitherBuilder(3)));
console.log(getOrElse(() => 0)(eitherBuilder(40)));

//TaskEither
