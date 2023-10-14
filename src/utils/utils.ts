/**
 * arrFilter('a', 'b', '') -> ['a', 'b']
 * @param arr
 * @returns
 */
export const arrFilter = (arr: string[]) => {
  return arr.filter((el) => !!el)
}
