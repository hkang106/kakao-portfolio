import React from 'react';
import './chatbot.css';

class SendMessageForm extends React.Component {
	render() {
		const { handleSubmit, handleChange, message } = this.props;

		return (
			<form onSubmit={handleSubmit} className="send-message-form">
				<input onChange={handleChange} value={message} placeholder="대화를 시작하기 위해 아무 메세지나 입력해주세요." type="text" />
			</form>
		);
	}
}

export default SendMessageForm;
