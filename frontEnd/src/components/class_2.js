import React from "react";
import pyclass from "../pyclass";
import { Container, Row, Col, Card } from "react-bootstrap";

const class_2 = (id) => {
  if (id.C_id === "1") {
    let product = pyclass.find((p) => p._id === "1");

    return (
      <Container>
        <Row>
          <Col sm={12}>
            <Card className="my-3 p-3 rounded">
              <Card.Title>本课程需要的基础</Card.Title>
              <Card.Body>
                力学是物理的基础课，因此无需物理基础。数学方面需要有代数基础，能用字母求解二元一次方程，多元一次方程组，以及分析图表。无需三角函数基础。
              </Card.Body>
              <Card.Title>授课语言</Card.Title>
              <Card.Body>英语</Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Card className="my-3 p-3 rounded">
              <Card.Title>上课时间</Card.Title>
              <Card.Body>
                2021年暑假的力学课开设两个时段。两个时段的总授课时间和每周进度保持一致。每次课课后作业时间在1个小时左右。
              </Card.Body>
              <Row>
                <Col sm={6}>
                  <Card className="my-3 p-3 rounded">
                    <Card.Img variant="top" src={classTwo2} />
                    <Card.Body>
                      <Card.Text className="text-center">
                        一周2次课课表
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card className="my-3 p-3 rounded">
                    <Card.Img variant="top" src={classTwo3} />
                    <Card.Body>
                      <Card.Text className="text-center">
                        一周3次课课表
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        {/*   new card   */}
        <Row>
          <Col sm={12}>
            <Card className="my-3 p-3 rounded">
              <dt>课程内容安排 (会根据每个班学生的具体情况稍有调整)</dt>
              <dd>
                <ul>
                  <li>Week 1: 1D kinematic equations</li>
                  <li>Week 2-3: Newton's three laws and free body diagram</li>
                  <li>
                    Week 4: Math review (Trigonometry & Vector) & 2D kinematic
                    equations
                  </li>
                  <li>Week 5: 2D Dynamic equations, Impulse and Momentum</li>

                  <li>Week 6: Work, Energy and Energy conservation</li>
                  <li>Week 7: Rotation</li>
                  <li>Week 8: Oscillations</li>
                  <li>Week 9: Fluid mechanics</li>
                  <li>Week 10: Problem solving strategies</li>
                </ul>
              </dd>
              <dt>课程教材</dt>
              <dd>
                <ul>
                  <li>
                    Book 1 (High school text book):
                    <a
                      href="https://salmanisaleh.files.wordpress.com/2019/02/fundamentals-of-physics-textbook.pdf"
                      target="_blank"
                    >
                      Fundamentals of Physics
                    </a>
                    , 10th Edition, by David Halliday, Robert Resnick, Jearl
                    Walker
                  </li>
                  <li>
                    Book 2 (USAPHO assigned book):
                    <a
                      href="https://www.amazon.com/Physics-1-Robert-Resnick/dp/0471320579"
                      target="_blank"
                    >
                      Physics
                    </a>
                    , by Halliday, Resnick, and Krane
                  </li>
                  <li>
                    每次课会有讲义可供学生复习。每次课程都会有录像上传到Youtube的私有频道，学生可以用自己的Google帐号登录查看。
                  </li>
                </ul>
              </dd>
              <dt>网课如何进行？</dt>
              <dd>
                <ul>
                  <li>
                    上课用zoom
                    meeting.学生不要求开摄像头，老师会轮流提问，尽量保证学生在积极参与课程内容。鼓励学生上课积极发言，提问。
                  </li>

                  <li>
                    网课的讲义和作业会布置在Google
                    Classroom里。由于自学教科书入门难度较大，鼓励学生上课结束以后可以阅读教科书，加强理解。
                  </li>

                  <li>
                    每次上课会有录像，供学生回放。录像会放在Youtube的私有频道，只有本节课的学生可以访问。
                  </li>
                  <li>
                    每个班级满6人开始开班，班级人数限制在15人。班级人数最多不超过20人。人数在15-20人之间，会增加一次额外答疑时间。
                  </li>
                  <li>
                    在学期中，会安排和每个家长以及学生面谈半小时，以沟通学生的学习情况。
                  </li>
                </ul>
              </dd>
              <dt>学费</dt>
              <dd>
                <ul>
                  <li>
                    所有课程学费为
                    $1500。学费在上课前支付。目前还没有比较好的在线支付方式，可以接受zelle转账，paypal或者邮寄支票。
                  </li>
                  <li>
                    每个学生可以免费试听3次课，如果觉得不合适自己，可以全额退款。
                  </li>
                  <li>3次课以后退课，按未上课次数比例退款。</li>
                  <li>所有学生可以免费重上同一课程。</li>
                </ul>
              </dd>
              <dt>报名方法</dt>
              请填写以下
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScvAVufCz4Kyn90z5ZDekD1oMqzc-Hq8ncWrDMm5ufh1T3sQw/viewform?usp=sf_link"
                target="_blank"
              >
                Google Form
              </a>
              班级报名超过15人以后，高年级学生优先。如果对上课时间有建议可以写在form最后的comments里。
              <dt>联系方式:</dt>
              <dd>
                <a href="mailto: riqinxl@gmail.com">Email: riqinxl@gmail.com</a>
                <br />
              </dd>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Card className="my-3 p-3 rounded">
              <Card.Title>Instructor</Card.Title>

              <p>
                Dr. Qin was a China PHO qualifier in high school. He received
                his Bachelor's degree from the Mechanical Engineering Department
                at Peking University, and his Ph.D. from Penn State University
                in computation mechanics. Dr. Qin then joined ABAQUS, the world
                top numerical simulation company, and currently a Principal
                Mechanical Engineer at an Aerospace industry. He was also an
                adjunct professor at URI from 2018-2019. He brings his
                experience from academia and industry to help students
                understand the fundamental physics principle and apply them to
                the real world problems.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  } else {
    if (id.C_id === "2") {
      let product = pyclass.find((p) => p._id === "2");
      console.log(product.name);
      return (
        <Row>
          <Col sm={12}>
            <Card className="my-3 p-3 rounded">
              <Card.Title>本课程需要的基础</Card.Title>
              <Card.Body>
                力学是物理的基础课，因此无需物理基础。数学方面需要有代数基础，能用字母求解二元一次方程，多元一次方程组，以及分析图表。无需三角函数基础。
              </Card.Body>
              <Card.Title>授课语言</Card.Title>
              <Card.Body>英语</Card.Body>
            </Card>
          </Col>
        </Row>
      );
    } else {
      return <div> </div>;
    }
  }
};

export default class_2;
