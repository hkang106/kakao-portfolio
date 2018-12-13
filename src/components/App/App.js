import React, { Component } from 'react';
import './App.css';
import { Container, Header, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Publication from 'components/Publication';
import MenuNavi from 'components/MenuNavi';
import Patent from 'components/Patent';
import Project from 'components/Project';
import Misc from 'components/Misc';
import Footer from 'components/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<MenuNavi />
				<Container>
					<div class="app">
						<Header as="h1">논문</Header>
						<Publication />
						<Divider />

						<Header as="h1">특허</Header>
						<Patent />
						<Divider />

						<Header as="h1">프로젝트</Header>
						<Project />
						<Divider />

						<Header as="h1">기타</Header>
						<Misc />
					</div>
				</Container>
				<Divider />

				<Footer />
			</div>
		);
	}
}

export default App;
