import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;
const inverseRotation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(-360deg);
  }
`;

export const AnimationLoading = styled.div`
  display: inline-block;
  margin: 20px 0px;
  width: 50px;
  height: 50px;
  border: 1px solid transparent;
  ${({ borda }) => borda}: 5px solid #2EABFF;
  ${({ bordaParalela }) => bordaParalela}: 5px solid #FFF312;
  border-radius: 50%;
  animation: ${({ isLeft }) => (isLeft ? rotation : inverseRotation)} 2s linear infinite;
`;

export default function AnimationLoadings() {
  return (
    <>
      <AnimationLoading borda="border-bottom" isLeft>
        {/* texto de carregamento de dados */}
      </AnimationLoading>
      <AnimationLoading borda="border-top">
        {/* texto de carregamento de dados */}
      </AnimationLoading>
      <AnimationLoading borda="border-bottom" isLeft>
        {/* texto de carregamento de dados */}
      </AnimationLoading>
      <AnimationLoading borda="border-top">
        {/* texto de carregamento de dados */}
      </AnimationLoading>
    </>
  );
}
