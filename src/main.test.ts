import { foo, greet } from './main'

test('the data is peanut butter', () => {
  expect(1).toBe(1)
});

test('greeting', () => {
  expect(greet('Foo')).toBe('Hello Foo')
});

test("foo", async () => {
  expect(await foo()).toBe(true)
})
