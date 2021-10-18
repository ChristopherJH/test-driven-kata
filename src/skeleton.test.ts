import whoLikesIt from "./skeleton";

test("Zero people test:", () => {
  expect(whoLikesIt([])).toBe("no one likes this");
});

test("One person test:", () => {
  expect(whoLikesIt(['Josh'])).toBe("Josh likes this");
});
