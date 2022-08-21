/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <ProgressBarWrapper role="progressbar" aria-valuenow={value}>
    <BlueBar />
    <WhiteLayer>
      <GrayLayer />
    </WhiteLayer>
  </ProgressBarWrapper>;
};

const WhiteLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 24px;
  background: white;
  box-shadow: inset 0 2px 4px 0 ${COLORS.transparentGray35};
  border-radius: 8px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 4px;
`;

const GrayLayer = styled(WhiteLayer)`
  background: ${COLORS.transparentGray35};
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  width: 370px;
  height: 24px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  padding: 4px;
`;

const BlueBar = styled.div`
  height: 16px;
  background: ${COLORS.primary};
  border-radius: 4px;
  position: relative;
`;

// const WhiteBar = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   background: white;
//   height: 16px;
//   width: 0px;
// `;

// const GrayBar = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   background: ${COLORS.transparentGray15};
//   box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
//   height: 16px;
//   width: 0px;
// `;

export default ProgressBar;
