import React from "react";
import MeetingDetail from "../@components/MeetingDetail";
import styled from "styled-components";
import { profileImg, meetingImg } from "../assets";

const MeetDetail = () => {
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
  ];

  return (
    <ContentSection>
      <TitleSection>
        <MeetingDetail meetingList={meetingList} />
      </TitleSection>
    </ContentSection>
  );
};

export default MeetDetail;
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
