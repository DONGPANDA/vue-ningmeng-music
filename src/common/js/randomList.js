/**
 * Created by 96004 on 2017/7/21.
 */
function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export function shuffle (arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandom(0, i)
    let b = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = b
  }
  return _arr
}
