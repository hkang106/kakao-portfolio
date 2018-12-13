import React from 'react';
import { Button, Icon, Image, Item, Label, List } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
import { Link } from 'react-router';

const Publication = () => (
	<Message>
		<Item.Group divided>
			<Item>
				<Item.Image src="http://drive.google.com/uc?export=view&id=17CeG1pUfFWT3748ZI1BqEKm08jgNiQ7Y" />

				<Item.Content>
					<Item.Header>Efficient Fall Detection Based On Event Pattern Matching in Image Stream</Item.Header>
					<Item.Meta>
						<div class="author">
							<b>
								<span className="cinema">Hyun-Gook Kang</span>
							</b>
							<span className="cinema"> | Minseo Lee</span>

							<span className="cinema"> | Jae-Gil Lee</span>
						</div>
					</Item.Meta>
					<Item.Description>
						<List>
							<List.Item>
								<a href="">2017 IEEE Int'l Conf. on Big Data and Smart Computing (BigComp)</a>
							</List.Item>
							<List.Item>
								<span>
									Jeju Island, Korea, pp. 51 ~ 58, Feb. 2017 (regular paper, acceptance rate: 25.0%)
								</span>
							</List.Item>
						</List>
					</Item.Description>
					<Item.Extra>
						<Link to="https://doc-00-2s-docs.googleusercontent.com/docs/securesc/a7qgj81597goda54p1q7bbr3agcb91tl/76jahse1rf65pf3ofdlqle395nhoha68/1544738400000/08916673485654777382/08916673485654777382/1UXjEuSKpCpb7QQ_COLJsb4MWj-4w1u_y?e=view" />
						<Label as="a">PDF</Label>
						<Label as="a">Slides</Label>
					</Item.Extra>
				</Item.Content>
			</Item>

			<Item>
				<Item.Image src="http://drive.google.com/uc?export=view&id=1pD1JnSXl14HefDmDIhFHLigo4Mc8v6ik" />

				<Item.Content>
					<Item.Header>Human Body Posture Recognition with Discrete Cosine Transform</Item.Header>
					<Item.Meta>
						<b>
							<span className="cinema">Hyun-Gook Kang</span>
						</b>
						<span className="cinema"> | Sang-Hyun Lee</span>
					</Item.Meta>
					<Item.Description>
						<List.Item>
							<a href="https://ieeexplore.ieee.org/xpl/mostRecentIssue.jsp?punumber=7422342">
								2016 IEEE Int'l Conf. on Big Data and Smart Computing (BigComp)
							</a>
						</List.Item>
						<List.Item>
							<span>Hong Kong, China, pp. 423 ~ 425, Jan. 2016 (BigData4Healthcare)</span>
						</List.Item>
					</Item.Description>
					<Item.Extra>
						<Label as="a">PDF</Label>
						<Label as="a">Slides</Label>
					</Item.Extra>
				</Item.Content>
			</Item>

			<Item>
				<Item.Image src="http://drive.google.com/uc?export=view&id=1HZWyVJhxnERylhx_Qanl43W0_42bcKf_" />

				<Item.Content>
					<Item.Header>시계열 예측 모델을 이용한 커뮤니티 변화 예측</Item.Header>
					<Item.Meta>
						<b>
							<span className="cinema">Hyun-Gook Kang</span>
						</b>
						<span className="cinema"> | Sang-Hyun Lee</span>
					</Item.Meta>
					<Item.Description>
						<List.Item>
							<a href="https://www.dbpia.co.kr/Journal/ArticleDetail/NODE06394210?TotalCount=0&Seq=10&isIdentifyAuthor=1&Collection=0&isFullText=0&specificParam=0&SearchMethod=0&Page=1&PageSize=20">
								2015 Korea Computer Congress(KCC)
							</a>
						</List.Item>
						<List.Item>
							<span>Jeju Island, Korea, pp. 757 ~ 759</span>
						</List.Item>
					</Item.Description>
					<Item.Extra>
						<Label as="a">PDF</Label>
					</Item.Extra>
				</Item.Content>
			</Item>

			<Item>
				<Item.Image src="http://drive.google.com/uc?export=view&id=17CeG1pUfFWT3748ZI1BqEKm08jgNiQ7Y" />

				<Item.Content>
					<Item.Header>이미지 스트림에서의 이벤트 패턴 매칭에 기반한 효율적인 낙상 감지</Item.Header>
					<Item.Meta>
						<div class="author">
							<b>
								<span className="cinema">Hyun-Gook Kang</span>
							</b>
							<span className="cinema"> | Minseo Lee</span>

							<span className="cinema"> | Jae-Gil Lee</span>
						</div>
					</Item.Meta>
					<Item.Description>
						<a href="http://koasas.kaist.ac.kr/handle/10203/221984">
							학위논문(석사) - 한국과학기술원 : 지식서비스공학대학원, 2016.8 ,[iii, 47 p. :]
						</a>
					</Item.Description>
					<Item.Extra>
						<Label as="a">PDF</Label>
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>
	</Message>
);

export default Publication;
