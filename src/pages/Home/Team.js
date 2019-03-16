import React from 'react';
import { Col, Container } from 'reactstrap';

import tim from '../../images/tim_frame.png';
import melissa from '../../images/melissa_frame.png';
import nguyen from '../../images/nguyen_frame.png';
import claudia from '../../images/claudia_frame.png';
import linkedin_white from '../../images/linkedin_white.png';

class Team extends React.Component {
  render() {
    return (
      <Container id="Team" fluid>
          <h1 id="team_header">MEET THE TEAM</h1>
        <div id="team_photos">
          <Col className="team_div">
              <div className="team_headers">Developer</div>
              <img alt="claudia" src={claudia} />
              <div className="linked_descriptions">
                <a href="https://www.linkedin.com/in/claudia-ligidakis/">CLAUDIA LIGIDAKIS  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
          </Col>
          <Col className="team_div">
              <div style={{textAlign: 'center'}} className="team_headers">Data Scientist</div>
              <img alt="nguyen" src={nguyen} />
              <div className="linked_descriptions"><a href="https://www.linkedin.com/in/nguyenmngo/">NGUYEN NGO  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
          </Col>
          <Col className="team_div">
              <div style={{textAlign: 'center'}} className="team_headers">Project Manager</div>
              <img alt="tim" src={tim} />
              <div className="linked_descriptions"><a href="https://www.linkedin.com/in/timsteines/">TIM STEINES  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
          </Col>
          <Col className="team_div">
              <div style={{textAlign: 'right'}} className="team_headers">UI/UX Designer</div>
              <img alt="melissa" src={melissa} />
              <div className="linked_descriptions"><a href="https://www.linkedin.com/in/melissamkaiser/">MELISSA KAISER  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
          </Col>
        </div>
      </Container>
    )
  }
}

export default Team
