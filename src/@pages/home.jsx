import React, { useState } from "react";
import Layout from "../@components/Layout";
import styled from "styled-components";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom";
import MeetingSlider from "../@components/MeetingSlider";
import NowadaysSlider from "../@components/NowadaysSlider";
import ReviewSlider from "../@components/ReviewSlider";
import { profileImg, meetingImg } from "../assets";
import { getMeetList } from "../api/getMeetList";
import { getReviewList } from "../api/getReviewList";
import { getMeetDetail } from "../api/getMeetDetail";
import { useEffect } from "react";
import { nowadaysList } from "../dummy/nowadaysData";
const Home = () => {
  const [meetList, setMeetList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const name = "이미정";
  const navigate = useNavigate();
  const handleNavigate = (navigateCase) => {
    switch (navigateCase) {
      case "meetList":
        navigate(`/meetList`);
        break;
      case "nowadays":
        navigate(`/nowadays`);
        break;
      case "review":
        navigate(`/review`);
        break;
    }
  };
  async function fetchMeetList() {
    const response = await getMeetList();
    setMeetList(response);
  }
  async function fetchReviewList() {
    const response = await getReviewList();
    setReviewList(response);
  }
  async function fetchMeetDetail() {
    const response = await getMeetDetail(5);
    console.log("졸려", response);
  }
  useEffect(() => {
    fetchMeetList();
    fetchReviewList();
    fetchMeetDetail();
  }, []);
  return (
    <Layout>
      <HomeWrapper>
        <Title>{name}님 반가워요</Title>
        <ContentSection>
          <TitleSection>
            <SubTitle>이런 추억여행은 어떠세요?</SubTitle>
            <MoreButton onClick={() => handleNavigate("meetList")}>더보기</MoreButton>
          </TitleSection>
          {meetList && <MeetingSlider meetList={meetList} />}
        </ContentSection>
        <Divider />
        <ContentSection>
          <TitleSection>
            <SubTitle>요즘엔 이래요!</SubTitle>
            <MoreButton onClick={() => handleNavigate("nowadays")}>더보기</MoreButton>
          </TitleSection>
          <NowadaysSlider nowadaysList={nowadaysList} />
        </ContentSection>
        <Divider />
        <ContentSection>
          <TitleSection>
            <SubTitle>
              다른 친구들의
              <br /> 추억 여행 이야기를 들어보세요
            </SubTitle>
            <MoreButton onClick={() => handleNavigate("review")}>더보기</MoreButton>
          </TitleSection>
          <ReviewSlider reviewList={reviewList} />
        </ContentSection>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12rem;
`;
const Title = styled.h1`
  margin-top: 10.6rem;
  margin-bottom: 1.2rem;
  ${theme.fonts.headline1}
`;
const ContentSection = styled.div`
  width: 32.7rem;
  display: flex;
  flex-direction: column;
`;
const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.4rem;
`;
const SubTitle = styled.h2`
  ${theme.fonts.subhead1_bold}
`;
const MoreButton = styled.span`
  ${theme.fonts.body2_medium};
  color: ${theme.colors.primary};
  cursor: pointer;
`;
const Divider = styled.div`
  width: 34rem;
  height: 0.1rem;
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
  background-color: ${theme.colors.gray03};
`;
