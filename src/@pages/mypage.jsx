import React from "react";
import styled from "styled-components";
import MypageProfile from "./../@components/MypageProfile";
import { profileImg } from "../assets";
import Feed from "../@components/Feed";
const Mypage = () => {
  const Profile = [
    {
      id: 1,
      userName: "강민석",
      userProfile: { profileImg },
      message: "인생은 즉흥적으로~",
      age: "5학년 6반",
      preMeeting: "3",
      postMeeting: "5",
    },
  ];
  return (
    <ContentSection>
      <TitleSection>
        <MypageProfile Profile={Profile} />
        <Feed />
      </TitleSection>
    </ContentSection>
  );
};
export default Mypage;
const ContentSection = styled.div`
  width: 32.7rem;
  display: flex;
  flex-direction: column;
`;
const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 2.4rem;
`;
