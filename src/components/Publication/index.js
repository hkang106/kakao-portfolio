import React from 'react';
import { Button, Icon, Image, Item, Label, List } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Publication = () => (
	<Message>
		<Item.Group divided>
			<Item>
				<Item.Image src="http://drive.google.com/uc?export=view&id=17CeG1pUfFWT3748ZI1BqEKm08jgNiQ7Y" />

				<Item.Content>
					<Item.Header as="a">
						<a href="https://ieeexplore.ieee.org/document/7881715" target="_blank">
							Efficient Fall Detection Based On Event Pattern Matching in Image Stream
						</a>
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
					<Item.Description>
						<List>
							<List.Item>
								<a
									href="https://ieeexplore.ieee.org/xpl/mostRecentIssue.jsp?punumber=7877084"
									target="_blank"
								>
									2017 IEEE Int'l Conf. on Big Data and Smart Computing (BigComp)
								</a>
							</List.Item>
							<List.Item>
								<span>
									Jeju Island, Korea, pp. 51 ~ 58, Feb. 2017 (regular paper, acceptance rate: 25.0%)
								</span>
							</List.Item>
						</List>
					</Item.Description>
					<Item.Extra>
						<a
							href="http://drive.google.com/uc?export=view&id=1UXjEuSKpCpb7QQ_COLJsb4MWj-4w1u_y"
							target="_blank"
						>
							<Label as="a" color="red">
								PDF
							</Label>
						</a>
						<a
							href="http://drive.google.com/uc?export=view&id=10984nmYne_OSNes4Ks_0Wrt7PIoniGFF"
							target="_blank"
						>
							<Label as="a" color="black">
								Slides
							</Label>
						</a>
					</Item.Extra>
				</Item.Content>
			</Item>

			<Item>
				<Item.Image src="http://drive.google.com/uc?export=view&id=1pD1JnSXl14HefDmDIhFHLigo4Mc8v6ik" />

				<Item.Content>
					<Item.Header as="a">
						<a href="https://ieeexplore.ieee.org/document/7425962" target="_blank">
							Human Body Posture Recognition with Discrete Cosine Transform
						</a>
					</Item.Header>
					<Item.Meta>
						<b>
							<span className="cinema">Hyun-Gook Kang</span>
						</b>
						<span className="cinema"> | Sang-Hyun Lee</span>
					</Item.Meta>
					<Item.Description>
						<List.Item>
							<a
								href="https://ieeexplore.ieee.org/xpl/mostRecentIssue.jsp?punumber=7422342"
								target="_blank"
							>
								2016 IEEE Int'l Conf. on Big Data and Smart Computing (BigComp)
							</a>
						</List.Item>
						<List.Item>
							<span>Hong Kong, China, pp. 423 ~ 425, Jan. 2016 (BigData4Healthcare)</span>
						</List.Item>
					</Item.Description>
					<Item.Extra>
						<a href="https://drive.google.com/open?id=1koNYMoDYYxtrsR9fKccyotkjbES3kIBw" target="_blank">
							<Label as="a" color="red">
								PDF
							</Label>
						</a>
						<a
							href="http://drive.google.com/uc?export=view&id=1MdCzoJbTJpAmwINeKiHGonhPSsdaI6db"
							target="_blank"
						>
							<Label as="a" color="black">
								Slides
							</Label>
						</a>
					</Item.Extra>
				</Item.Content>
			</Item>

			<Item>
				<Item.Image src="http://drive.google.com/uc?export=view&id=1HZWyVJhxnERylhx_Qanl43W0_42bcKf_" />

				<Item.Content>
					<Item.Header as="a">
						<a
							href="https://www.dbpia.co.kr/Journal/ArticleDetail/NODE06394210?TotalCount=0&Seq=10&isIdentifyAuthor=1&Collection=0&isFullText=0&specificParam=0&SearchMethod=0&Page=1&PageSize=20"
							target="_blank"
						>
							시계열 예측 모델을 이용한 커뮤니티 변화 예측
						</a>
					</Item.Header>

					<Item.Meta>
						<b>
							<span className="cinema">Hyun-Gook Kang</span>
						</b>
						<span className="cinema"> | Sang-Hyun Lee</span>
					</Item.Meta>
					<Item.Description>
						<List.Item>2015 Korea Computer Congress(KCC)</List.Item>
						<List.Item>
							<span>Jeju Island, Korea, pp. 757 ~ 759</span>
						</List.Item>
					</Item.Description>
					<Item.Extra>
						<a
							href="http://drive.google.com/uc?export=view&id=1Cxkm20a_Whz9_wLMJ1rdanPQqvfnQpeF"
							target="_blank"
						>
							<Label as="a" color="red">
								PDF
							</Label>
						</a>
					</Item.Extra>
				</Item.Content>
			</Item>

			<Item>
				<Item.Image src="http://drive.google.com/uc?export=view&id=17CeG1pUfFWT3748ZI1BqEKm08jgNiQ7Y" />

				<Item.Content>
					<Item.Header as="a">
						<a href="http://koasas.kaist.ac.kr/handle/10203/221984" target="_blank">
							이미지 스트림에서의 이벤트 패턴 매칭에 기반한 효율적인 낙상 감지
						</a>
					</Item.Header>
					<Item.Meta>
						<div class="author">
							<b>
								<span className="cinema">Hyun-Gook Kang</span>
							</b>
						</div>
					</Item.Meta>
					<Item.Description>
						<a
							href="http://library.kaist.ac.kr/search/detail/view.do?bibCtrlNo=663511&flag=t"
							target="_blank"
						>
							한국과학기술원, 2016
						</a>
					</Item.Description>
					<Item.Extra>
						<a
							href="http://kdrm.kaist.ac.kr/ezpdfwebviewer/ezpdf/customLayout.jsp?encdata=67D4CD8135C7372A42DB0940C33C3EA1052BF1A8B4438DB3EB0C4EE2112202DAE464993BE0419278598BD59B7D4A037340951BC883C23F275CED758C343B58365B00F5FD41B0997C&lang=ko"
							target="_blank"
						>
							<Label as="a" color="red">
								PDF(도서관 출판본)
							</Label>
						</a>
						<a
							href="http://drive.google.com/uc?export=view&id=1KG9-eqNhSQK2sRxx-q04ouNR0priJOyZ"
							target="_blank"
						>
							<Label color="red">PDF(개인)</Label>
						</a>
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>
	</Message>
);

export default Publication;
