///Reader

import { Reader } from 'fp-ts/lib/Reader';

// interface Reader<R, A> {
//   (r: R): A;
// }

interface Dependencies {
  i18n: {
    true: string;
    false: string;
  };
}

const instance: Dependencies = {
  i18n: {
    true: 'rajesh',
    false: 'sandeep',
  },
};

const myDep: Dependencies = {
  i18n: {
    true: 'dddddddd',
    false: 'eeeeeee',
  },
};

// (deps: Dependencies) => string  == Reader<Dependencies, string>

// const f = (b: boolean, deps: Dependencies): string =>
//   b ? deps.i18n.true : deps.i18n.false;

const f =
  (b: boolean): Reader<Dependencies, string> =>
  (deps) =>
    b ? deps.i18n.true : deps.i18n.false;

// const g = (n: number, deps: Dependencies): string => f(n > 2, deps);
const g = (n: number): Reader<Dependencies, string> => f(n > 2);

// const h = (s: string, deps: Dependencies): string => g(s.length + 1, deps);
const h = (s: string): ((deps: Dependencies) => string) => g(s.length + 1);
const resultH = h('rrrr');

console.log(resultH(myDep));

console.log(h('foo')); // 'true'
console.log(h('f00000')(instance));
