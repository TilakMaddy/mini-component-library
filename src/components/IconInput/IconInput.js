import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const InputWrapper = styled.input`
  width: var(--width);
  border: none;
  border-bottom: var(--borderSize) solid black;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  color: ${COLORS.gray700};
  padding-left: var(--paddingLeft);
  padding-bottom: 7px;
  padding-top: 10px;

  &::placeholder {
	  font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
  &:hover {
    color: black;
  }

`;

const BigWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  bottom: 7px;
  margin: auto;
  height: var(--height);
  color: ${COLORS.gray700};

  ${BigWrapper}:hover & {
    color: black;
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const iconHeight = (size === 'small' ? 16 : 22) + 'px';

  return (
    <BigWrapper>
      <VisuallyHidden> {label} </VisuallyHidden>
      <IconWrapper style={{
        '--height' : iconHeight
      }}>
        <Icon
          id={icon}
          size={iconHeight}
        />
      </IconWrapper>
      <InputWrapper
        style={{
          '--width': width + 'px',
          '--borderSize': (size === 'small' ? 1 : 2) + 'px',
          '--fontSize': (size === 'small' ? 14 : 18) + 'px',
          '--lineHeight': (size === 'small' ? 16 : 21) + 'px',
          '--paddingLeft': (size === 'small' ? 24 : 36) + 'px'
        }}
        placeholder={placeholder}
        type='text'
      />
    </BigWrapper>
  );

};

export default IconInput;
