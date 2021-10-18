import whoLikesIt from "./skeleton";

test("Zero people test:", () => {
  expect(whoLikesIt([])).toBe("no one likes this");
});

test("One person test:", () => {
  expect(whoLikesIt(['Josh'])).toBe("Josh likes this");
});

test("Two person test:", () => {
  expect(whoLikesIt(['Josh', 'Chris'])).toBe("Josh and Chris likes this");
});
