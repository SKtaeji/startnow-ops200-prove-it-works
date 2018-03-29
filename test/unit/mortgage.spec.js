const expect = require("chai").expect;
const Mortgage = require("../../src/js/lib/Mortgage");

describe("Mortgage Calculator", () => {
  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage();
  });

  it("should have a mortgage calculate function", () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it("should return 6322.22", () => {
    let actual = mortgage.monthlyPayment(500000, 15, 30);
    let expected = 6322.22;
    expect(actual).to.equal(expected);
  });

    it("should return 79646.37", () => {
      expect(mortgage.monthlyPayment(7200000, 13, 30)).to.equal(79646.37);
    });

    it("should return 5038.48", () => {
      expect(mortgage.monthlyPayment(254255, 23, 15)).to.equal(5038.48);
    });
});
