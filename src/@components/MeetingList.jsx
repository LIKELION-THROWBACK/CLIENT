import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { theme } from "../style/theme";
import { manyUserIcon } from "../assets";

const MeetingList = (props) => {
  const { meetingList } = props;
  return (
    <ListWrapper>
      <ListSection>
        {meetingList?.map((item) => (
          <CardContainer key={item.id}>
            <CardImage src={item.img} alt="추억 여행 이미지" />
            <CardTextBox>
              <CardTitle>
                <Title>{item.title}</Title>
              </CardTitle>
              <CardDate>{item.date}</CardDate>

              <CardUser>
                <img src={item.userProfile} />
                <span>{item.userName}</span>
              </CardUser>
              <People>
                <img src={manyUserIcon} alt="여러명 아이콘" />
                <span>{item.people}/5</span>
              </People>
            </CardTextBox>
          </CardContainer>
        ))}
      </ListSection>
    </ListWrapper>
  );
};

export default MeetingList;
const ListWrapper = styled.div`
  /* width: 37.5rem; */
  overflow-x: hidden;
  overflow-y: hidden;
`;
const ListSection = styled.div`
  /* width: 40rem; */
  /* margin-left: -1.8rem; */
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: flex;

  width: 34.4rem;
  height: 16rem;
  padding: 1.6rem;
  border: 1px solid var(--gray-100, #f3f4f6);
  border-radius: 0.8rem;
  background-color: ${theme.colors.gray01};
  box-shadow: 0px 6px 16px 0px rgba(180, 188, 201, 0.12);
  cursor: pointer;
`;
const CardImage = styled.img`
  width: 50%;
  height: 100%;

  border: none;
  border-radius: 0.8rem;
  background-color: ${theme.colors.gray03};
`;
const CardTextBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 16.2rem;
  height: 9.6rem;
  margin-left: 1.6rem;
`;
const CardTitle = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`;
const Title = styled.h1`
  ${theme.fonts.subhead2_semibold};
`;
const People = styled.div`
  display: flex;
  & > img {
    width: 2.4rem;
    height: 2.4rem;
  }
  & > span {
    ${theme.fonts.body2_medium};
  }
`;
const CardUser = styled.div`
  display: flex;
  margin-bottom: 0.4rem;
  ${theme.fonts.body2_regular};
`;
const CardDate = styled.div`
  display: flex;
  ${theme.fonts.body2_medium};
`;
