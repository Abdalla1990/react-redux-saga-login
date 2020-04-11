import React from 'react';
import { loginOut } from '../actions/login/loginActions';
import { connect } from 'react-redux';
const Home = (props) => {
	return (
		<div>
			<div>HOME PAGE</div>
			<div onClick={() => props.loginOut()}>LOGOUT</div>
		</div>
	);
};

export default connect(null, { loginOut })(Home);
