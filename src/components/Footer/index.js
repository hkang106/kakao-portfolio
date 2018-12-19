import React, { Component } from 'react';
import './index.css';
import { List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class Footer extends Component {
	render() {
		return (
			<div class="footer">
				<List horizontal>
					<List.Item>카카오 지원 포트폴리오</List.Item>
					<List.Item disabled>Made by Joshua Hyungook Kang</List.Item>
				</List>

				<List horizontal>
					<List.Item>
						<a href="https://github.com/hkang106/kakao-portfolio" target="_blank" rel="noopener noreferrer">
							소스코드@Github
						</a>
					</List.Item>
				</List>

				<List horizontal floated="right">
					<List.Item>Latest Update:</List.Item>
					<List.Item disabled>Thursday, December 20, 2018</List.Item>
				</List>
			</div>
		);
	}
}
