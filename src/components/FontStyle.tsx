import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-multi-lang';

interface FontStyleProps {
  roboto: boolean;
}
const FontStyle: React.FC<FontStyleProps> = ({ roboto }) => {
  const t = useTranslation();
  return (
    <Container fluid={true} className="mt-5 fonts-container">
      <Row>
        <Col lg="3" md="0" sm="0" />
        <Col lg="9" md="12" sm="12">
          <Row>
            <Col
              lg="3"
              md="3"
              className={`Aa ${roboto ? 'roboto-font' : 'cabin-font'}`}
            >
              {t('WEBSITE_TOPOGRAPHY.Aa')}
            </Col>
            <Col
              lg="3"
              md="3"
              className={`Aa ${roboto ? 'roboto-font' : 'cabin-font'}`}
            >
              {t('WEBSITE_TOPOGRAPHY.FOURTYFIVE')}
            </Col>
            <Col
              lg="4"
              md="5"
              className={`Aa text-left ${
                roboto ? 'roboto-font' : 'cabin-font'
              }`}
            >
              {t('WEBSITE_TOPOGRAPHY.MAIN_TITLE')}
            </Col>
          </Row>
          <Row>
            <Col
              lg="3"
              md="3"
              className={`Aa36 ${roboto ? 'roboto-font' : 'cabin-font'}`}
            >
              {t('WEBSITE_TOPOGRAPHY.AA')}
            </Col>
            <Col
              lg="3"
              md="3"
              className={`Aa36 ${roboto ? 'roboto-font' : 'cabin-font'}`}
            >
              {t('WEBSITE_TOPOGRAPHY.THIRTYSIX')}
            </Col>
            <Col
              lg="4"
              md="5"
              className={`Aa36 text-left ${
                roboto ? 'roboto-font' : 'cabin-font'
              }`}
            >
              {t('WEBSITE_TOPOGRAPHY.SUB_TITLE')}
            </Col>
          </Row>
          <Row>
            <Col
              lg="3"
              md="3"
              className={`Aa-22-head ${roboto ? 'roboto-font' : 'cabin-font'}`}
            >
              {t('WEBSITE_TOPOGRAPHY.Aa')}
            </Col>
            <Col
              lg="3"
              md="3"
              className={`Aa-22-head ${roboto ? 'roboto-font' : 'cabin-font'}`}
            >
              {t('WEBSITE_TOPOGRAPHY.TWENTYTWO')}
            </Col>
            <Col
              lg="4"
              md="5"
              className={`Aa-22-head text-left ${
                roboto ? 'roboto-font' : 'cabin-font'
              }`}
            >
              {t('WEBSITE_TOPOGRAPHY.BOLD_HEAD')}
            </Col>
          </Row>
          <Row>
            <Col
              lg="3"
              md="3"
              className={`Aa-22-title ${roboto ? 'roboto-font' : 'cabin-font'}`}
            >
              {t('WEBSITE_TOPOGRAPHY.Aa')}
            </Col>
            <Col
              lg="3"
              md="3"
              className={`Aa-22-title ${roboto ? 'roboto-font' : 'cabin-font'}`}
            >
              {t('WEBSITE_TOPOGRAPHY.TWENTYTWO')}
            </Col>
            <Col
              lg="4"
              md="5"
              className={`Aa-22-title text-left ${
                roboto ? 'roboto-font' : 'cabin-font'
              }`}
            >
              {t('WEBSITE_TOPOGRAPHY.BOLD_TITLE')}
            </Col>
          </Row>
          <Row>
            <Col
              lg="3"
              md="3"
              className={`Aa-16-body ${roboto ? 'roboto-font' : 'cabin-font'}`}
            >
              {t('WEBSITE_TOPOGRAPHY.Aa')}
            </Col>
            <Col
              lg="3"
              md="3"
              className={`Aa-16-body ${roboto ? 'roboto-font' : 'cabin-font'}`}
            >
              {t('WEBSITE_TOPOGRAPHY.SIXTEEN')}
            </Col>
            <Col
              lg="4"
              md="5"
              className={`Aa-16-body text-left ${
                roboto ? 'roboto-font' : 'cabin-font'
              }`}
            >
              {t('WEBSITE_TOPOGRAPHY.BODY')}
            </Col>
          </Row>
          <Row>
            <Col
              lg="3"
              md="3"
              className={`Aa-16-buttons ${
                roboto ? 'roboto-font' : 'cabin-font'
              }`}
            >
              {t('WEBSITE_TOPOGRAPHY.Aa')}
            </Col>
            <Col
              lg="3"
              md="3"
              className={`Aa-16-buttons ${
                roboto ? 'roboto-font' : 'cabin-font'
              }`}
            >
              {t('WEBSITE_TOPOGRAPHY.SIXTEEN')}
            </Col>
            <Col
              lg="4"
              md="5"
              className={`Aa-16-buttons text-left ${
                roboto ? 'roboto-font' : 'cabin-font'
              }`}
            >
              Buttons
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FontStyle;
