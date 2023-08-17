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
    <ContentSection>
      <MeetingDetail meetingList={meetingList} />
    </ContentSection>
  );
};

export default MeetDetail;
const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
