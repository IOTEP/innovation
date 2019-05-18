import { combineReducers } from 'redux'
import  topiclist  from './topic'
import  comment  from './comment'
import  user  from './user'
import userlist from './userlist'
export default combineReducers({
  topiclist, comment, user, userlist
})
