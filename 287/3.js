/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  let l = 0,
    r = 10000000
  let ans = 0

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2)
    let K = k
    for (let i = 0; i < candies.length; i++) {
      K -= Math.floor(candies[i] / mid)
      if (K <= 0) {
        break
      }
    }
    if (K <= 0) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return ans
}

console.log(maximumCandies([5, 8, 6], 3))
