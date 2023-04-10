import React from 'react';
import { Row, Col } from 'reactstrap';
import ColorpaletteImage from '../../assets/images/ColorPaletteImage.png';
import ColorpaletteWhiteImage from '../../assets/images/ColorPaletteWhiteImage.png';
import '../../assets/css/colorPalette.css';
import { useTranslation } from 'react-multi-lang';

const ColorPalette = () => {
  const t = useTranslation();
  return (
    <div className="color-palette-bg-container" data-testid="color-palette">
      <Row>
        <span className="body-heading-text ">
          <span className="heading-highlight color-highlight" />
          <span className="color-heading-text">
            {t('COLOR_PALETTE.COLOR_PALETTE')}
          </span>
        </span>
      </Row>
      <Row className="mt-5">
        <Col sm={12} lg={2} className="color-palette-image-container">
          <div className="image-container">
            <img src={ColorpaletteImage} alt="color palette #065086" />
            <div className="image-text">
              {t('COLOR_PALETTE.HEX')} <br /> {t('COLOR_PALETTE.#065086')}
            </div>
          </div>
        </Col>
        <Col sm={12} lg={10} className="color-palette-content-container">
          <div className="color-palette-content-container margin-spacing">
            <h1 className="color-palette-content-head">
              {t('COLOR_PALETTE.HEAD_TITLE')}
            </h1>
            <p className="color-palette-discription pt-2">
              {t('COLOR_PALETTE.COLOR_PALETTE_DESCRIPTION')}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          sm={12}
          lg={2}
          className="color-palette-image-container2 order-sm-1 order-lg-2"
        >
          <div className="image-container2">
            <img src={ColorpaletteImage} alt="color palette #5CBA3C" />
            <div className="image-text">
              {t('COLOR_PALETTE.HEX')} <br /> {t('COLOR_PALETTE.#5CBA3C')}
            </div>
          </div>
        </Col>
        <Col
          sm={12}
          lg={10}
          className="color-palette-content-container order-sm-2 order-lg-1"
        >
          <div className="color-palette-content-container2">
            <h1 className="color-palette-content-head">
              {t('COLOR_PALETTE.HEAD_TITLE')}
            </h1>
            <p className="color-palette-discription pt-2">
              {t('COLOR_PALETTE.COLOR_PALETTE_DESCRIPTION')}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={12} lg={2} className="color-palette-image-container">
          <div className="image-container image-container3">
            <img src={ColorpaletteWhiteImage} alt="Color palette #FFFFFF" />
            <div className="image-text image-text3">
              {t('COLOR_PALETTE.HEX')} <br /> {t('COLOR_PALETTE.#FFFFFF')}
            </div>
          </div>
        </Col>
        <Col sm={12} lg={10} className="color-palette-content-container">
          <div className="color-palette-content-container margin-spacing">
            <h1 className="color-palette-content-head">
              {t('COLOR_PALETTE.HEAD_TITLE')}
            </h1>
            <p className="color-palette-discription pt-2">
              {t('COLOR_PALETTE.COLOR_PALETTE_DESCRIPTION')}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          sm={12}
          lg={2}
          className="color-palette-image-container2 order-sm-1 order-lg-2"
        >
          <div className="image-container2 image-container4">
            <img src={ColorpaletteImage} alt="Color palette #2B2B2B" />
            <div className="image-text">
              {t('COLOR_PALETTE.HEX')} <br /> {t('COLOR_PALETTE.#2B2B2B')}
            </div>
          </div>
        </Col>
        <Col
          sm={12}
          lg={10}
          className="color-palette-content-container order-sm-2 order-lg-1"
        >
          <div className="color-palette-content-container2">
            <h1 className="color-palette-content-head">
              {t('COLOR_PALETTE.HEAD_TITLE')}
            </h1>
            <p className="color-palette-discription pt-2">
              {t('COLOR_PALETTE.COLOR_PALETTE_DESCRIPTION')}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ColorPalette;
