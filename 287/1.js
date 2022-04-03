/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  let t1 = Number(current.slice(0, 2)) * 60 + Number(current.slice(3, 5))
  let t2 = Number(correct.slice(0, 2)) * 60 + Number(correct.slice(3, 5))
  let target = Math.abs(t1 - t2)
  let res = 0
  let time = [60, 15, 5, 1]
  let i = 0

  while (target !== 0) {
    res += Math.floor(target / time[i])
    target %= time[i]
    i++
  }

  return res
}

console.log(convertTime('09:41', '10:34'))
