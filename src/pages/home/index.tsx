import React from 'react';
import { Container, Row } from 'reactstrap';
import banner from '../../assets/images/INNo Mick.png';
import LogoGuideline from './LogoGuideline';
import WebsiteTypography from './WebsiteTypography';
import PropTypes from 'prop-types';
import ColorPalette from './ColorPalette';
import '../../assets/css/index.css';
import GridStyle from './GridStyle';
import SocialMedia from './SocialMedia';
import { useTranslation } from 'react-multi-lang';

function Home() {
  const t = useTranslation();
  return (
    <>
      <Container
        fluid={true}
        className="home-banner-container"
        data-testid="our-branding"
      >
        <img className="banner-img" alt="banner" src={banner} />
        <Row className="banner-text-container">
          <Row className="banner-branding" data-testid="Branding text">
            {t('BRANDING.OUR_BRANDING')}
          </Row>
          <Row className="banner-text-large" data-testid="large text">
            {t('BRANDING.BRAKES_HEADING')} <br /> {t('BRANDING.CODE_BARRIER')}
          </Row>
          <Row className="banner-text-small" data-testid="banner-description">
            {t('BRANDING.BRANDING_PARAGRAPH')}
          </Row>
        </Row>
      </Container>
      <div className="homepage-body">
        <LogoGuideline />
        <WebsiteTypography />
        <ColorPalette />
        <GridStyle />
        <SocialMedia />
      </div>
    </>
  );
}

Home.propTypes = {};

export default Home;
