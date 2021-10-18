/**
 * Tells the user who has liked their post based on an array of names.
 * @param people - array of names
 * @returns final message
 */
function whoLikesIt(people: string[]): string {
  if (people.length === 0) {
    return "no one likes this";
  }
  return 'wrong';
}

export default whoLikesIt;
