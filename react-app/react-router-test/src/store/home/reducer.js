import { combineReducers } from 'redux'// 初始 state

let initState={
    inputValue: 1,
    list:[1,2,3]
};

let count = 0;

// reducer可以接收state，但是绝不能修改state，返回的是新的state
//知识点一 redux里面的值得改写方法应该编写在reducer里面
//知识点二 返回出去的值必须使用 state.* 下面的，直接使用将在初始值上修改看下面列子

export default (state = {count: 0},action)=>{
    switch (action.type) {
        case 'increase':
            // return {count: count+ 1} 使用count直接计算只会在初始值0上面进行加，永远都是1
            return {count: state.count+ 1,}
        case 'decrease':
            return {count: state.count- 1,}
        default:
            return state;
    }
}

