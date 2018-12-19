import React from 'react';
import SendMessageForm from './presenter';

class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			message: ''
		};
		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	render() {
		const { chat: {is_chat_initiated} } = this.props;
		return (
			<div>
				<SendMessageForm
					handleChange={this._handleChange}
					handleSubmit={this._handleSubmit}
					message={this.state.message}
					is_chat_initiated={is_chat_initiated}
				/>
			</div>
		);
	}
	_handleChange(e) {
		this.setState({
			message: e.target.value
		});
	}

	_handleSubmit(e) {
		e.preventDefault();
		const { chat: { bot_responses, bot_cids } } = this.props;
		let bot_cid = null;

		if (bot_responses.length === 0) {
			bot_cid = null;
		} else {
			let last_index = bot_responses.length - 1;
			bot_cid = bot_cids[last_index];
		}
		this.props.chatActions.fetchBotMessage(bot_cid, this.state.message);
		this.props.chatActions.initiateChat();
		this.setState({
			message: ''
		});
	}
}

export default Container;
