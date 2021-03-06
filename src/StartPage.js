import React, { PureComponent } from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "./StartPage.css";
import Webcam from './webcam'

class StartPage extends PureComponent {
	startPage = () => {
		this.props.push("/camera");
	};

	render() {
		return (
			<div className="StartPage">
			<Webcam
				audio={false}
				screenshotFormat="image/jpeg"
				className="WebcamStart"/>
				<div>
					<h1> Welcome! </h1>
					<h3>powered by Lightbot.io</h3>
				</div>

				<Button
					className="Start"
					bsSize="large"
					onClick={this.startPage.bind(this)}>
					Say hello to our camera
				</Button>

			</div>
		)
	}
}

export default connect(null, { push })(StartPage);
