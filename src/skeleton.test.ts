import whoLikesIt from "./skeleton";

test("Zero people test:", () => {
  expect(whoLikesIt([])).toBe("no one likes this");
});

test("One person test:", () => {
  expect(whoLikesIt(['Josh'])).toBe("Josh likes this");
});

test("Two person test:", () => {
  expect(whoLikesIt(['Josh', 'Chris'])).toBe("Josh and Chris like this");
});

test("Three person test:", () => {
  expect(whoLikesIt(['Josh', 'Chris', 'Tim'])).toBe("Josh, Chris and Tim like this");
});

test("Four person test:", () => {
  expect(whoLikesIt(['Josh', 'Chris', 'Tim', 'Jess'])).toBe("Josh, Chris and 2 others like this");
});

test("Five person test:", () => {
  expect(whoLikesIt(['Josh', 'Chris', 'Tim', 'Jess', 'Jennifer'])).toBe("Josh, Chris and 3 others like this");
});
