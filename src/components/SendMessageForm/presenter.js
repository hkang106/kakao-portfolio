import React from 'react';
import './chatbot.css';

class SendMessageForm extends React.Component {
	render() {
		const { handleSubmit, handleChange, message, is_chat_initiated } = this.props;
		return (
			<form onSubmit={handleSubmit} className="send-message-form">
				{!is_chat_initiated && (
					<input
						className="initChat"
						onChange={handleChange}
						value={message}
						placeholder="대화를 시작하기 위해 아무 메세지나 입력해주세요."
						type="text"
					/>
				)}
				{is_chat_initiated && (
					<input
						className="onChat"
						onChange={handleChange}
						value={message}
						placeholder="대화가 시작되었습니다. 오른쪽 답변을 선택해주세요."
						type="text"
						disabled
					/>
				)}
			</form>
		);
	}
}

export default SendMessageForm;
