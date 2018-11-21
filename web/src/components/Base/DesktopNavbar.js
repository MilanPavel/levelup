import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Icon, Menu, Responsive } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

/*
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopNavbar extends React.Component {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Menu size='huge' borderless='true'>
          <Container>
            <Menu.Item header>
              <Icon.Group size='huge'>
                <Icon name='chess pawn' />
                <Icon corner name='add' />
              </Icon.Group>
            </Menu.Item>
            <Menu.Item header fitted='horizontally'>
              <h1>L e v e l U p</h1>
            </Menu.Item>

            <Menu.Item position='right'>
              <Button as='a'>Log in</Button>
              <Button as='a' primary style={{ marginLeft: '0.5em' }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
        {/* <HomepageHeading /> */}

        {children}
      </Responsive>
    );
  }
}

DesktopNavbar.propTypes = {
  children: PropTypes.node
};

export default DesktopNavbar;
