import { generate } from './l-system';

test('simple (algae)', () => {
  const system = generate('ab', {
    a: 'ab',
    b: 'a',
  });

  expect(system.next().value).toEqual('aba');
  expect(system.next().value).toEqual('abaab');
  expect(system.next().value).toEqual('abaababa');
  expect(system.next().value).toEqual('abaababaabaab');
  expect(system.next().value).toEqual('abaababaabaababaababa');
});

test('constants', () => {
  const system = generate('acacb', {
    a: 'ab',
    b: 'a',
  });

  expect(system.next().value).toEqual('abcabca');
  expect(system.next().value).toEqual('abacabacab');
  expect(system.next().value).toEqual('abaabcabaabcaba');
  expect(system.next().value).toEqual('abaababacabaababacabaab');
  expect(system.next().value).toEqual('abaababaabaabcabaababaabaabcabaababa');
});
