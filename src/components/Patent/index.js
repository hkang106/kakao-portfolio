import React from 'react';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
const Patent = () => (
	<Message>
		<Item.Group divided>
			<Item>
				<Item.Image src="/images/wireframe/image.png" />

				<Item.Content>
					<Item.Header as="a">Human Body Posture Recognition with Discrete Cosine Transform</Item.Header>
					<Item.Meta>
						<b>
							<span className="cinema">Hyun-Gook Kang</span>
						</b>
						<span className="cinema"> | Sang-Hyun Lee</span>
					</Item.Meta>
					<Item.Description>this is a space for abstract i guess</Item.Description>
					<Item.Extra>
						<Label>IMAX</Label>
						<Label icon="globe" content="Additional Languages" />
					</Item.Extra>
				</Item.Content>
			</Item>

			<Item>
				<Item.Image src="/images/wireframe/image.png" />

				<Item.Content>
					<Item.Header as="a">
						Efficient Fall Detection Based On Event Pattern Matching in Image Stream
					</Item.Header>
					<Item.Meta>
						<div class="author">
							<b>
								<span className="cinema">Hyun-Gook Kang</span>
							</b>
							<span className="cinema"> | Minseo Lee</span>

							<span className="cinema"> | Jae-Gil Lee</span>
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
