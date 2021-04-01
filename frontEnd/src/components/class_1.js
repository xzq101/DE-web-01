import React from "react";
import pyclass from "../pyclass";
import EnLBut from "./enButtun";
import { Container, Row, Col, Card } from "react-bootstrap";
import classTwo2 from "../img/class2021summer2.png";
import classTwo3 from "../img/class-3-2021-summer.png";
const class_1 = (id) => {
  if (id.C_id === "1") {
    let product = pyclass.find((p) => p._id === "1");

    return (
      <Container>
        <Row>
          <Col sm={12}>
            <Card className="my-3 p-3 rounded">
              <Card.Title>本课程需要的基础 (Prerequisites)</Card.Title>
              <Card.Body>
                力学是物理的基础课，因此无需物理基础。数学方面需要有代数基础，能用字母求解二元一次方程，多元一次方程组，以及分析图表。无需三角函数基础。(This
                class is designed for students in Grade 8 to Grade 12. For
                students in Grade 8, need to learn algebra before this class.)
              </Card.Body>
              <Card.Title>授课语言 (Language of instruction)</Card.Title>
              <Card.Body>英语 (English)</Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Card className="my-3 p-3 rounded">
              <Card.Title>上课时间 (Class Meet Time)</Card.Title>
              <Card.Body>
                2021年暑假的力学课开设两个时段。两个时段的总授课时间和每周进度保持一致。每次课课后作业时间在1个小时左右。(The
                mechanics class in the summer of 2021 will offer two sessions.
                The total teaching time and weekly progress of the two periods
                are consistent. The homework time after each class is about 1
                hour.)
              </Card.Body>
              <Row>
                <Col sm={6}>
                  <Card className="my-3 p-3 rounded">
                    <Card.Img variant="top" src={classTwo2} />
                    <Card.Body>
                      <Card.Text className="text-center">
                        课程表：一周2次课 （Twice a Week)
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card className="my-3 p-3 rounded">
                    <Card.Img variant="top" src={classTwo3} />
                    <Card.Body>
                      <Card.Text className="text-center">
                        课程表：一周3次课 （Three Classes a Week)
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
              <dt>课程内容安排 (Class Schedule)</dt>
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
              <dt>课程教材 (Text Book)</dt>
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
                    每次课会有讲义可供学生复习。每次课程都会有录像上传到Youtube的私有频道，学生可以用自己的Google帐号登录查看。(Handouts
                    and class recordings are available for every lesson.)
                  </li>
                </ul>
              </dd>
              <dt>网课如何进行？ </dt>
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
              <dd>
                <dt>How do online classes work?</dt>
                <ul>
                  <li>
                    After enrolling, the student will be invited to a google
                    classroom. Class notes, homework, and homework solutions for
                    each class will be posted in the google classroom.
                  </li>
                  <li>Google meet is used for online teaching.</li>
                  <li>
                    Record class videos will be posted to a private youtube
                    channel. A sample class can be found
                    <a href="https://youtu.be/E-eApGRawUc" target="_blank">
                      here
                    </a>
                    .
                  </li>
                  <li>
                    Record homework solution videos will be posted to youtube to
                    help students solve challenge problems.
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
              <dt>Tuition</dt>
              <dd>
                <ul>
                  <li>
                    Tuition for Summer Class is $1500. Tuition should be paid
                    before the class starts.
                  </li>
                  <li>
                    Each student can attend 3 lessons to decide if he/she wants
                    to continue the study. If a student quit in the first three
                    lessons, a full refund will be issued.
                  </li>
                  <li>
                    When a student withdraws the class after 3 lessons, a
                    pro-rated refund will be given.
                  </li>
                  <li>
                    All students can re-take the same class in the future for
                    free.
                  </li>
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
        <Container>
          <Row>
            <Col sm={12}>
              <Card className="my-3 p-3 rounded">
                <Card.Title>本课程需要的基础</Card.Title>
                <Card.Body>
                  该课程有一定难度，适合上过Mechanics课程的学生，或者AP physics
                  1 4分以上的学生。
                </Card.Body>
                <Card.Title>授课语言</Card.Title>
                <Card.Body>英语</Card.Body>
                <dt>课程安排 (会根据班级情况稍作调整)</dt>
                <dd>
                  <ul>
                    <li>Class 1-2: Kepler’s laws & planetary motion</li>
                    <li>
                      Class 3-4: Angular momentum conservation and Rolling
                    </li>
                    <li>Class 5-6: Oscillations & Fluid mechanics</li>
                    <li>Class 7-8: Momentum & Energy conservation</li>
                    <li>Class 9: 1D & 2D kinematic motion</li>
                    <li>Class 10: Static Equilibrium</li>
                    <li>Class 11-15: Review 1 F=ma exam a week</li>
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
                  </ul>
                </dd>
                <dt>开课时间</dt>
                <ul>
                  <li>2021年秋季</li>
                </ul>
                <dt>学费</dt>
                <dd>
                  <ul>
                    <li>
                      Tuition for all 15 lessons is $900. Tuition should be paid
                      before the class starts.
                    </li>
                    <li>
                      Return students get $10 off discount per class. Tuition
                      for the 15 lessons in fall 2020 for return students is
                      $750.
                    </li>
                    <li>
                      Each student can attend 3 lessons to decide if he/she
                      wants to continue the study. If a student quit in the
                      first three lessons, a full refund will be issued.
                    </li>
                    <li>
                      When a student withdraws the class after 3 lessons, a
                      pro-rated refund will be given.
                    </li>
                    <li>
                      All students can re-take the same class in the future for
                      free.
                    </li>
                  </ul>
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
                  his Bachelor's degree from the Mechanical Engineering
                  Department at Peking University, and his Ph.D. from Penn State
                  University in computation mechanics. Dr. Qin then joined
                  ABAQUS, the world top numerical simulation company, and
                  currently a Principal Mechanical Engineer at an Aerospace
                  industry. He was also an adjunct professor at URI from
                  2018-2019. He brings his experience from academia and industry
                  to help students understand the fundamental physics principle
                  and apply them to the real world problems.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <div> </div>;
    }
  }
};

export default class_1;
