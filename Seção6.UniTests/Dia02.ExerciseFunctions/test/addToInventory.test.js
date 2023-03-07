const addToInventory = require('../src/addToInventory');
describe('a função addToInventory', () => {
  const array = addToInventory([1], 2);
  it('adiciona item ao inventário', () => {
    expect(array).toEqual([1,2]);
  });
  it('lança exceção se não for passado um array', () => {
    expect(() => addToInventory(1, 2)).toThrow('O inventário deve ser um array');
  });
});

