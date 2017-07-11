/**
 * Created by 96004 on 2017/7/11.
 */
export function addClass (el, classN) {
  if (hasClass(el, classN)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(classN)
  el.className = newClass.join(' ')
}
export function hasClass (el, classN) {
  let reg = new RegExp('(^|\\s)' + classN + '(\\s|$)')
  return reg.test(el.className)
}
