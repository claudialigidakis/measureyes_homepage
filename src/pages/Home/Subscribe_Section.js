import React from 'react';
import {
  Input, Button, Modal, FormGroup, ModalBody, Col, Form, ModalHeader
} from 'reactstrap';
import success_symbol from '../../images/success_symbol.png';


class SubscribeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        subscribe_email: '',
        modal_state: false,
    };
    this.toggle = this.toggle.bind(this);
  };

  toggle() {
    this.setState({ modal_state: !this.state.modal_state })
  };

  subscribe = (event) => {
    event.preventDefault()
    const subscribe = this.state.subscribe_email
    console.log(subscribe)
    this.setState({modal_state: true, subscribe_email: ''})

  }

  render() {
    return (
        <div className="contact_portion">
        <h2 className="h2_contact">SUBSCRIBE</h2>
        <span className="span_contact">
            The latest Measureyes updates straight to your inbox!
        </span>
        <br />
        <div className="subcribe_div_success" style={{ display: "none" }}>
            Congrats you're now on MeasurEyes update list!
    </div>
        <div className="subscribe_div">
        <Form onSubmit={this.subscribe}>
            <FormGroup row>
                <Col className="contact_email">
                    <Input type="email" id="subscribe_email" value={this.state.subscribe_email} onChange={event => this.setState({subscribe_email: event.target.value})} placeholder="Enter Your Email" required/>
                </Col>
            </FormGroup>
          <Button className="custom_button">Send a Message</Button>
        </Form>
        </div>
        <Modal isOpen={this.state.modal_state} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <div className="imgSuccessDiv">
            <img className="imgSuccess" alt="success symbol" src={success_symbol} />
            </div>
            <div className="modalSuccess">
                You are now subscribed.
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SubscribeSection
