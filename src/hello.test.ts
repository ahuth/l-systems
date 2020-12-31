import hello from './hello';

test('hello world', () => {
  expect(hello()).toEqual('hello, world!');
  expect(hello('Santa')).toEqual('hello, Santa!');
});
