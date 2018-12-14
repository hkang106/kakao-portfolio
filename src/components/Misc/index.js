import React from 'react';
import { Image, Label, Item } from 'semantic-ui-react';

const Misc = () => (
	<Item.Group>
		<Item>
			<Item.Image
				size="tiny"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png"
			/>

			<Item.Content>
				<Item.Header as="a">
					<a
						href="http://drive.google.com/uc?export=view&id=1QRdSlOcWvzy-E1brCG3DiCboBsS-c6pc"
						target="_blank"
					>
						학위 증명서
					</a>
				</Item.Header>

				<Item.Meta>
					<Label color="yellow">산업공학</Label>
					<Label color="yellow">High Honor Graduation</Label>
				</Item.Meta>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image
				size="tiny"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/KAIST_logo.svg/200px-KAIST_logo.svg.png"
			/>

			<Item.Content>
				<Item.Header as="a">
					<a
						href="http://drive.google.com/uc?export=view&id=1M5rM2BTVT1xinSRkkSqfxa_VF-cwKeD-"
						target="_blank"
					>
						석사 졸업 증명서
					</a>
				</Item.Header>

				<Item.Meta>
					<Label color="blue">지식서비스공학대학원(산업공학)</Label>
				</Item.Meta>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image
				size="tiny"
				src="https://yt3.ggpht.com/a-/AN66SAwZwA8Uk-Z8TMvrlhTNKs_KIg5_BqtBFK4g=s900-mo-c-c0xffffffff-rj-k-no"
			/>

			<Item.Content>
				<Item.Header as="a">
					<a href="https://drive.google.com/open?id=1zYG5Vu4B8qkRtcZ80gRzmgft1UZ_OfCZ" target="_blank">
						Home Depot 석사 입학 추천서
					</a>
				</Item.Header>

				<Item.Meta>
					<Label color="orange">Forecasting & Analytics Department</Label>
				</Item.Meta>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image size="tiny" src="https://ph.sisain.co.kr/news/photo/201708/29976_58051_5802.jpg" />

			<Item.Content>
				<Item.Header>현대카드 장학금</Item.Header>
				<Item.Meta>
					<Label color="black">솔브릿지국제대학</Label>
					<Label color="black">2010년 성적 우수 장학생</Label>
				</Item.Meta>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image
				size="tiny"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dow_Chemical_Company_logo.svg/1200px-Dow_Chemical_Company_logo.svg.png"
			/>

			<Item.Content>
				<Item.Header as="a">
					<a href="https://news.joins.com/article/17038530" target="_blank">
						다우 케미칼 장학금
					</a>
				</Item.Header>

				<Item.Meta>
					<Label color="red">2015년 석사 우수 장학생</Label>
				</Item.Meta>
			</Item.Content>
		</Item>
	</Item.Group>
);

export default Misc;
