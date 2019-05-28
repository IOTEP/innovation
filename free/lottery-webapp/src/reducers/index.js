import { combineReducers } from 'redux'
import  topiclist  from './topic'
import  commentlist  from './comment'
import  user  from './user'
import userlist from './userlist'
import followlist from './followlist'
import fanslist from './fanslist'
import pricelist from './pricelist'

export default combineReducers({
  topiclist, commentlist, user, userlist,followlist,fanslist,pricelist
})
