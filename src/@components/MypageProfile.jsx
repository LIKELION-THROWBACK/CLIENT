import React from "react";
import styled from "styled-components";
import { backIcon } from "../assets";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom";
const MypageProfile = (props) => {
  const { Profile } = props;
  const navigate = useNavigate();

  return (
    <MypageWrapper>
      <Header>
        <BackClick>
          <img
            src={backIcon}
            onClick={() => {
              navigate(-1);
            }}
          />
        </BackClick>

        <HeaderTitle>마이 페이지</HeaderTitle>
      </Header>
      {Profile?.map((item) => (
        <ProfileWrapper key={item.id}>
          <ProfileContainer>
            <ProfileImage>
              <img src={item.userProfile} alt="프로필 이미지" />
            </ProfileImage>
            <ProfileAge>{item.age} </ProfileAge>
            <ProfileName>{item.userName} </ProfileName>
            <ProfileMessage>{item.message}</ProfileMessage>
            <MeetingCount>
              <PreMeeting>
                {item.preMeeting}
                <Text>곧 다가올 추억여행</Text>
              </PreMeeting>
              <Divider />
              <PostMeeting>
                {item.postMeeting}
                <Text>지나간 추억여행</Text>
              </PostMeeting>
            </MeetingCount>
          </ProfileContainer>

          <FeedContainer>
            <Title>{item.userName}님의 </Title>
            <TitleSecond>추억여행 이야기</TitleSecond>
          </FeedContainer>
        </ProfileWrapper>
      ))}
    </MypageWrapper>
  );
};
export default MypageProfile;
const MypageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.5rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 4.9rem;
  margin-bottom: 3.2rem;
`;
const BackClick = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.55rem 0.84em 0.65rem 0.84rem;
  margin-right: 12rem;
`;
const HeaderTitle = styled.h1`
  ${theme.fonts.subhead2_semibold}
`;
const ProfileContainer = styled.div`
  width: 37.5rem;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const ProfileWrapper = styled.div`
  width: 37.5rem;
`;

const ProfileImage = styled.div`
  width: 9.5rem;
  height: 9.5rem;
  border-radius: 5rem;
  background-color: ${theme.colors.gray03};
  margin: 0.8rem;
`;
const ProfileAge = styled.h2`
  ${theme.fonts.body2_regular};
  margin: 0.4rem;
  color: ${theme.colors.gray09};
`;
const ProfileName = styled.h1`
  ${theme.fonts.subhead2_bold};
  margin: 0.4rem;
`;
const ProfileMessage = styled.div`
  ${theme.fonts.body3_regular};
  margin: 0.8rem;
  border-radius: 1.6rem;
  border: solid 0.2rem ${theme.colors.gray09};
  padding: 0.8rem 1.6rem;
`;
const MeetingCount = styled.div`
  width: 34rem;
  height: 11.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.6rem;
  background-color: ${theme.colors.gray05};
  box-shadow: 0px 6px 16px 0px rgba(180, 188, 201, 0.12);
  border-radius: 0.8rem;
  padding: 0.4rem;
`;
const PreMeeting = styled.div`
  ${theme.fonts.headline2_bold};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.8rem;
`;
const PostMeeting = styled.div`
  ${theme.fonts.headline2_bold};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.8rem;
`;
const Divider = styled.div`
  width: 0.1rem;
  height: 2.5rem;
  margin: 2rem;
  background-color: ${theme.colors.gray04};
`;
const Text = styled.div`
  ${theme.fonts.body2_regular};
  margin: 0.8rem;
`;
const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
`;
const Title = styled.h1`
  margin-top: 7rem;
  ${theme.fonts.headline1};
`;
const TitleSecond = styled.h1`
  margin-bottom: 1.2rem;
  ${theme.fonts.headline1};
`;
