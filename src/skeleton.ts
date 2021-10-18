/**
 * Tells the user who has liked their post based on an array of names.
 * @param people - array of names
 * @returns final message
 */
function whoLikesIt(people: string[]): string {
  if (people.length === 0) {
    return "no one likes this";
  }
  else if (people.length === 1) {
    return `${people[0]} likes this`;
  }
  else if (people.length === 2) {
    return `${people[0]} and ${people[1]} likes this`;
  }
  return 'wrong';
}

export default whoLikesIt;
