import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import '../../assets/css/websiteTypography.css';
import FontStyle from '../../components/FontStyle';
import { useTranslation } from 'react-multi-lang';

const WebsiteTypography = () => {
  const t = useTranslation();
  return (
    <div className="website-typography-container" data-testid="webtypography">
      <Row>
        <span className="body-heading-text ">
          <span className="heading-highlight website-highlight" />
          <span className="website-heading-text">
            {t('WEBSITE_TOPOGRAPHY.WEBSITE_TOPOGRAPHY_HEAD')}
          </span>
        </span>
      </Row>
      <div className="primary-font mt-5">
        {t('WEBSITE_TOPOGRAPHY.PRIMARY_FONT')}
      </div>
      <div className="wrapper mb-4">
        <div className="rotated-text roboto-font">
          {t('WEBSITE_TOPOGRAPHY.ROBOTO_FONT')}
        </div>
        <div>
          <FontStyle roboto={true} />
        </div>
      </div>
      <div className="divider" />
      <div className="primary-font mt-5">
        {t('WEBSITE_TOPOGRAPHY.SECONDARY_FONT')}
      </div>
      <div className="wrapper">
        <div className="rotated-text rotated-text-2  cabin-font">
          {t('WEBSITE_TOPOGRAPHY.CABIN_FONT_FAMILY')}
        </div>
        <div>
          <FontStyle roboto={false} />
        </div>
      </div>
    </div>
  );
};

WebsiteTypography.propTypes = {};

export default WebsiteTypography;
