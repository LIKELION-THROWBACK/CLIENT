import React from "react";
import { onboarding01Img, progress01Icon } from "../assets";
import styled from "styled-components";
import { theme } from "../style/theme";
const Onboarding1 = () => {
  return (
    <Wrapper>
      <Image src={onboarding01Img} alt="온보딩 이미지" />
      <Title>
        추억 속의 장소로 <br />
        여행을 떠나보는 건 <br />
        어떠신가요?
      </Title>
      <Progress src={progress01Icon} alt="프로그레스"></Progress>
    </Wrapper>
  );
};

export default Onboarding1;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 31.6rem;
  height: 27.8rem;
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
