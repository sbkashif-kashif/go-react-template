import styled from 'styled-components';
import reactLogo from './assets/logo.png'

const LogoAnimation = () => {
  return (
    <div className="logo-container">
      <StyledLogo>
        <img src={reactLogo} alt="Your logo" width="100px" height="100px"/>
      </StyledLogo>
    </div>
  );
};

const StyledLogo = styled.div`
  transition: transform 2s ease-in-out;
  transform: scale(2); /* Start at 200% (scale 2) */
  animation: logo-animation 2s infinite linear;

  @keyframes logo-animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default LogoAnimation;
