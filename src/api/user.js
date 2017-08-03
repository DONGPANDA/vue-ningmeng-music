/**
 * Created by 96004 on 2017/7/31.
 */
import axios from 'axios';
export function userSignUp (user) {
 return axios.post('/userApi/signup',user);
}
export function userSignIn (user) {
  return axios.post('/userApi/signin',user);
}
export function getUser () {
  return axios.get('/userApi/getUser')
}
