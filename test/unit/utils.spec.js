import { incrementCount, decrementCount } from "../../src/utils/counter";

describe("incrementCount", () => {
  describe("when count is 0", () => {
    it("returns 1", () => {
      expect(incrementCount(0)).toBe(1);
    });
  });
  describe("when count is positive", () => {
    it("returns count + 1", () => {
      expect(incrementCount(1)).toBe(2);
    });
  });
  describe("when count is negative", () => {
    it("returns count + 1", () => {
      expect(incrementCount(-1)).toBe(0);
    });
  });
});
describe("decrementCount", () => {
  describe("when count is 0", () => {
    it("returns -1", () => {
      expect(decrementCount(0)).toBe(-1);
    });
  });
  describe("when count is positive", () => {
    it("returns count - 1", () => {
      expect(decrementCount(1)).toBe(0);
    });
  });
  describe("when count is negative", () => {
    expect(decrementCount(-1)).toBe(-2);
  });
});
