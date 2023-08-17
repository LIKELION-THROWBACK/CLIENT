import React from "react";
import MeetingDetail from "../@components/MeetingDetail";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MeetDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <ContentSection>
      <MeetingDetail />
    </ContentSection>
  );
};

export default MeetDetail;
const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
