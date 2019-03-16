import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// REDUX
import step_one from '../../images/camera_icon.png'
import step_two from '../../images/data_icon.png'
import step_three from '../../images/alert_icon.png'


class Steps extends React.Component {
  render() {
    return (
      <Container id="How" fluid>
        <Row>
          <Col className="step_box">
              <img className="step_images" alt="step one" src={step_one} />
              <br />
              <div className="step_number">STEP 1</div>
              <p className="step_descriptions">Cameras are installed in optimized areas and set-up to record the number of pedestrians giving your displays attention.</p>
          </Col>
          <Col className="step_box">
              <img className="step_images" alt="step two" src={step_two} />
              <br />
              <div className="step_number">STEP 2</div>
              <p className="step_descriptions">Data is collected from pedestrians to determine the head-turn rate and is displayed on a web dashboard.</p>
          </Col>
          <Col className="step_box">
              <img className="step_images" alt="step three" src={step_three} />
              <br />
              <div className="step_number">STEP 3</div>
              <p className="step_descriptions">The web dashboard will alert the owner when statistical significance is achieved and provides results in real time.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Steps
