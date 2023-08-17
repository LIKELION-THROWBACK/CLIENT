import React from "react";
import MeetingDetail from "../@components/MeetingDetail";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMeetDetail } from "../api/getMeetDetail";
import { useParams } from "react-router-dom";
const MeetDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [meetingList, setMeetDetail] = useState([]);
  async function fetchMeetDetail(id) {
    console.log(id);
    const response = await getMeetDetail(id);
    setMeetDetail(response);
  }
  useEffect(() => {
    if (id) {
      fetchMeetDetail(id);
    }
  }, []);

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
