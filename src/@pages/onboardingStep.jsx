import React from "react";
import styled from "styled-components";
import { theme } from "../style/theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepRender from "../@components/StepRender";
const OnboardingStep = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const handleClick = () => {
    switch (step) {
      case 1:
        setStep(2);
        break;
      case 2:
        setStep(3);
        break;
      case 3:
        setStep(4);
        break;
    }
  };
  const handleLastClick = () => {
    navigate(`/home`);
  };
  return (
    <Wrapper>
      <StepRender step={step}></StepRender>
      {step === 4 ? <Button onClick={handleLastClick}>시작하기</Button> : <Button onClick={handleClick}>다음</Button>}
    </Wrapper>
  );
};

export default OnboardingStep;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.div`
  position: absolute;
  top: 65rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34.3rem;
  height: 5.8rem;
  border: none;
  border-radius: 1.6rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  ${theme.fonts.subhead2_semibold};
`;
