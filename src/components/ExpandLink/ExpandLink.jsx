import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink)`
  color: ${(props) => props.color || '#adc5cf'};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  font-size: ${(props) => props.fontSize || '16px'};
  padding: ${(props) => props.padding || '8px 16px'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  
  &:hover {
    color: ${(props) => props.hoverColor || '#296073'};
    background-color: ${(props) => props.hoverBackgroundColor || '#adc5cf'};
  }
`;

const ExpandLink = ({ to, children, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

export default ExpandLink;