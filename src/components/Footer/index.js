import React, { Component } from 'react';
import './index.css';
import { List } from 'semantic-ui-react';

export default class Footer extends Component {
	render() {
		return (
			<div class="footer">
				<List horizontal>
					<List.Item>카카오 지원 포트폴리오</List.Item>
					<List.Item disabled>Made by Joshua Hyungook Kang</List.Item>
				</List>

				<List horizontal floated="right">
					<List.Item>Latest Update:</List.Item>
					<List.Item disabled>Thursday, December 12, 2018</List.Item>
				</List>
			</div>
		);
	}
}
