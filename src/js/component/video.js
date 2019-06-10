import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Video extends React.Component {
	render() {
		return (
			<div className="col-6">
				<div>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe
							className="embed-responsive-item"
							src="https://www.youtube.com/embed/v64KOxKVLVg"
							allowFullScreen
						/>
					</div>
					<div className="embed-responsive embed-responsive-16by9">
						<iframe
							className="embed-responsive-item"
							src="https://player.vimeo.com/video/137857207"
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		);
	}
}
