import React from 'react';
import facebook from '../../images/facebook_footer.png';
import linkedin from '../../images/linkedin_footer.png';
import twitter from '../../images/twitter_footer.png';
import email from '../../images/email_icon.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div id="footer_links">
        <div className="footer_social"><img alt="linkedin" src={linkedin}></img>
          </div>
        <div className="footer_social"><img alt="facebook" src={facebook}></img>
          </div>
        <div className="footer_social"><img alt="twitter" src={twitter}></img>
        </div>
        <div className="footer_social"><img alt="email" src={email}></img>
        </div>
      </div>
    </div>
    );
  }
}

export default Footer;
