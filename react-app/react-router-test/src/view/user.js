import React from 'react';

class User1 extends React.Component {
    constructor(props) {
        super(props);
        // this.child = {};
    }

    changeInput (val) {
    }
    //生命周期钩子函数
    componentDidMount () {
        console.log(this.props.location,'home........');
        // this.props.router.setRouteLeaveHook(
        //     this.props.route,
        //     this.routerWillLeave
        // )
    }
    routerWillLeave (nextLocation) {
    }
    componentWillReceiveProps() {
        // debugger;
        this.props.history.listen( route => {
            console.log(route,'user.......');
        })
    }   
    render() {
        return (
            // 计数器
            // 组件引用的时候需要把子组件需要的值传入进去，不然没法使用
            <div>
                我是来测试一下监听路由变化
            </div>
        )
    }
}



export default User1