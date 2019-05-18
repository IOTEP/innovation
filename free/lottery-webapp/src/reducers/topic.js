const TOPIC_STATE={
    // 默认第一页
    page:1,
    // 条数
    // limit:3,
    size:3,
    list:[],
    topicinfo:{},
    replies:[],
    joinUids: [],
    //点赞状态
    admireState:false
}

export default function topiclist(prestate=TOPIC_STATE,action){
    switch(action.type){
        case  'admireSuccess':
        return {
            ...prestate,admireState:!prestate.admireState
        }
        case 'getTopicInfo':
        return {
            ...prestate,
            replies:action.infoData.raffleUserList,
            joinUids:action.infoData.joinUserList,
            topicinfo:{
                ...action.infoData,
                raffleUserList: null,
                joinUserList: null
            }
        }
        case 'getTopicList':
        return {...prestate,list:action.list,page:1}
        case  'appendTopicList':
        return {...prestate,list:prestate.list.concat(action.list),page:action.page}
        default:
        return {...prestate}
    }
}