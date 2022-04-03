/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let help = {}
  let len = matches.length
  for (let i = 0; i < len; i++) {
    let temp = matches[i][1]
    if (help[temp]) {
      help[temp] = help[temp] + 1
    } else {
      help[temp] = 1
    }
  }

  let win = []
  let lose = []
  for (let i = 0; i < len; i++) {
    let temp1 = matches[i][0]
    let temp2 = matches[i][1]
    if (!help[temp1]) {
      win.push(temp1)
    }
    if (help[temp2] === 1) {
      lose.push(temp2)
    }
  }

  win = [...new Set(win)]
  win.sort((a, b) => {
    return a - b
  })
  lose.sort((a, b) => {
    return a - b
  })

  return [win, lose]
}

console.log(
  findWinners([
    [2, 3],
    [1, 3],
    [5, 4],
    [6, 4]
  ])
)
