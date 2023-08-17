import React, { useState } from "react";
import styled from "styled-components";
import { backIcon } from "../assets";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom";
import Footer from "../@components/Footer";

import { getReviewList } from "../api/getReviewList";
import { useEffect } from "react";
import { getDate } from "../utils/date";
const Review = () => {
  const navigate = useNavigate();
  const [reviewList, setReviewList] = useState([]);
  async function fetchReviewList() {
    const response = await getReviewList();
    setReviewList(response);
    console.log(reviewList);
  }
  useEffect(() => {
    fetchReviewList();
  }, []);
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
      {reviewList?.map((item) => (
        <ReviewContainer key={item.id}>
          <UserContainer>
            <UserImage src={item.user.profile_image} alt="유저 이미지" />
            <User>{item.user.nickname}</User>
          </UserContainer>
          <TravelName>
            {item.travel.start_date} <br />
            {item.travel.name}
          </TravelName>
          <Image src={item.image} alt="여행 이미지" />
          <Title>{item.title}</Title>
          <Content>{item.description}</Content>
          <Date>{getDate(item.created_at.substr(0, 10))}</Date>
          <Divider />
        </ReviewContainer>
      ))}
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
const UserImage = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  border-radius: 10rem;
`;
const User = styled.span`
  ${theme.fonts.subhead2_semibold};
`;
const TravelName = styled.div`
  display: flex;
  width: 23rem;
  /* height: 4rem; */
  padding: 0.8rem 1.6rem;
  margin-bottom: 1.6rem;
  margin-left: 3.2rem;
  border-radius: 1.625rem;
  background: rgba(216, 26, 97, 0.2);
  ${theme.fonts.body1_medium};
`;
const Image = styled.img`
  width: 32.7rem;
  height: 24rem;
  margin-bottom: 0.8rem;
  border: none;
  border-radius: 0.8rem;
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
