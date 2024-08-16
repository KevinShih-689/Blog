import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink)`
  color: ${(props) => props.color || '#adc5cf'};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  font-size: ${(props) => props.fontSize || '16px'};
  padding: ${(props) => props.padding || '8px 16px'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  @media (min-width: 768px) {
    &:hover {
      color: ${(props) => props.hoverColor || '#296073'};
      background-color: ${(props) => props.hoverBackgroundColor || '#adc5cf'};
    }
  }

  @media (max-width: 767px) {
    &:active {
      color: ${(props) => props.activeColor || '#296073'};
      background-color: ${(props) => props.activeBackgroundColor || '#adc5cf'};
    }
  }
`;

/**
 * The Link component base on RouterLink from react-router-dom
 * @param to required
 * @param color optional
 * @param underline optional
 * @param fontSize optional
 * @param padding optional
 * @param borderRadius optional
 * @param backgroundColor optional
 * @param hoverColor optional
 * @param hoverBackgroundColor optional
 * @param activeColor optional
 * @param activeBackgroundColor optional
 * @returns 
 */
const ExpandLink = ({ to, children, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

export default ExpandLink;