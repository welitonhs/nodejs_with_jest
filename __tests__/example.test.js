function soma(a, b) {
  console.log(process.env.DB_DIALECT);
  return a + b;
}

test('if i call soma function with 4 and 5 it should return 9', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
