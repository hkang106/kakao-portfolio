import React, { Component } from 'react';
import { Input, Menu, Grid, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import PersonInfo from 'components/PersonInfo';

export default class MenuNavi extends Component {
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	componentDidMount = () => {
		this.setState({ activeItem: 'JOSHUA' });
	};

	render() {
		const { activeItem } = this.state;
		return (
			<div>
				<div class="navi">
					<Menu pointing secondary fixed="top" size="massive">
						<Menu.Item name="JOSHUA" active={activeItem === 'JOSHUA'} onClick={this.handleItemClick} />
						<Menu.Item name="논문" active={activeItem === '논문'} onClick={this.handleItemClick} />
						<Menu.Item name="특허" active={activeItem === '특허'} onClick={this.handleItemClick} />
						<Menu.Item name="프로젝트" active={activeItem === '프로젝트'} onClick={this.handleItemClick} />
						<Menu.Item name="기타" active={activeItem === '기타'} onClick={this.handleItemClick} />
					</Menu>
				</div>

				<div class="info">
					<PersonInfo />
				</div>
			</div>
		);
	}
}
