import React from 'react';
import { Message, Item, Label, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

//"http://drive.google.com/uc?export=view&id=1yEBr6JOdInb8LwEorwWHuz05r916LqXV"
const Patent = () => (
	<Message>
		<Item.Group divided>
			<Item>
				<Item.Image src={require('images/patent/fall.png')} />

				<Item.Content>
					<Item.Header>낙상 감지 시스템 및 방법</Item.Header>
					<Item.Meta>
						<div className="author">
							<span className="cinema">이재길</span>

							<span className="cinema">
								| <b>강현국</b>
							</span>

							<span className="cinema"> | 강민서</span>
						</div>
					</Item.Meta>
					<Item.Description>
						<List>
							<List.Item>
								<b>출원번호:</b> 10-2017-0002298호
							</List.Item>
							<List.Item>
								<b>등록일:</b> 2018-05-18
							</List.Item>
						</List>
					</Item.Description>
					<Item.Extra>
						<Label
							as="a"
							href="http://drive.google.com/uc?export=view&id=1xEQ8VWNm_gwf4saIJMq41uojPEaU8dt2"
							target="_blank"
						>
							발명 등록서
						</Label>
						<Label
							as="a"
							href="http://drive.google.com/uc?export=view&id=1QDchJDT4tquZpkcakBxkEnpJOvBUyKBf"
							target="_blank"
						>
							특허증
						</Label>
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>
	</Message>
);

export default Patent;
