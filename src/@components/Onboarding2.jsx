import React from "react";
import { onboarding02Img, progress02Icon } from "../assets";
import styled from "styled-components";
import { theme } from "../style/theme";
const Onboarding2 = () => {
  return (
    <Wrapper>
      <Image src={onboarding02Img} alt="온보딩 이미지" />
      <Title>
        직접 모임을 만들고,
        <br /> 추억을 회상해보세요
      </Title>
      <Progress src={progress02Icon} alt="프로그레스"></Progress>
    </Wrapper>
  );
};

export default Onboarding2;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 18.5rem;
  height: 25.3rem;
  margin-top: 13.4rem;
`;
const Title = styled.h1`
  position: absolute;
  top: 42.9rem;
  display: flex;
  align-items: center;
  height: 12.9rem;
  text-align: center;
  ${theme.fonts.subhead1_bold}
`;
const Progress = styled.img`
  position: absolute;
  top: 60.2rem;
  width: 5.5rem;
  height: 0.7rem;
`;
