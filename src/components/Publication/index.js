import React from 'react';
import { Button, Icon, Image, Item, Label, List, Modal, Header } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// bigcomp2017: "http://drive.google.com/uc?export=view&id=17CeG1pUfFWT3748ZI1BqEKm08jgNiQ7Y"
// bigcomp2016: "http://drive.google.com/uc?export=view&id=1pD1JnSXl14HefDmDIhFHLigo4Mc8v6ik"
// kcc: "http://drive.google.com/uc?export=view&id=1HZWyVJhxnERylhx_Qanl43W0_42bcKf_"
const Publication = () => (
	<Message>
		<Item.Group divided>
			<Item>
				<Item.Image src={require('images/publication/bigcomp2017.png')} />

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
						<Modal
							trigger={
								<Label as="a" color="purple">
									Abstract
								</Label>
							}
							basic
							size="small"
						>
							<Header>
								<Label>Camera-Based Fall Detection</Label>
								<Label>Complex Event Processing</Label>
								<Label>Event Selection Strategy</Label>
								<Label>Event Pattern Matching</Label>
							</Header>
							<Modal.Content>
								<p>
									This work proposes sliding window fall detection match (SW-FDM), a rule-based fall
									detection method based on event pattern matching from human body posture event
									streams. Fall and post-fall (long lie) rules are expressed as patterns, and complex
									event processing (CEP) systems are adopted to quickly find these patterns. They can
									be detected with event selection strategies such as Skip Till Next Match and Skip
									Till Any Match. However, existing strategies generate either duplicate or missing
									alarms; even worse, their processing cost is very high when the size of event
									streams is large. Since SW-FDM uses a concept of sliding window, it is able to
									detect correct matches constantly and reduce the processing cost without duplicate
									computation. The experiments demonstrate that SW-FDM results in both higher accuracy
									and efficiency. Also, it is shown that the improvement of efficiency becomes greater
									as the data size increases, which is an indeed preferable property.
								</p>
							</Modal.Content>
						</Modal>
					</Item.Extra>
				</Item.Content>
			</Item>

			<Item>
				<Item.Image src={require('images/publication/bigcomp2016.png')} />

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
						<List>
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
						</List>
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
						<Modal
							trigger={
								<Label as="a" color="purple">
									Abstract
								</Label>
							}
							basic
							size="small"
						>
							<Header>
								<Label>Automatic Surveillance Cameras</Label>
								<Label>Human Body Posture Recognition</Label>
								<Label>Dimensionality Reduction</Label>
							</Header>
							<Modal.Content>
								<p>
									This study proposes a technique to generate effective features to classify
									fundamental human body postures in image sequences such as standing, sitting on the
									chair, sitting on the floor, bending, and lying down. Truncated discrete cosine
									transform (DCT) is utilized to obtain features before performing truncated singular
									value decomposition (SVD). It has been shown that the truncated DCT disregards
									unnecessary values and thus makes features more simple and light, resulting in an
									improvement in classification speed. Moreover, this study verifies that the newly
									extracted features contribute to an increase in the accuracy of the human posture
									classification, and a definite decrease in distinction errors for bending and
									sitting postures.
								</p>
							</Modal.Content>
						</Modal>
					</Item.Extra>
				</Item.Content>
			</Item>

			<Item>
				<Item.Image src={require('images/publication/kcc.png')} />

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
						<List>
							<List.Item>2015 Korea Computer Congress(KCC)</List.Item>
							<List.Item>
								<span>Jeju Island, Korea, pp. 757 ~ 759</span>
							</List.Item>
						</List>
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
						<Modal
							trigger={
								<Label as="a" color="purple">
									Abstract
								</Label>
							}
							basic
							size="small"
						>
							<Header>
								<Label>Time Series Analysis</Label>
								<Label>Community Analysis</Label>
								<Label>Mapreduce</Label>
							</Header>
							<Modal.Content>
								<p>
									본 연구는 네트워크와 커뮤니티의 변화를 예측하는 방법에 대해 제안한다. 네트워크 및 커뮤 니티 변화 예측은 인용 네트워크에서의 연구 추세 변화 등의
									다양한 응용 분야에 적용이 가능 하다. 본 논문에서는 시계열(Time Series) 예측 모델을 기반으로 네트워크의 정량적 변화를 예 측하고,
									Roulette Wheel Selection 알고리즘을 통해 구조적 변화를 예측하였으며, 예측된 네트 워크를 기반으로 커뮤니티를 발견하였다. 또한,
									실제 인용 네트워크 데이터 기반 실험을 통해 제안하는 방법의 우수성을 증명하였다.
								</p>
							</Modal.Content>
						</Modal>
					</Item.Extra>
				</Item.Content>
			</Item>

			<Item>
				<Item.Image src={require('images/publication/bigcomp2017.png')} />

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
						<List>
							<List.Item>
								<a
									href="http://library.kaist.ac.kr/search/detail/view.do?bibCtrlNo=663511&flag=t"
									target="_blank"
								>
									2016 석사학위논문 - 한국과학기술원
								</a>
							</List.Item>
						</List>
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

						<Modal
							trigger={
								<Label as="a" color="purple">
									Abstract
								</Label>
							}
							basic
							size="small"
						>
							<Header>
								<Label>Camera-Based Fall Detection</Label>
								<Label>Complex Event Processing</Label>
								<Label>Event Selection Strategy</Label>
								<Label>Event Pattern Matching</Label>
							</Header>
							<Modal.Content>
								<p>
									본 연구는 사람의 자세 이미지 스트림으로부터 이벤트 패턴 매칭에 기반한 룰 기반 낙상 감지 방법인 sliding window fall detection
									match (SW-FDM)을 제안한다. 낙상과 낙상 후 바닥에 쓰러져 있는 기간(long lie)에 관한 룰은 패턴으로 표현이 가능하며 복합 이벤트
									처리(Complex Event Processing) 시스템을 통해 순차적 패턴 감지와 대용량의 스트림 분석이 실시간으로 가능하다. 이러한 패턴은
									Skip Till Next Match, Skip Till Any Match 등과 같은 이벤트 선택 전략(Event Selection Strategy)을
									통해 감지가 가능하다. 하지만 기존의 이벤트 선택 전략을 사용하여 낙상감지를 수행할 경우 모든 낙상을 찾아주지 못하거나 혹은 중복적인 결과를 내어주면서
									처리비용이 높아지는 문제가 있다. 본 연구에서 제안하는 방식은 슬라이딩 윈도우 개념을 적용하여 모든 결과를 내어주면서 중복 없이 처리 비용을 감소시키는
									장점을 가진다. 실험적으로 제안하는 방식이 기존의 방식에 비해 높은 정확성과 효율성을 보임을 입증하였고, 데이터의 크기가 커질수록 효율성 향상의 정도도
									따라 커짐을 보였다.
								</p>
							</Modal.Content>
						</Modal>
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>
	</Message>
);

export default Publication;
