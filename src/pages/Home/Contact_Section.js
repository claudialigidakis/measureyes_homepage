import React from 'react';
import {
  Input, Button, Modal, FormGroup, ModalBody, Col, Form, ModalHeader
} from 'reactstrap';
import success_symbol from '../../images/success_symbol.png';

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact_email: '',
      contact_name: '',
      contact_message: '',
      modal_state: false,
      modal_success: false,
    };
    this.toggle_form = this.toggle_form.bind(this);
    this.toggle_success = this.toggle_success.bind(this);
  };

  toggle_form() {
    console.log("form")
    this.setState({ modal_state: !this.state.modal_state })
  };

  toggle_success() {
    this.setState({ modal_success: !this.state.modal_success})
  };

  submitForm = (e) => {
    e.preventDefault();
    const {contact_email, contact_name, contact_message} = this.state;
    const contactMessage = {contact_email, contact_name, contact_message};
    console.log(contactMessage)
    this.setState({ modal_state: false, modal_success: true, contact_email: '', contact_message: '', contact_name: '' })
    //need to send through props or state
  }

  render() {
    return (
      <div className="contact_portion">
        <h2 className="h2_contact">CONTACT US</h2>
        <span className="span_contact">
          Enter your email below to send us a message.
      </span>
        <br />
        <div className="subscribe_div">
          <FormGroup row>
            <Col className="contact_email">
              <Input type="email" id="contact_email" value={this.state.contact_email} onChange={event => this.setState({contact_email: event.target.value})} placeholder="Enter Your Email" />
            </Col>
          </FormGroup>
          <Button type="button" className="custom_button" onClick={this.toggle_form}>Send a Message</Button>
        </div>
        <Modal isOpen={this.state.modal_state} toggle={this.toggle_form}>
        <ModalHeader toggle={this.toggle_form}></ModalHeader>
          <ModalBody>
            <div className="subscribe_div">
              <h2 className="h2_contact">CONTACT US</h2>
              <span style={{ textAlign: 'center', paddingBottom: '35px' }} className="span_contact"> Questions? Our team is ready to help. </span>
              <br />
              <Form onSubmit={this.submitForm}>
              <FormGroup style={{ paddingBottom: '19px' }} row>
                <Col className="contact_email">
                  <Input type="email" id="contact_email" value={this.state.contact_email} onChange={event => this.setState({contact_email: event.target.value})} placeholder="Enter Your Email" required/>
                </Col>
              </FormGroup>
              <FormGroup style={{ paddingBottom: '20px' }} row>
                <Col className="contact_email">
                  <Input type="name" id="contact_name" value={this.state.contact_name} onChange={event => this.setState({contact_name: event.target.value})} placeholder="Enter Your Name" required/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col className="contact_email">
                  <Input type="textarea" name="text" id="contact_text" value={this.state.contact_message} onChange={event => this.setState({contact_message: event.target.value})} placeholder="Type your message here.." required/>
                </Col>
              </FormGroup>
            <Button style={{ marginTop: '81px', marginLeft: '2em' }} className="custom_button">Send Message</Button>
              </Form>
              </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.modal_success} toggle={this.toggle_success}>
        <ModalHeader toggle={this.toggle_success}></ModalHeader>
          <ModalBody>
            <div className="imgSuccessDiv">
              <img className="imgSuccess" alt="success symbol" src={success_symbol} />
            </div>
            <div className="modalSuccess">
                Your message has been sent.
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ContactSection

