import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import { increaseAction,decreaseAction} from '../store/home/actions.js'
import Count from './component/count'
import WatchValueChange from './component/watchValue'



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preValue: 0
        }
        // this.child = {};
    }
    componentDidMount () {
        console.log(this.props,'home........');
    }
    bindHandleClick(preValue) {
        this.setState({preValue})
    }
    onRef = (ref) => {
        this.child = ref;
    }
    // 无申明函数执行的是window，使用的时候必须用到箭头函数去获取
    fonIncreaseClick = () => {
        // console.log(this.child); 
        this.child.onIncreaseClicks()
    }
    fonDecreaseClick = () =>{
        this.child.onDecreaseClicks()
    }
    render() {
        let { value,onIncreaseClick,onDecreaseClick} = this.props;
        return (
            // 计数器
            // 组件引用的时候需要把子组件需要的值传入进去，不然没法使用
            <div>
                <label className="title">计数器</label>
                <div className="content">
                    <Count {...this.props}/>
                </div>
                <label className="title">事件绑定与数据监听</label>
                <div className="content">
                    <div>
                        <span>来自父组件的控制</span>
                        <button onClick={this.fonIncreaseClick}>+</button>
                        <button onClick={this.fonDecreaseClick}>-</button>
                    </div>
                    {/* */}
                    <WatchValueChange {...this.state}  bindHandleClick={this.bindHandleClick.bind(this)}  onRef={this.onRef}/>
                </div>
            </div>
        )
    }
}

// 在父组件上面使用Provider store 父组件上面依赖mapStateToProps，mapStateToProps两个方法将redux里的值注入进去，子组件可以直接使用。
const mapStateToProps = (state) => ({
    value:  state.count
})

const mapDispatchToProps = (dispatch) => ({
    onIncreaseClick: () => {
        dispatch(increaseAction)
    },
    onDecreaseClick: () => {
        dispatch(decreaseAction)
    }
})


export default connect (mapStateToProps,mapDispatchToProps)(Home)