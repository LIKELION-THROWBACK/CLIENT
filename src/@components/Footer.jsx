import React from "react";
import styled from "styled-components";
import { theme } from "../style/theme";
import { userIcon, homeIcon, plusIcon } from "../assets";
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <Icon src={homeIcon} alt="홈 아이콘" />
        <IconText>홈</IconText>
      </FooterSection>
      <FooterSection>
        <Icon src={plusIcon} alt="추가 아이콘" />
        <IconText>추억 만들기</IconText>
      </FooterSection>
      <FooterSection>
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
`;
const Icon = styled.img`
  width: 2.1rem;
  height: 2.1rem;
`;
const IconText = styled.span`
  ${theme.fonts.body4};
  color: ${theme.colors.gray11};
`;
