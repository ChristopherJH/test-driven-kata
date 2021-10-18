import whoLikesIt from "./skeleton";

test("Final message:", () => {
  expect(whoLikesIt([])).toBe("no one likes this");
});
