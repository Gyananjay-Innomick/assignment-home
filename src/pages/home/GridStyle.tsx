import React from 'react';
import { Row, Col } from 'reactstrap';
import GridStyleImage from '../../assets/images/GridStyleImage.png';
import { useTranslation } from 'react-multi-lang';
import '../../assets/css/gridStyle.css';

const GridStyle = () => {
  const t = useTranslation();
  return (
    <div className="grid-style-bg-container" data-testid="grid-style">
      <Row className="">
        <span className="body-heading-text ">
          <span className="heading-highlight grid-highlight" />
          <span className="grid-heading-text">
            {t('COLOR_PALETTE.GRID_WEBSITE')}
          </span>
        </span>
      </Row>
      <div>
        <Row>
          <Col lg="12" className="grid-style">
            <img src={GridStyleImage} alt="grid-img" className="grid-image" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GridStyle;
