import React from 'react';
import {BrowserRouter,Switch,Route,Link,Redirect} from 'react-router-dom';
import store from './store';
import Home from './view/home'


const Qibingying = ()=> {
	return <div>Qibingying</div>
}

const Users= ({match}) => {
	return <div>
		<ul>
			<li>
				<Link to={`${match.url}/user1`}>user1</Link>
			</li>
			<li>
				<Link to={`${match.url}/user2`}>user2</Link>
			</li>
			<li>
				<Link to={`${match.url}/user3`}>user3</Link>
			</li>
		</ul>
		<Route path={`${match.url}/`} exact component={User}></Route>
		<Route path={`${match.url}/user1`} component={User}></Route>
		<Route path={`${match.url}/user2`} render= {() => <h3>{match.url}user2测试一下</h3>}></Route>
		<Route path={`${match.url}/user3`} render= {() => <h3>user3</h3>}></Route>
	</div>
}

const User = ({match}) => {
	return <div><h3>1111</h3></div>
}

class App extends React.Component{
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<BrowserRouter>
				<ul className="nav">
					<li>
						<Link to="/home" className="navItem">学习案例</Link>
						<Link to="/qibinglian" className="navItem">测试案列</Link>
						<Link to="/user" className="navItem">页面编写</Link>
					</li>
				</ul>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/home" component={Home}></Route>
					<Route path="/qibinglian" component={Qibingying}></Route>
					<Route path="/user" component ={Users}></Route>
				</Switch>
			</BrowserRouter> 
		)
	}
}

// 使用class构建一个组件的时候获取redux的值需要用到react-redux connect 方法，将redux值
// 路由引入的文件不能算作父子组件，APP组件使用redux，路由组件无法继承APP上面的方法和值
export default App

