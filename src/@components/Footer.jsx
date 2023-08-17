import React from "react";
import styled from "styled-components";
import { theme } from "../style/theme";
import { userIcon, homeIcon, plusIcon } from "../assets";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = (navigateCase) => {
    switch (navigateCase) {
      case "openmeeting":
        navigate(`/openmeeting`);
        break;
      case "mypage":
        navigate(`/mypage`);
        break;
      case "home":
        navigate(`/home`);
        break;
    }
  };
  return (
    <FooterWrapper>
      <FooterSection onClick={() => handleNavigate("home")}>
        <Icon src={homeIcon} alt="홈 아이콘" />
        <IconText>홈</IconText>
      </FooterSection>
      <FooterSection onClick={() => handleNavigate("openmeeting")}>
        <Icon src={plusIcon} alt="추가 아이콘" />
        <IconText>추억 만들기</IconText>
      </FooterSection>
      <FooterSection onClick={() => handleNavigate("mypage")}>
        <Icon src={userIcon} alt="사용자 아이콘" />
        <IconText>마이페이지</IconText>
      </FooterSection>
    </FooterWrapper>
  );
};

export default Footer;
const FooterWrapper = styled.div`
  position: fixed;
  bottom: 1.8rem;
  margin: 0 auto;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  width: 37.5rem;
  height: 5.8rem;

  border: 0.1rem solid;
  border-color: ${theme.colors.gray03};
  border-radius: 3.2rem;
  background-color: ${theme.colors.white};
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  cursor: pointer;
`;
const Icon = styled.img`
  width: 2.1rem;
  height: 2.1rem;
`;
const IconText = styled.span`
  ${theme.fonts.body4};
  color: ${theme.colors.gray11};
`;
