import React from "react";
import styled from "styled-components";
import MypageProfile from "./../@components/MypageProfile";
import { profileImg } from "../assets";
import MypageFeed from "../@components/MypageFeed";
import Layout from "../@components/Layout";
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
  const reviewList = [
    {
      id: 1,
      title: "창경궁 투어 후기",
      review:
        "어제 저녁에 친구분들과 함계 다녀왔어어제 저녁에 친구분들과 함계 다녀왔어어제 저녁에 친구분들과 함계 다녀왔어어제 저녁에 친구분들과 함계 다녀왔어",
      date: "2024.03.12",
      before: "10분전",
      // reviewImage: { reviewImg },
    },
    {
      id: 2,
      title: "서강대 투어 후기",
      review:
        "어제 저녁에 친구분들과 함계 다녀왔어어제 저녁에 친구분들과 함계 다녀왔어어제 저녁에 친구분들과 함계 다녀왔어어제 저녁에 친구분들과 함계 다녀왔어",
      date: "2024.03.12",
      before: "12분전",
      // reviewImage: { reviewImg },
    },
  ];
  return (
    <Layout>
      <ContentSection>
        <TitleSection>
          <MypageProfile Profile={Profile} />
          <MypageFeed reviewList={reviewList} />
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
