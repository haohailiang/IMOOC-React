var React    = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader        from './components/header';
import ComponentLoginedHeader from './components/login-header';
import ComponentFooter        from './components/footer';
import BodyIndex              from './components/bodyindex';

class Index extends React.Component {
	render() {

		var component;
		var isLogin = Math.random() > 0.5;

		if (!isLogin) {
			component = <ComponentLoginedHeader/>
		}
		else{
			component = <ComponentHeader/>
		}

		return (
			<div>
				{ component }
				<BodyIndex/>
				<ComponentFooter/>
			</div>
		);
	}
}
ReactDOM.render(
	<Index/>, document.getElementById('example'));
