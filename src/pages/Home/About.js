import React from 'react';
import {
    Row, Col, Container
} from 'reactstrap';

import place_holder from '../../images/place_holder.png'
import photo_group from '../../images/photo_group.png'

class About extends React.Component {
    render() {
        return (
            <Container fluid>
                <div id="photo_group_div">
                    <img id="photo_group" alt="about" src={photo_group} />
                </div>
                <div id="about">
                    <Row>
                        <Col id="about_image"><img className="placeHolder" alt="video_example" src={place_holder} /></Col>
                        <Col>
                            <h4 id="about_description_title">What is Measureyes and how can it help your business?</h4>
                            <div id="about_description">
                                Measureyes is an A/B testing platform that enables retailers to track the effectiveness of physical retail displays. Using computer vision and analysis, Measureyes detects when passersby give attention to a display via head turns. From the count of head turns as a ratio of total passersby, the platform produces head-turn rate (HTR) as a simple, intuitive yet powerful metric of display effectiveness much as click-thru rate (CTR) does in conventional A/B testing for digital online media.
                                <br />
                                <br />
                                Results from experiments are provided in a user-friendly dashboard. You will be alerted in real-time once the experiment results have statistical significance so that the optimal window display can be deployed right away.
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default About