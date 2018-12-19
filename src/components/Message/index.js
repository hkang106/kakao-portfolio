import React from 'react';
import './chatbot.css';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function Message(props) {
	return (
		<div>
			{!props.is_bot && (
				<Container textAlign="right">
					<div className="message-user">
						<div className="message-text">{props.text}</div>
					</div>
				</Container>
			)}

			{props.is_bot && (
				<Container textAlign="left">
					<div className="message-bot">
						<div className="message-text-bot">{props.text}</div>
					</div>
				</Container>
			)}
		</div>
	);
}

export default Message;

/*
	
					
*/
