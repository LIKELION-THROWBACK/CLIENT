import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { theme } from "../style/theme";
import { isMakeModalOpen } from "../atoms/selector";
import { completeIcon } from "../assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MakeModal({ onClose, data }) {
  const [modalOpen, setModalOpen] = useRecoilState(isMakeModalOpen);
  const navigate = useNavigate();
  const handleOpen = () => {
    setModalOpen(false);
    navigate("/home");
  };
  useEffect(() => {
    let formData = new FormData();
    formData.append("image", data.imageSource);
    formData.append("members", ["이미정"]);
    formData.append("host", "이미정");
    formData.append("name", data.title);
    formData.append("location", data.place);
    formData.append("start_date", data.startDate);
    formData.append("end_date", data.endDate);
    formData.append("max_participation", data.people);
    formData.append("description", data.description);
    formData.append("price", data.money);

    axios({
      method: "post",
      url: "https://port-0-throwback-eu1k2lllcfh9do.sel3.cloudtype.app/api/travel/",
      data: formData,
    })
      .then((result) => {
        console.log("요청성공");
        console.log(result);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  });
  return (
    <ModalSection>
      <ModalBackground />
      <Modal>
        <Image src={completeIcon} alt="완료 아이콘" />
        <ModalContent>
          <ModalTitle>추억여행 만들기 완료! </ModalTitle>
          <ModalSubTitle>
            추억여행이 만들어졌어요
            <br />
            함께 할 사람들이 모이면 추억이 시작됩니다!
          </ModalSubTitle>
          <ButtonWrapper>
            <ModalConfirmButton type="button" onClick={handleOpen}>
              확인
            </ModalConfirmButton>
          </ButtonWrapper>
        </ModalContent>
      </Modal>
    </ModalSection>
  );
}

export default MakeModal;
const ModalSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;
const Modal = styled.div`
  position: absolute;
  top: 33.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32.9rem;
  height: 29.2rem;

  background-color: ${theme.colors.white};
  border-radius: 2.4rem;
`;
const Image = styled.img`
  width: 17rem;
  height: 17rem;
  margin-top: -2rem;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -3rem;
`;
const ModalTitle = styled.h1`
  text-align: center;
  ${theme.fonts.subhead2_bold};
  color: ${theme.colors.black};
`;
const ModalSubTitle = styled.h2`
  text-align: center;
  margin-top: 0.4rem;
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray06};
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
  margin-top: 2rem;
`;
const ModalConfirmButton = styled.button`
  width: 25.7rem;
  height: 4.8rem;

  border-radius: 1.6rem;
  border: none;
  cursor: pointer;
  ${theme.fonts.subhead2_semibold};
  background: ${theme.colors.primary};
  color: ${theme.colors.gray01};
`;
