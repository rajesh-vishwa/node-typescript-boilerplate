import { none, some } from 'fp-ts/lib/Option';
import { Reader } from 'fp-ts/lib/Reader';
const someValue = some(1);
const noneValue = none;

//console.log(someValue.map((x) => x + 1).fold(0, (x) => x));

interface Dependencies {
  i18n: {
    true: string;
    false: string;
  };
}

const f =
  (b: boolean): Reader<Dependencies, string> =>
  (deps) =>
    b ? deps.i18n.true : deps.i18n.false;

const g = (n: number): Reader<Dependencies, string> => f(n > 2);

const h = (s: string): Reader<Dependencies, string> => g(s.length + 1);

const instance: Dependencies = {
  i18n: {
    true: 'vero',
    false: 'falso',
  },
};

console.log(h('foo')(instance)); // 'vero'
