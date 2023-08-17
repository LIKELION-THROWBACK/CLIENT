import styled from "styled-components";
import React from "react";
import { userIcon, backIcon } from "../assets";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom";
import ModalPortal from "./ModalPortal";
import ApplyModal from "./ApplyModal";
import { isApplyModalOpen } from "../atoms/selector";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

const MeetingDetail = (props) => {
  let meetingList = props.meetingList;
  const { id } = useParams();

  const numericId = parseInt(id) - 1;

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useRecoilState(isApplyModalOpen);
  const HandleModal = () => {
    setModalOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const HandleModalShow = () => {
    setModalOpen(false);
  };
  return (
    <DetailWrapper>
      <BackClick>
        <img
          src={backIcon}
          onClick={() => {
            navigate(-1);
          }}
        />
      </BackClick>

      <DeatailSection key={numericId}>
        <DetailImage src={meetingList[numericId]?.image} alt="추억 여행 이미지" />

        <DetailTitle>
          <Title>{meetingList[numericId]?.name}</Title>
        </DetailTitle>
        <DetailUser>
          <User>
            <img src={meetingList[numericId]?.hose_profile_image} />
            <span>{meetingList[numericId]?.host}</span>
          </User>
          <People>
            <img src={userIcon} alt="여러명 아이콘" />
            <span>
              {meetingList[numericId]?.current_member}/{meetingList[numericId]?.max_participation}
            </span>
          </People>
        </DetailUser>
        <DetailBox>
          <DetailDate>
            <SubText>일정</SubText>
            <span>
              {meetingList[numericId]?.start_date}-{meetingList[numericId]?.end_date}
            </span>
          </DetailDate>
          <DetailPlace>
            <SubText>장소</SubText>
            <span>{meetingList[numericId]?.location}</span>
          </DetailPlace>
          <DetailFee>
            <SubText>회비</SubText>
            <span>{meetingList[numericId]?.price}</span>
          </DetailFee>
        </DetailBox>
        <CollectCount>
          <CollectDate>
            모집일정 |{" "}
            <span>
              {meetingList[numericId]?.created_at}-{meetingList[numericId]?.start_date}
            </span>
          </CollectDate>
          <CountDate>
            <span>D-{meetingList[numericId]?.left_day}</span>
          </CountDate>
        </CollectCount>
        <Divider />
        <DetailText>
          <Text>추억 여행 소개 </Text>
          <TextBox>{meetingList[numericId]?.description}</TextBox>
        </DetailText>
      </DeatailSection>

      <ConfirmBtn onClick={HandleModal}>함께 추억 만들기</ConfirmBtn>
      {modalOpen && (
        <ModalPortal>
          <ApplyModal onClose={HandleModalShow} />
        </ModalPortal>
      )}
    </DetailWrapper>
  );
};
export default MeetingDetail;
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BackClick = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.55rem 0.84em 0.65rem 0.84rem;
`;

const DeatailSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailImage = styled.img`
  width: 37.5rem;
  height: 31.1rem;
  display: flex;
  align-items: start;
  border-bottom-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;
  background-color: ${theme.colors.gray03};
`;
const DetailBox = styled.div`
  display: flex;
  justify-content: center;
`;
const DetailUser = styled.div`
  margin: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DetailTitle = styled.div`
  margin: 1.6rem;
`;
const Title = styled.h1`
  ${theme.fonts.subhead2_bold}
`;
const User = styled.div`
  ${theme.fonts.subhead2_semibold}
`;
const People = styled.div`
  ${theme.fonts.subhead2_semibold}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DetailDate = styled.div`
  ${theme.fonts.body3_regular};
  width: 10rem;
  height: 7.4rem;
  display: inline-block;
  align-items: center;
  margin: 0.8rem;
  border-radius: 1.6rem;
  https:; //port-0-throwback-eu1k2lllcfh9do.sel3.cloudtype.app/api/travel/  padding: 1.6rem;
`;
const DetailPlace = styled.div`
  ${theme.fonts.body3_regular};
  width: 10rem;
  height: 7.4rem;
  display: inline-block;
  align-items: center;
  float: left;
  margin: 0.8rem;
  border-radius: 1.6rem;
  background-color: #fbe8ef;
  padding: 1.6rem;
`;
const DetailFee = styled.div`
  ${theme.fonts.body3_regular};
  width: 10rem;
  height: 7.4rem;
  display: inline-block;
  align-items: center;
  float: left;
  margin: 0.8rem;
  border-radius: 1.6rem;
  background-color: #fbe8ef;
  padding: 1.6rem;
`;

const CollectDate = styled.div`
  ${theme.fonts.body2_bold}
`;

const SubText = styled.h1`
  ${theme.fonts.body1_medium};
  width: 10rem;
`;
const CollectCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.6rem;
  padding: 1.6rem;
  border: solid 0.2rem #fbe8ef;
  border-radius: 0.8rem;
`;
const CountDate = styled.div`
  ${theme.fonts.body2_bold};
`;
const Divider = styled.div`
  width: 34rem;
  height: 0.1rem;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  background-color: ${theme.colors.gray03};
`;
const DetailText = styled.div`
  margin: 1.6rem;
`;

const Text = styled.h1`
  ${theme.fonts.subhead2_bold};
`;
const TextBox = styled.div`
  ${theme.fonts.body3_regular};
  margin-top: 1.6rem;
  padding: 1.6rem;
  background-color: #fbe8ef;
  border-radius: 0.8rem;
`;
const ConfirmBtn = styled.div`
  ${theme.fonts.subhead2_semibold};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  width: 34.8rem;
  height: 5.8rem;
  border-radius: 1.6rem;
  margin: 1.6rem;
  padding: 1.6rem;
  cursor: pointer;
`;
