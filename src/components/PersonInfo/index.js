import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { Divider, Grid, Image, List, Container, Popup, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// import ImageLoader from 'react-imageloader';
//"http://drive.google.com/uc?export=view&id=1bUMRsdx49JDFfIR_IzjQKwhrH6mvE4D1"
const PersonInfo = () => {
	return (
		<div className="profile">
			<Popup
				wide
				hoverable={true}
				trigger={
					<div className="profile-pic-parent">
						<div className="profile-pic">
							<Image src={require('images/profile-main.jpg')} size="medium" circular centered />
						</div>
					</div>
				}
				inverted
				horizontalOffset={30}
				position="right center"
			>
				<Popup.Content inverted>
					<List size={'huge'}>
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
							<List.Content>
								서울특별시 성북구 종암동 34-7<br />천우네오젠 102동 501호
							</List.Content>
						</List.Item>
					</List>
				</Popup.Content>
			</Popup>

			<Divider hidden />
			<Container textAlign="center">
				<div className="verse">
					<span>
						<b>가로되 찬송하리로다 주의 이름으로 오시는 왕이여 하늘에는 평화요 가낭 높은 곳에는 영광이로다 하니(눅19:38)</b>
					</span>
				</div>
			</Container>
		</div>
	);
};

export default PersonInfo;
