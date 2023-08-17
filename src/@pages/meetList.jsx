import React from "react";
import Layout from "../@components/Layout";
import MeetingList from "../@components/MeetingList";
import MeetDetail from "../@pages/meetdetail";
import styled from "styled-components";
import { profileImg, meetingImg } from "../assets";
import { Route, Routes } from "react-router-dom";
import { getMeetList } from "../api/getMeetList";
import { useState, useEffect } from "react";
const MeetList = () => {
  // const meetingList = [
  //   {
  //     id: 1,
  //     img: { meetingImg },
  //     title: "고무줄 놀이 할 사람 ~",
  //     userName: "강민석",
  //     userProfile: { profileImg },
  //     date: "08.01-08.03",
  //     people: 3,
  //   },
  //   {
  //     id: 2,
  //     img: { meetingImg },
  //     title: "창경궁 갈 사람",
  //     userName: "정고으니",
  //     userProfile: { profileImg },
  //     date: "08.10-08.11",
  //     people: 10,
  //   },
  // ];
  const [meetingList, setMeetList] = useState([]);
  async function fetchMeetList() {
    const response = await getMeetList();
    setMeetList(response);
  }
  useEffect(() => {
    fetchMeetList();
  }, []);

  return (
    <Layout>
      <ContentSection>
        <Routes>
          <Route path="/" element={<MeetingList meetingList={meetingList} />} />
          <Route path="/meetdetail/:id/*" element={<MeetDetail meetingList={meetingList} />} />
        </Routes>
      </ContentSection>
    </Layout>
  );
};

export default MeetList;
const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12rem;
`;
