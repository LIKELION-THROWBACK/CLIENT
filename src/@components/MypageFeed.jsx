import { styled } from "styled-components";
import React from "react";
import { theme } from "../style/theme";
const MypageFeed = (props) => {
  const { Profile } = props;
  console.log(Profile.image);
  return (
    <FeedWrapper>
      <FeedContainer key={Profile.id}>
        <FeedImage src={"https://likeliionthrowback.s3.amazonaws.com/" + Profile.image} alt="리뷰이미지" />

        <FeedTitle>{Profile.title}</FeedTitle>
        <FeedReview>{Profile.description}</FeedReview>
        <DateBefore>
          <FeedDate>{Profile.created_at.substr(0, 10)}</FeedDate>
        </DateBefore>
        <Divider />
      </FeedContainer>
    </FeedWrapper>
  );
};
export default MypageFeed;
const FeedWrapper = styled.div`
  width: 37.5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.6rem;
  margin-top: 0.8rem;
`;
const FeedImage = styled.img`
  width: 32.7rem;
  height: 24rem;
  background-color: ${theme.colors.gray05};
  border-radius: 0.8rem;
`;
const FeedTitle = styled.h1`
  ${theme.fonts.body1_medium};
  width: 32.7rem;
  margin: 0.4rem;
  margin-top: 0.8rem;
`;
const FeedReview = styled.div`
  ${theme.fonts.body2_medium};
  width: 32.7rem;
  margin: 0.4rem;
  margin-bottom: 1.6rem;
`;
const FeedDate = styled.h1`
  ${theme.fonts.body3_medium};
`;
const FeedBefore = styled.h1`
  ${theme.fonts.body3_medium};
`;
const DateBefore = styled.div`
  color: ${theme.colors.gray05};
  width: 32.7rem;
  margin: 0.4rem;
  display: flex;
  justify-content: space-between;
`;
const Divider = styled.div`
  width: 34rem;
  height: 0.1rem;
  margin-top: 1.6rem;
  margin-bottom: 0.8rem;
  background-color: ${theme.colors.gray03};
`;
