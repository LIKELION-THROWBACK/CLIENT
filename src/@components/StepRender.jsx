import React from "react";
import { logoIcon, logoTitleIcon } from "../assets";
import styled from "styled-components";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import { theme } from "../style/theme";
const StepRender = (props) => {
  const { step } = props;
  switch (step) {
    case 1:
      return <Onboarding1 />;
    case 2:
      return <Onboarding2 />;
    case 3:
      return <Onboarding3 />;
    case 4:
      return (
        <Wrapper>
          <Intro>7080을 위한 추억 모임 서비스,</Intro>
          <Logo src={logoIcon} alt="로고" />
          <Title src={logoTitleIcon} />
        </Wrapper>
      );
  }
};

export default StepRender;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* margin-top: 22.5rem; */
`;
const Intro = styled.div`
  position: absolute;
  top: 19.4rem;
  ${theme.fonts.subhead1_bold};
`;
const Logo = styled.img`
  margin-top: 27.2rem;
  width: 15.5rem;
  filter: invert(18%) sepia(99%) saturate(4674%) hue-rotate(329deg) brightness(89%) contrast(89%);
`;

const Title = styled.img`
  width: 18rem;
  margin-top: -2rem;
  margin-bottom: 18rem;
  filter: invert(18%) sepia(99%) saturate(4674%) hue-rotate(329deg) brightness(89%) contrast(89%);
`;
