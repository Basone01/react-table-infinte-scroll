import React, { Component } from 'react';

export default class TableBody extends Component {
	constructor(props) {
		super(props);
		this.body = React.createRef();
		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, false);
	}

	onScroll(e) {
		const scrollPercent =
			this.body.current.scrollTop / (this.body.current.scrollHeight - this.body.current.clientHeight);
		if (scrollPercent === 1) {
			if (this.props.onScrollEnd) {
				this.props.onScrollEnd();
			}
		}
	}

	render() {
		const { onScrollEnd, ...props } = this.props;
		return (
			<div {...props} ref={this.body} className="rt-tbody" onScroll={this.onScroll}>
				{this.props.children}
			</div>
		);
	}
}
