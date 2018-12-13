import React from 'react';
import { Image, Item } from 'semantic-ui-react';

const Misc = () => (
	<Item.Group>
		<Item>
			<Item.Image
				size="tiny"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png"
			/>

			<Item.Content>
				<Item.Header as="a">조지아공과대학교 학위 증명서</Item.Header>
				<Item.Meta>Description</Item.Meta>
				<Item.Description>
					<Image src="" />
				</Item.Description>
				<Item.Extra>Additional Details</Item.Extra>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image
				size="tiny"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/KAIST_logo.svg/200px-KAIST_logo.svg.png"
			/>

			<Item.Content>
				<Item.Header as="a">한국과학기술원 석사 졸업 증명서</Item.Header>
				<Item.Meta>Description</Item.Meta>
				<Item.Description>
					<span>desc</span>
				</Item.Description>
				<Item.Extra>Additional Details</Item.Extra>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image
				size="tiny"
				src="https://yt3.ggpht.com/a-/AN66SAwZwA8Uk-Z8TMvrlhTNKs_KIg5_BqtBFK4g=s900-mo-c-c0xffffffff-rj-k-no"
			/>

			<Item.Content>
				<Item.Header as="a">Home Depot 석사 입학 추천서</Item.Header>
				<Item.Meta>Description</Item.Meta>
				<Item.Description>
					<span>desc</span>
				</Item.Description>
				<Item.Extra>Additional Details</Item.Extra>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image size="tiny" src="https://ph.sisain.co.kr/news/photo/201708/29976_58051_5802.jpg" />

			<Item.Content>
				<Item.Header as="a">현대카드 장학금</Item.Header>
				<Item.Meta>Description</Item.Meta>
				<Item.Description>
					<span>desc</span>
				</Item.Description>
				<Item.Extra>Additional Details</Item.Extra>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image
				size="tiny"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dow_Chemical_Company_logo.svg/1200px-Dow_Chemical_Company_logo.svg.png"
			/>

			<Item.Content>
				<Item.Header as="a">다우 케미칼 장학금</Item.Header>
				<Item.Meta>Description</Item.Meta>
				<Item.Description>
					<span>desc</span>
				</Item.Description>
				<Item.Extra>Additional Details</Item.Extra>
			</Item.Content>
		</Item>
	</Item.Group>
);

export default Misc;
