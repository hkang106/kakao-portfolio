import React, { Component } from 'react';
import './index.css';
import { List, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class Footer extends Component {
	render() {
		return (
			<div class="footer">
				<Grid columns="equal">
					<Grid.Row textAlign="center" padded>
						<Grid.Column>
							<List horizontal>
								<List.Item>Joshua 포트폴리오</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column>
							<List horizontal>
								<List.Item>
									<a
										href="https://github.com/hkang106/kakao-portfolio"
										target="_blank"
										rel="noopener noreferrer"
									>
										소스코드(Github)
									</a>
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column>
							<List horizontal>
								<List.Item>업데이트:</List.Item>
								<List.Item disabled>March 5, 2019</List.Item>
							</List>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}
