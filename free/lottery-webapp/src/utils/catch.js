/*
 * @Author: TravelerZw 
 * @Date: 2019-05-06 17:07:32 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-07 10:50:09
 */


import storage from 'good-storage';

const USER_TOKEN_KEY = '__user_token__';

export function saveUserToken(token) {
  storage.set(USER_TOKEN_KEY, token)
  return storage.get(USER_TOKEN_KEY)
}
export function clearUserToken() {
  storage.remove(USER_TOKEN_KEY);
  return "";
}
export function loadUserToken() {
  return storage.get(USER_TOKEN_KEY, "");
}