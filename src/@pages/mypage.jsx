import React from "react";
import styled from "styled-components";
import MypageProfile from "./../@components/MypageProfile";
import MypageFeed from "../@components/MypageFeed";
import Layout from "../@components/Layout";
import { getMyProfile } from "../api/getMyProfile";
import { useState, useEffect } from "react";
const Mypage = () => {
  const [Profile, setProfile] = useState([]);
  async function fetchProfile() {
    const response = await getMyProfile("6");
    setProfile(response);
  }
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Layout>
      <ContentSection>
        <TitleSection>
          <MypageProfile Profile={Profile} />
          {Profile?.my_reviews?.map((item) => (
            <MypageFeed Profile={item} />
          ))}
        </TitleSection>
      </ContentSection>
    </Layout>
  );
};
export default Mypage;
const ContentSection = styled.div`
  width: 32.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 2.4rem;
`;
