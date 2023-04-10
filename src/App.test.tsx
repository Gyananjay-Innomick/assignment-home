import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Header from './components/Header';
import LogoGuideline from './pages/home/LogoGuideline';
import WebsiteTypography from './pages/home/WebsiteTypography';
import ColorPalette from './pages/home/ColorPalette';
import GridStyle from './pages/home/GridStyle';
import SocialMedia from './pages/home/SocialMedia';
import Footer from './components/Footer';

describe('App component', () => {
  it('renders header and footer', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
describe('Home page', () => {
  it('renders all sub-components', () => {
    render(<Home />);
    expect(screen.getByTestId('our-branding')).toBeInTheDocument();
    expect(screen.getByTestId('logo-guideline-card')).toBeInTheDocument();
    expect(screen.getByTestId('webtypography')).toBeInTheDocument();
    expect(screen.getByTestId('color-palette')).toBeInTheDocument();
    expect(screen.getByTestId('grid-style')).toBeInTheDocument();
    expect(screen.getByTestId('social-media-card')).toBeInTheDocument();
  });
});

describe('Header component', () => {
  test('renders header logo', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logoElement = screen.getByAltText(/innomicklogo/i);
    expect(logoElement).toBeInTheDocument();
  });
  test('renders contact mail', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const mailAddress = screen.getByText(/contactus@innomick.com/i);
    expect(mailAddress).toBeInTheDocument();
  });
  test('render all nav links', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const home = screen.getByTestId(/Home/i);
    const company = screen.getByTestId(/Company/i);
    const services = screen.getByTestId(/Services/i);
    const technologies = screen.getByTestId(/Technologies/i);
    const blog = screen.getByTestId(/Blog/i);
    const contactUs = screen.getByTestId(/Contact Us/i);
    expect(home).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(services).toBeInTheDocument();
    expect(technologies).toBeInTheDocument();
    expect(blog).toBeInTheDocument();
    expect(contactUs).toBeInTheDocument();
  });
});

describe('Banner component', () => {
  test('renders branding text', () => {
    render(<Home />);
    const branding = screen.getByTestId(/Branding text/i);
    expect(branding).toHaveTextContent('BRANDING.OUR_BRANDING');
  });
  test('renders large text', () => {
    render(<Home />);
    const large = screen.getByTestId(/large text/i);
    expect(large).toHaveTextContent('BRANDING.BRAKES_HEADING');
  });
  test('banner description text', () => {
    render(<Home />);
    const large = screen.getByTestId(/banner-description/i);
    expect(large).toHaveTextContent('BRANDING.BRANDING_PARAGRAPH');
  });
});

describe('LogoDesignCard Component', () => {
  test('renders the logo design section', () => {
    render(<LogoGuideline />);
    const logoDesignText = screen.getByText('DESIGN_SECTION.LOGO_DESIGN');
    expect(logoDesignText).toBeInTheDocument();
  });
});

describe('Typography Component', () => {
  test('renders the  Website Typography section', () => {
    render(<WebsiteTypography />);
    const websiteTypographyText = screen.getByText(
      /WEBSITE_TOPOGRAPHY.WEBSITE_TOPOGRAPHY_HEAD/i
    );
    const primaryFontText = screen.getByText(
      /WEBSITE_TOPOGRAPHY.PRIMARY_FONT/i
    );
    const robotoFontText = screen.getByText(/WEBSITE_TOPOGRAPHY.ROBOTO_FONT/i);
    const secondayFontText = screen.getByText(
      /WEBSITE_TOPOGRAPHY.SECONDARY_FONT/i
    );
    const cabinFontText = screen.getByText(
      /WEBSITE_TOPOGRAPHY.CABIN_FONT_FAMILY/i
    );
    expect(websiteTypographyText).toBeInTheDocument();
    expect(primaryFontText).toBeInTheDocument();
    expect(robotoFontText).toBeInTheDocument();
    expect(secondayFontText).toBeInTheDocument();
    expect(cabinFontText).toBeInTheDocument();
  });
});

describe('ColorPalette Component', () => {
  test('renders all  Color Palettes', () => {
    render(<ColorPalette />);
    const colorCode1 = screen.getByText(/#065086/i);
    const colorCode2 = screen.getByText(/#5CBA3C/i);
    const colorCode3 = screen.getByText(/#FFFFFF/i);
    const colorCode4 = screen.getByText(/#2B2B2B/i);
    expect(colorCode1).toBeInTheDocument();
    expect(colorCode2).toBeInTheDocument();
    expect(colorCode3).toBeInTheDocument();
    expect(colorCode4).toBeInTheDocument();
  });
  test('renders the all images', () => {
    render(<ColorPalette />);
    const Colorpalette1 = screen.getByAltText(/color palette #065086/i);
    const Colorpalette2 = screen.getByAltText(/color palette #5CBA3C/i);
    const Colorpalette3 = screen.getByAltText(/Color palette #FFFFFF/i);
    const Colorpalette4 = screen.getByAltText(/Color palette #2B2B2B/i);
    expect(Colorpalette1).toBeInTheDocument();
    expect(Colorpalette2).toBeInTheDocument();
    expect(Colorpalette3).toBeInTheDocument();
    expect(Colorpalette4).toBeInTheDocument();
  });
});

describe('GridStyle Component', () => {
  test('renders the  Grid Style for Website section', () => {
    render(<GridStyle />);
    const colorPaletteText = screen.getByText(/COLOR_PALETTE.GRID_WEBSITE/i);
    expect(colorPaletteText).toBeInTheDocument();
  });
  test('renders the grid image', () => {
    render(<GridStyle />);
    const grid = screen.getByAltText(/grid-img/i);
    expect(grid).toBeInTheDocument();
  });
});

describe('SocialMediaPost Component', () => {
  test('renders the SocialMediaPost image', () => {
    render(<SocialMedia />);
    const socialMedia = screen.getByAltText(/social media/i);
    expect(socialMedia).toBeInTheDocument();
  });
});

describe('Footer Component', () => {
  test('renders the company Logo', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const innomickLogo = screen.getByAltText(/InnomickImage/i);
    expect(innomickLogo).toBeInTheDocument();
  });
  test('render company adderss', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const companyAddress = screen.getByTestId(/address-div/i);
    expect(companyAddress).toHaveTextContent('JUBLLI_HILLS');
  });
});
