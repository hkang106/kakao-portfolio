import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { Divider, Grid, Image, Segment, Flag, List } from 'semantic-ui-react';

const PersonInfo = () => {
	return (
		<div class="profile">
			<Container>
				<Grid centered columns={2} relaxed="very">
					<Grid.Column width={6}>
						<Image
							src="http://drive.google.com/uc?export=view&id=1bUMRsdx49JDFfIR_IzjQKwhrH6mvE4D1"
							size="medium"
							circular
						/>
					</Grid.Column>
					<Grid.Column width={9}>
						<br />
						<br />

						<List size={'massive'}>
							<List.Item>
								<List.Icon name="users" />
								<List.Content>강현국(Joshua)</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name="mail" />
								<List.Content>
									<a href="mailto:hkang106@gmail.com">hkang106@gmail.com</a>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name="call" />
								<List.Content>010-3776-2926</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name="marker" />
								<List.Content>서울특별시 성북구 종암동 34-7 천우네오젠 102동 501호</List.Content>
							</List.Item>
						</List>
					</Grid.Column>
				</Grid>

				<Divider hidden />
			</Container>
		</div>
	);
};

export default PersonInfo;
