/**
 * Created by 96004 on 2017/7/11.
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from 'api/config'

export function getRecommond () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 0,
    format: 'json',
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
