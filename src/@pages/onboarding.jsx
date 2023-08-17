import React from "react";
import { logoIcon, logoTitleIcon } from "../assets";
import styled from "styled-components";
const Onboarding = () => {
  return (
    <Wrapper>
      <Logo src={logoIcon} alt="로고" />
      <Title src={logoTitleIcon} />
    </Wrapper>
  );
};

export default Onboarding;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  /* margin-top: 22.5rem; */
`;
const Logo = styled.img`
  width: 15.5rem;
  filter: invert(18%) sepia(99%) saturate(4674%) hue-rotate(329deg) brightness(89%) contrast(89%);
`;

const Title = styled.img`
  width: 18rem;
  margin-top: -2rem;
  filter: invert(18%) sepia(99%) saturate(4674%) hue-rotate(329deg) brightness(89%) contrast(89%);
`;
