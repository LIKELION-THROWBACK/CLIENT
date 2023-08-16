import React from "react";
import styled from "styled-components";
import { backIcon } from "../assets";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom";
import Footer from "../@components/Footer";
const Review = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>
        <Back
          src={backIcon}
          onClick={() => {
            navigate(-1);
          }}
        />
        <HeaderTitle>다른 친구들의 추억 여행 이야기</HeaderTitle>
      </Header>
      <Footer />
    </Wrapper>
  );
};

export default Review;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 37.5rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 4.9rem;
  margin-bottom: 5.5rem;
`;
const Back = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.55rem 0.84em 0.65rem 0.84rem;
  margin-right: 8.4rem;
`;
const HeaderTitle = styled.h1`
  ${theme.fonts.subhead2_semibold}
`;
