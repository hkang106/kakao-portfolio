import React from 'react';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
const Patent = () => (
	<Message>
		<Item.Group divided>

			<Item>
                <Item.Image src="http://drive.google.com/uc?export=view&id=1yEBr6JOdInb8LwEorwWHuz05r916LqXV" />

				<Item.Content>
					<Item.Header as="a">
						낙상 감지 시스템 및 방법
					</Item.Header>
					<Item.Meta>
						<div class="author">
							
								<span className="cinema">이재길</span>
							
							<span className="cinema"> | <b>강현국</b></span>

							<span className="cinema"> | 강민서</span>
						</div>
					</Item.Meta>
					<Item.Description>BigComp 2017</Item.Description>
					<Item.Extra>
						<Label icon="globe" content="Additional Languages" />
						<Label icon="file">PDF</Label>
						<Label>Limited</Label>
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>
	</Message>
);

export default Patent;
