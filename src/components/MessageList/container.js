import React from 'react';
import MessageList from './presenter';

class Container extends React.Component {
	render() {
		const { chat } = this.props;
		return (
			<div>
				<MessageList data={chat} />
			</div>
		);
	}
}

export default Container;
