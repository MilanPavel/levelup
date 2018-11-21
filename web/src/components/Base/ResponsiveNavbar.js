import React from 'react';
import PropTypes from 'prop-types';

import DesktopNavbar from './DesktopNavbar';

const ResponsiveNavbar = ({ children }) => (
  <div>
    <DesktopNavbar>{children}</DesktopNavbar>
    {/* <MobileNavbar>{children}</MobileNavbar> */}
  </div>
);

ResponsiveNavbar.propTypes = {
  children: PropTypes.node
};

export default ResponsiveNavbar;
