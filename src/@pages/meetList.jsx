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
