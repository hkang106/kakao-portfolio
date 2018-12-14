import React from 'react';
import { Embed, Message } from 'semantic-ui-react';
const Project = () => (
	<div>
		<Embed
			id="iJjQ86t4B8Q"
			placeholder="http://www.aitimes.kr/news/photo/201711/10981_10520_2923.png"
			source="youtube"
		/>

		<Message>
			<Message.Header>GS25 무인 편의점 적용을 위한 상품 추천 챗봇</Message.Header>
			<Message.List>
				<Message.Item>Word Embedding을 이용하여 유사 상품 추천</Message.Item>
				<Message.Item>관심상품, 장바구니, 방문시간, 평점 분석</Message.Item>
			</Message.List>
		</Message>

		<br />
		<br />
		<br />
		<br />

		<Embed
			id="XfP7gPQHtXI"
			placeholder="http://www.aitimes.kr/news/photo/201711/10981_10520_2923.png"
			source="youtube"
		/>
		<Message>
			<Message.List>
				<Message.Item>유저 기반 추천</Message.Item>
				<Message.Item>사용자와 비슷한 유저를 통한 추천</Message.Item>
			</Message.List>
		</Message>

		<br />
		<br />
		<br />
		<br />

		<Embed
			id="nxeovzZ4q8c"
			placeholder="http://www.aitimes.kr/news/photo/201711/10981_10520_2923.png"
			source="youtube"
		/>
		<Message>
			<Message.List>
				<Message.Item>판매량 랭킹 추천</Message.Item>
				<Message.Item>상품 진열 위치 Q&A</Message.Item>
			</Message.List>
		</Message>
	</div>
);

export default Project;
