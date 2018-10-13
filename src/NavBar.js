import React from 'react';
import {Link} from '@reach/router';
import styled, {injectGlobal, keyframes} from 'react-emotion';
import colors from './colors';

injectGlobal`
  * {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
`;

const Spin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const SpyGlass = styled ('span')`
  display: inline-block;
  /* animation: 1s ${Spin} linear infinite; */
  animation: ${props => props.frequency}s ${Spin} linear infinite;
`;

const Container = styled ('header')`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

// & refers to whatever is in styled()
const NavLink = styled (Link)`
  &:hover {
    text-decoration: underline;
  }
  span {
    border: 1px solid red;
  }
`;

class NavBar extends React.Component {
  state = {
    frequency: 10,
  };

  halfFrequency = () => this.setState ({frequency: this.state.frequency / 2});

  render () {
    return (
      <Container>
        <NavLink to="/">Adopt Me!</NavLink>
        <NavLink to="/search-params">
          <SpyGlass
            onClick={this.halfFrequency}
            frequency={this.state.frequency}
            aria-label="search"
            role="img"
          >
            🔍
          </SpyGlass>
        </NavLink>
      </Container>
    );
  }
}

export default NavBar;
