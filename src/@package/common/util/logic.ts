export function atLeastTwoAreTrue(params: boolean[]): boolean {
  let trueCount = 0;
  params.forEach((p) => {
    if (p) {
      trueCount++;
    }
  });

  return trueCount > 1;
}
