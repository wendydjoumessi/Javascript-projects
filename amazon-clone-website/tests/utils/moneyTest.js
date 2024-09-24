import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
   it('converts cents into dolars', () => { //test case
       expect(formatCurrency(2095)).toEqual('20.95');
   });

   it('works with 0', () => { //test case
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds to the nearest cent', () => { //test case
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});