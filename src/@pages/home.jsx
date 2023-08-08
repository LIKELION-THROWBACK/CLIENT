import React from "react";
import Layout from "../@components/Layout";
import styled from "styled-components";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom";
import MeetingSlider from "../@components/MeetingSlider";
import { profileImg, meetingImg } from "../assets";
const Home = () => {
  const name = "이미정";
  const meetingList = [
    {
      id:1,
      img: { meetingImg },
      title: "고무줄 놀이 할 사람 ~",
      userName: "강민석",
      userProfile: { profileImg },
      date: "08.01-08.03",
      people: 3,
    },
    {
      id:2,
      img: { meetingImg },
      title: "창경궁 갈 사람",
      userName: "정고으니",
      userProfile: { profileImg },
      date: "08.10-08.11",
      people: 10,
    },
  ];
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
  return (
    <Layout>
      <HomeWrapper>
        <Title>{name}님 반가워요</Title>
        <ContentSection>
          <TitleSection>
            <SubTitle>이런 추억여행은 어떠세요?</SubTitle>
            <MoreButton onClick={() => handleNavigate("meetList")}>더보기</MoreButton>
          </TitleSection>
          <MeetingSlider meetingList={meetingList} />
        </ContentSection>
        <Divider />
        <ContentSection>
          <TitleSection>
            <SubTitle>요즘엔 이래요!</SubTitle>
            <MoreButton onClick={() => handleNavigate("nowadays")}>더보기</MoreButton>
          </TitleSection>
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
        </ContentSection>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
