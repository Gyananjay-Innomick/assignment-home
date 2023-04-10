import { Row, Col, Container } from 'reactstrap';
import InnomickLogo from '../assets/images/InnomickLogo1.png';
import { useTranslation } from 'react-multi-lang';
import '../assets/css/footer.css';

function Footer() {
  const t = useTranslation();
  return (
    <>
      <div data-testid="footer">
        <div className="footer-bg">
          <Container>
            <Row className="footer-container">
              <Col sm={12} md={6} lg={3}>
                <img
                  src={InnomickLogo}
                  alt="InnomickImage"
                  className="innomick-logo-size"
                />
                <p className="footer-content footer-image-content">
                  {t('FOOTER.FOOTER_TEXT_1')}
                  <br /> {t('FOOTER.FOOTER_TEXT_2')} <br />
                  {t('FOOTER.FOOTER_TEXT_3')}
                </p>
                <i className="fa fa-linkedin-square social-media-icon " />
                <i className="fa fa-twitter social-media-icon " />
              </Col>

              <Col sm={12} md={6} lg={3}>
                <h4 className="footer-company-text">{t('FOOTER.COMPANY')}</h4>
                <p className="footer-items-gap">{t('FOOTER.HOME')}</p>
                <p>{t('FOOTER.ABOUT')}</p> <p>{t('FOOTER.BLOG')}</p>{' '}
                <p>{t('FOOTER.CAREER')}</p>
              </Col>

              <Col sm={12} md={6} lg={3}>
                <h4 className="footer-other-text">{t('FOOTER.ENQUIRES')}</h4>
                <p className="footer-items-gap">{t('FOOTER.EMAIL')}</p>
                <p>{t('FOOTER.PRIVACY')}</p> <p>{t('FOOTER.CONTACT_US')}</p>
              </Col>

              <Col sm={12} md={6} lg={3} data-testid="address-div">
                <h4 className="footer-other-text">{t('FOOTER.ADDRESS')}</h4>
                <h6 className="footer-items-gap innomick-text-bold">
                  {t('FOOTER.INNOMICK')}
                </h6>
                <p>{t('FOOTER.FIRST_FLOOR')}</p>{' '}
                <p>{t('FOOTER.JUBLLI_HILLS')}</p>
                <p>{t('FOOTER.PIN_CODE')}</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="copyright-text pt-3">
          <p>
            {t('FOOTER.COPY')} <i className="fa fa-copyright " />{' '}
            {t('FOOTER.POERRED_BY')}
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
