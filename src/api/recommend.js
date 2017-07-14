/**
 * Created by 96004 on 2017/7/11.
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from 'api/config'
import axios from 'axios'

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

export function getDiss () {
  const url = '/api/getDiss'
  const data = Object.assign({}, commonParams, {
    rnd: Math.random(),
    loginUin: 0,
    hostUin: 0,
    notice: 0,
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return res.data
  })
}
