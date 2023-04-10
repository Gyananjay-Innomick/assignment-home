import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logotext from '../../assets/images/InnomickLogo1.png';
import Logo from '../../assets/images/InnomickLogo2.png';
import '../../assets/css/logoGuideline.css';
import { useTranslation } from 'react-multi-lang';

const LogoGuideline = () => {
  const t = useTranslation();
  return (
    <Container
      fluid={true}
      className="logo-guideline-container"
      data-testid="logo-guideline-card"
    >
      <Row className="logo-guideline logo-guideline-design">
        <Row className="w-100" data-testid="logo design">
          <span className="body-heading-text">
            <span className="heading-highlight logo-highlight" />
            <span className="logo-heading">
              {t('DESIGN_SECTION.LOGO_DESIGN')}
            </span>
          </span>
        </Row>
        <Row className="guideline-content">
          <Col xl={6} lg={12} className="logo-left">
            <div className="w-100 text-center">
              <img
                alt="logo"
                src={Logotext}
                style={{
                  height: 80,
                  width: 260,
                }}
              />
            </div>
            <div className="guideline-description">
              <div className=" logo-text-content logo-text-bold">
                <span>{t('DESIGN_SECTION.USE_THIS')}</span>
              </div>
              <div className="logo-text-content">
                <ul>
                  <li>{t('DESIGN_SECTION.BIG_SPACE')}</li>
                  <li>{t('DESIGN_SECTION.BUSINESS_PROPSITIONS')}</li>
                  <li>{t('DESIGN_SECTION.BUSINESS')}</li>
                  <li>{t('DESIGN_SECTION.POSTERS')}</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={12} className="logo-right">
            <div className="w-100 text-center">
              <img
                alt="logo"
                src={Logo}
                style={{
                  height: 80,
                  width: 80,
                }}
              />
            </div>
            <div className="guideline-description">
              <div className=" logo-text-content logo-text-bold">
                <span>USE THIS : </span>
              </div>
              <div className="logo-text-content">
                <ul>
                  <li>{t('DESIGN_SECTION.COMPACT_SPACE')}</li>
                  <li>{t('DESIGN_SECTION.SHARE_VEDIO')}</li>
                  <li>{t('DESIGN_SECTION.THUMBNAIL')}</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
      <hr className="logo-line" />
      <Row className="logo-guideline logo-guideline-typography">
        <Col>
          <Row className="w-100">
            <span className="body-heading-text ">
              <span className="heading-highlight logo-highlight" />
              <span className="logo-heading">
                {t('DESIGN_SECTION.TYPOGRAPHY')}
              </span>
            </span>
          </Row>
          <Row className="guideline-content">
            <Col xl={6} lg={12} className="logo-left">
              <img
                alt="logo"
                src={Logotext}
                style={{
                  height: 80,
                  width: 260,
                }}
              />
            </Col>
            <Col xl={6} lg={12} className="logo-right">
              <div className="typography-main-heading">
                <div className="typography-label">
                  <div className="typography-heading-text">
                    {t('DESIGN_SECTION.Azonix')}
                  </div>
                  <span className="typography-heading-description">
                    {t('DESIGN_SECTION.MAIN_HEADING')}
                  </span>
                </div>
                <div className="typography-heading-text typography-value">
                  {t('DESIGN_SECTION.50')}
                </div>
              </div>
              <div className="typography-main-heading">
                <div className="typography-label">
                  <div className="typography-subheading-text">
                    {t('DESIGN_SECTION.Azonix')}
                  </div>
                  <span className="typography-heading-description">
                    {t('DESIGN_SECTION.SUB_HEADING')}
                  </span>
                </div>
                <div className="typography-subheading-text typography-value">
                  {t('DESIGN_SECTION.22')}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LogoGuideline;
