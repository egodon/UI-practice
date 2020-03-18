import styled from 'styled-components';
import { transparentize } from 'polished';

const Button = styled.button`
  border: 0;
  --bg-color: ${p => p.color ?? p.theme.__color_primary};
  background-color: var(--bg-color);
  width: 100%;
  color: #fff;
  border-radius: var(--border-radius);
  line-height: 4.2rem;
  height: 4.2rem;
  font-size: var(--fs-medium);
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  box-shadow: 0 4px 14px 0
    ${p => transparentize(0.3, p.color ?? p.theme.__color_primary)};
`;

export default Button;
