import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { theme } from "../style/theme";
import { isApplyModalOpen } from "../atoms/selector";
import { completeIcon } from "../assets";
import { useNavigate } from "react-router-dom";
import { postApply } from "../api/postApply";
import { useParams } from "react-router-dom";
function ApplyModal({ onClose }) {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useRecoilState(isApplyModalOpen);
  const navigate = useNavigate();
  const handleOpen = () => {
    setModalOpen(false);
    fetchPostApply(id);
    navigate("/home");
  };
  async function fetchPostApply(id) {
    const response = await postApply(id);
    console.log(response);

    // response.code === 200 && navigate("/loading");
  }
  return (
    <ModalSection>
      <ModalBackground />
      <Modal>
        <Image src={completeIcon} alt="완료 아이콘" />
        <ModalContent>
          <ModalTitle>추억여행 신청 완료!</ModalTitle>
          <ModalSubTitle>
            추억여행 신청이
            <br />
            성공적으로 완료되었습니다.
            <br />
            그때 그 시절으로 떠나보세요.
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

export default ApplyModal;
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
  top: 32.1rem;
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
  margin-top: -3rem;
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
  margin-top: 1rem;
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray08};
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

  ${theme.fonts.subhead2_semibold};
  background: ${theme.colors.primary};
  color: ${theme.colors.gray01};
`;
