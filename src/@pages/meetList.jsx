import React from "react";
import Layout from "../@components/Layout";
import MeetingList from "../@components/MeetingList";
import styled from "styled-components";
import { profileImg, meetingImg } from "../assets";

const MeetList = () => {
  const meetingList = [
    {
      id: 1,
      img: { meetingImg },
      title: "고무줄 놀이 할 사람 ~",
      userName: "강민석",
      userProfile: { profileImg },
      date: "08.01-08.03",
      people: 3,
    },
    {
      id: 2,
      img: { meetingImg },
      title: "창경궁 갈 사람",
      userName: "정고으니",
      userProfile: { profileImg },
      date: "08.10-08.11",
      people: 10,
    },
  ];

  return (
    <Layout>
      <ContentSection>
        <TitleSection>
          <MeetingList meetingList={meetingList} />
        </TitleSection>
      </ContentSection>
    </Layout>
  );
};

export default MeetList;
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
