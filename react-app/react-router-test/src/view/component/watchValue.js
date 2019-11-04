import React from 'react';

/*******监听数据的变化已经事件的绑定****/
class WatchValueChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        console.log(this.props,'props..........');
        this.onIncreaseClicks = this.onIncreaseClicks.bind(this);
        this.onDecreaseClicks = this.onDecreaseClicks.bind(this);
    }
    //自定义事件
    onIncreaseClicks() {
        // this.value  = this.value+1;
        this.setState( {value: this.state.value + 1 })
        this.props.bindHandleClick(this.props.preValue + 1)
        console.log(this.state.value,'加一')
    }
    onDecreaseClicks() {
        this.setState( {value: this.state.value - 1 })
        this.props.bindHandleClick(this.props.preValue - 1)
        console.log(this.state.value,'减一')
    }
    //react 提供钩子函数
    componentDidMount(){
        this.props.onRef(this)
    }
    componentWillReceiveProps(nextProps) { //监听父组件的props变化
        console.log(nextProps,'nextProps.........');
    }
    componentDidUpdate(prevProps,prevState) { //监听父组件props变化，监听state变化
        console.log(prevProps,'prevProps.............')
        console.log(prevState,'prevState.............')
    }
    render() {
        return (
            <div>
                <button onClick={this.onIncreaseClicks} className="button success">+</button>
                <button onClick={this.onDecreaseClicks} className="button success">-</button>
                <span>当前组件：{this.state.value}  父组件：{this.props.preValue}</span>
            </div>
        )
    }
}

/*事件绑定知识点*/
/*  事件绑定方法一：constructor  super 下面通过bind this 赋值给另一个 示例 */
/*  事件绑定方法二： 绑定在dom上  this.xxx.bind(this))*/
/*  事件绑定方法三： 绑定在dom上 使用箭头函数 onClick={() => this.xxx}*/
/*  事件绑定方法四： 在render外面声明 的时候使用箭头函数 handClick = () => {} */
/*  事件绑定方法五： 使用插件npm install @balel/plugin-proposal-decorators需要设置相关配置 @bind */
/*  参考资料网站https://www.jianshu.com/p/f391d8da2ef2*/ 


/* 监听事件变化 */
/* 
    componentDidUpdate 与  componentWillReceiveProps 
    区别: componentDidUpdate 有两个参数prevProps和prevState，无论是父组件props的修改还是状态的更改都会触发该方法。
         componentWillReceiveProps 只有在父组件重新render props改变的时候会触发。
*/
/* 
    父子之间的通信
    父组件 设置onRef方法绑定到子组件上面  
        onRef = （ref) => {
            this.child = ref;
        }
    子组件 需要将 componentDidMount 的时候 this.props.onRef(this) 父组件通过onRef接收一个事件（例子） 如上
*/
export default WatchValueChange;