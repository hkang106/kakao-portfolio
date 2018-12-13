import React, { Component } from 'react';
import { Input, Menu, Grid, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import PersonInfo from 'components/PersonInfo';
import scrollToComponent from 'react-scroll-to-component';

export default class MenuNavi extends Component {
	state = { activeItem: 'JOSHUA' };

	handleItemClick = (e, { name }) => {
		
		this.setState({ activeItem: name });
	};

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
						<Menu.Item
							name="PUBLICATION"
							active={activeItem === 'PUBLICATION'}
							onClick={this.handleItemClick}
						/>
						<Menu.Item name="PATENT" active={activeItem === 'PATENT'} onClick={this.handleItemClick} />
						<Menu.Item name="PROJECT" active={activeItem === 'PROJECT'} onClick={this.handleItemClick} />
						<Menu.Item name="MISC" active={activeItem === 'MISC'} onClick={this.handleItemClick} />
					</Menu>
				</div>

				<div class="info">
					<PersonInfo />
				</div>
			</div>
		);
	}
}
