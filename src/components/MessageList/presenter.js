import React from 'react';
import Message from 'components/Message';
import ReactDOM from 'react-dom';
import './chatbubble.css';
class MessageList extends React.Component {
	componentWillUpdate() {
		const node = ReactDOM.findDOMNode(this);
		this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 300 >= node.scrollHeight;
	}

	componentDidUpdate() {
		if (this.shouldScrollToBottom) {
			const node = ReactDOM.findDOMNode(this);
			node.scrollTop = node.scrollHeight;
		}
	}
	render() {
		const { data: { messages, bot_responses, is_bot_message } } = this.props;

		if (messages.length === 0) {
			return (
				<div className="message-list">
					<span>치매 예방 프로그램 연구를 위한 일본어 챗봇입니다.</span>
					
				</div>
			);
		}
		return (
			<div className="message-list">
				{messages.map((message, index) => {
					return (
						<div className="msg-container">
							
							{<Message className="message-user" text={message} is_bot={!is_bot_message} />}

							{<Message className="message-bot" text={bot_responses[index]} is_bot={is_bot_message} />}
						</div>
					);
				})}
			</div>
		);
	}
}

export default MessageList;
