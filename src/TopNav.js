import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import React from "react";
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import { Link, useLocation } from 'react-router-dom';


// const linksStyle = { //TODO: apply to img/load as bg img
//   display: 'flex',
//   columnGap: '16px'
// };

const topNavStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 24px',
  backgroundColor: '#c8eacd'
};

const underlinedStyle = {
  textDecoration: 'underline'
}
const plainStyle = {
  textDecoration: 'none'
}

const renderNavLink = (link, title, pathname, setOpen) => {
  const navLinkStyle = pathname === link ? underlinedStyle : plainStyle;

  return (
    <Grid>
      <Link to={link} style={navLinkStyle} onClick={() => setOpen(false)}>{title}</Link>
    </Grid>
  );
}

function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions = () =>{
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [getWindowDimensions, hasWindow]);

  return windowDimensions;
}

function TopNav() {
  const { pathname } = useLocation();
  const windowDimensions = useWindowDimensions();
  const isNarrowWidth = windowDimensions.width < 640;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



  return isNarrowWidth ? (
    <div className="TopNav" style={topNavStyles}>
      <Link to="/">
        <img src={require("./img/TinkerTurtle_Logo.png")} alt="Tinker Turtle" height="40" />
      </Link>
      <IconButton aria-label="delete" size="large" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer className="NavDrawer" open={open} onClose={toggleDrawer(false)} anchor={'right'}>
        <div
          style={{
            padding: '36px',
            fontSize: '1.5rem'
          }}
        >
          <div style={{
            marginBottom: '48px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: 16
          }}>
            {renderNavLink('/products', 'Products', pathname, setOpen)}
            {renderNavLink('/about', 'About', pathname, setOpen)}
          </div>
          <div>
            <Button
              variant="contained"
              href="https://www.etsy.com/shop/TinkerTurtle3D"
              target="_blank"
            >
              Shop on Etsy
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  ) : (
    <div className="TopNav" style={topNavStyles}>
      <Link to="/">
        <img src={require("./img/TinkerTurtle_Logo.png")} alt="Tinker Turtle" height="40" />
      </Link>
      <Grid container columnSpacing={4} alignItems="center">
        {renderNavLink('/products', 'Products', pathname, () => {})}
        {renderNavLink('/about', 'About', pathname, () => {})}
      </Grid>
      <Button
        variant="contained"
        href="https://www.etsy.com/shop/TinkerTurtle3D"
        target="_blank"
      >
        Shop on Etsy
      </Button>
    </div>
  );
}

export default TopNav;