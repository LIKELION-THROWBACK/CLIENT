import React from "react";
import styled from "styled-components";
import { backIcon } from "../assets";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom";
import Footer from "../@components/Footer";
import { css } from "styled-components";
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
      <ReviewContainer>
        <UserContainer>
          <UserImage />
          <User>이미정</User>
        </UserContainer>
        <TravelName>20230728 창덕궁 투어 </TravelName>
        <Image />
        <Title>창덕궁에서 추억여행~</Title>
        <Content>
          오늘은 멋쟁이 동년배들과 창덕궁 산책 한바탕~
          <br />새 친구를 만들 수 있어서 넘넘 좋아~
        </Content>
        <Date>2023년 8월 1일</Date>
      </ReviewContainer>
      <Divider />

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
  margin-bottom: 2.4rem;
`;
const Back = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.55rem 0.84em 0.65rem 0.84rem;
  margin-right: 4rem;
`;
const HeaderTitle = styled.h1`
  ${theme.fonts.subhead2_semibold}
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.7rem;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const UserImage = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  border-radius: 10rem;
  background-color: ${theme.colors.gray04};
`;
const User = styled.span`
  ${theme.fonts.subhead2_semibold};
`;
const TravelName = styled.div`
  display: flex;
  width: 18.6rem;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  margin-bottom: 1.6rem;
  margin-left: 3.2rem;
  border-radius: 1.625rem;
  background: rgba(216, 26, 97, 0.2);
  ${theme.fonts.body1_medium};
`;
const Image = styled.div`
  width: 32.7rem;
  height: 24rem;
  margin-bottom: 0.8rem;
  border: none;
  border-radius: 0.8rem;
  background-color: ${theme.colors.gray04};
`;
const Title = styled.h1`
  margin-bottom: 0.8rem;
  ${theme.fonts.body1_medium};
`;
const Content = styled.h2`
  margin-bottom: 0.8rem;
  ${theme.fonts.body2_medium};
`;
const Date = styled.span`
  ${theme.fonts.body2_bold};
  color: ${theme.colors.gray04};
`;
const Divider = styled.div`
  width: 34rem;
  height: 0.1rem;
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
  background-color: ${theme.colors.gray03};
`;
