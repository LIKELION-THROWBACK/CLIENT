import React from "react";
import { onboarding03Img, progress03Icon } from "../assets";
import styled from "styled-components";
import { theme } from "../style/theme";
const Onboarding3 = () => {
  return (
    <Wrapper>
      <Image src={onboarding03Img} alt="온보딩 이미지" />
      <Title>
        모임에 참여하고,
        <br /> 다양한 사람과
        <br /> 추억을 공유해보세요
      </Title>
      <Progress src={progress03Icon} alt="프로그레스"></Progress>
    </Wrapper>
  );
};

export default Onboarding3;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 25.9rem;
  height: 19.9rem;
  margin-top: 18.6rem;
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
