import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


/*******计数器组件****/

class Count extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { value,onIncreaseClick,onDecreaseClick} = this.props;
        return (
            // 计算器
            <div>
                <button onClick={onIncreaseClick} className="button success">+</button>
                <button onClick={onDecreaseClick} className="button success">-</button>
                <span>修改redux中的是{value}</span>
            </div>
        )
    }
}

Count.propTypes = {
    value          : PropTypes.number.isRequired,
    onDecreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
};

export default Count;