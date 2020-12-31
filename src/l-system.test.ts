import { generate, goto } from './l-system';

describe('generate', () => {
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

  test('fractal (binary) tree', () => {
    const system = generate('0', {
      1: '11',
      0: '1[0]0',
    });

    expect(system.next().value).toEqual('1[0]0');
    expect(system.next().value).toEqual('11[1[0]0]1[0]0');
    expect(system.next().value).toEqual('1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0');
    expect(system.next().value).toEqual('11111111[1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0]1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0');
    expect(system.next().value).toEqual('1111111111111111[11111111[1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0]1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0]11111111[1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0]1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0');
  })
});

describe('goto', () => {
  test('simple (algae)', () => {
    const system = generate('ab', {
      a: 'ab',
      b: 'a',
    });

    expect(goto(system, 2)).toEqual('abaababa');
  });
});
