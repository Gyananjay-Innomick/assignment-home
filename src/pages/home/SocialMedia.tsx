import React from 'react';
import { Row, Col } from 'reactstrap';
import SocialMediaPost from '../../assets/images/SocilaMedia.png';
import '../../assets/css/socialMedia.css';

const SocialMedia = () => {
  return (
    <div data-testid="social-media-card">
      <Row>
        <Col lg="12" className="">
          <img
            src={SocialMediaPost}
            alt="social media"
            className="social-media-image"
          />
        </Col>
      </Row>
    </div>
  );
};

export default SocialMedia;
