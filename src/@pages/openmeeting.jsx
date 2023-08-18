import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../style/theme";
import { backIcon, lessIcon, moreIcon } from "../assets";
import { useRecoilState } from "recoil";
import Footer from "../@components/Footer";
import ModalPortal from "../@components/ModalPortal";
import MakeModal from "../@components/MakeModal";
import { isMakeModalOpen } from "../atoms/selector";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Openmeeting = () => {
  const [modalOpen, setModalOpen] = useRecoilState(isMakeModalOpen);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [people, setPeople] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [place, setPlace] = useState("");
  const [money, setMoney] = useState(0);
  const [description, setDescription] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [data, setData] = useState({});
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    if (!e.target.files) return;
    const uploadFile = e.target.files[0];
    // formData.append('file',uploadFile);
    setImageSource(uploadFile);
  };

  // 서버 axios로 전달
  // await axios({
  //   method: 'post',
  //   url: '/api/files/images',
  //   data: formData,
  // headers: {
  //   'Content-Type': 'multipart/form-data',
  // },
  // });
  const handleMorePeople = () => {
    setPeople(people + 1);
  };
  const handleLessPeople = () => {
    if (people === 0) return;
    setPeople(people - 1);
  };
  const HandleModal = () => {
    setModalOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const HandleModalShow = () => {
    setModalOpen(false);
  };
  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };
  const handlePlace = (e) => {
    setPlace(e.target.value);
  };
  const handleMoney = (e) => {
    setMoney(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  useEffect(() => {
    if (title && imageSource && people && startDate && endDate && place && money && description) {
      setIsFormValid(true);

      let formData = new FormData();
      formData.append("image", imageSource);
      formData.append("members", ["이미정"]);
      formData.append("host", "이미정");
      formData.append("name", title);
      formData.append("location", place);
      formData.append("start_date", startDate);
      formData.append("end_date", endDate);
      formData.append("max_participation", people);
      formData.append("description", description);
      formData.append("price", money);

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
      // setData({
      //   members: ["이미정"],
      //   host: "이미정",
      //   name: title,
      //   // image: imageSource,
      //   image: null,
      //   location: place,
      //   start_date: startDate,
      //   end_date: endDate,
      //   max_participation: people,
      //   description: description,
      //   price: money,
      // });
    }
  }, [title, imageSource, people, startDate, endDate, place, money, description]);

  return (
    <Wrapper>
      <Header>
        <Back>
          <img
            src={backIcon}
            onClick={() => {
              navigate(-1);
            }}
          />
        </Back>
        <HeaderTitle>추억 여행 만들기</HeaderTitle>
      </Header>
      <div>
        <Title>추억 여행 이름을 알려주세요! </Title>
        <TextInput type="text" placeholder="추억 여행명을 입력하세요" onChange={(e) => handleTitle(e)} />
      </div>
      <Divider />
      <div>
        <Title>추억여행에 연관된 당신의 사진을 올려주세요</Title>
        {imageSource ? (
          <div>
            <Image src={imageSource} alt="업로드 이미지" />
          </div>
        ) : (
          <UploadImage htmlFor="file">
            <ImageText>대표 이미지를 업로드해주세요</ImageText>
          </UploadImage>
        )}
        <ImageInput accept="image/*" type="file" id="file" onChange={(e) => handleUpload(e)} />
      </div>
      <Divider />
      <div>
        <Title>인원</Title>
        <PeopleContainer>
          <Target>성인</Target>
          <PeopleSection>
            <Icon src={lessIcon} onClick={handleLessPeople} />
            <People>{people}</People>
            <Icon src={moreIcon} onClick={handleMorePeople} />
          </PeopleSection>
        </PeopleContainer>
      </div>
      <Divider />
      <div>
        <Title>일정</Title>
        <DateSection>
          <DateBox>
            <Target>시작일</Target>
            <DateInput type="text" placeholder="ex) 2023-05-13" onChange={(e) => handleStartDate(e)}></DateInput>
          </DateBox>
          <DateBox>
            <Target>종료일</Target>
            <DateInput type="text" placeholder="ex) 2023-05-14" onChange={(e) => handleEndDate(e)}></DateInput>
          </DateBox>
        </DateSection>
      </div>
      <Divider />
      <div>
        <Title>장소</Title>
        <TextInput type="text" placeholder="모임 장소를 입력하세요" onChange={(e) => handlePlace(e)}></TextInput>
      </div>
      <Divider />
      <div>
        <Title>참가비</Title>
        <TextInput type="text" placeholder="모임 참가비를 입력하세요" onChange={(e) => handleMoney(e)}></TextInput>
      </div>
      <Divider />
      <div>
        <Title>추억 여행 소개</Title>
        <Description type="text" placeholder="내용을 입력하세요" onChange={(e) => handleDescription(e)}></Description>
      </div>
      {isFormValid ? (
        <Button type="button" onClick={HandleModal}>
          추억 여행 만들기
        </Button>
      ) : (
        <DisabledButton type="button" onClick={HandleModal} disabled>
          추억 여행 만들기
        </DisabledButton>
      )}

      {modalOpen && (
        <ModalPortal>
          <MakeModal onClose={HandleModalShow} data={data} />
        </ModalPortal>
      )}
    </Wrapper>
  );
};

export default Openmeeting;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 37.5rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 4.9rem;
  margin-bottom: 5.5rem;
`;
const Back = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.55rem 0.84em 0.65rem 0.84rem;
  margin-right: 8.4rem;
`;
const HeaderTitle = styled.h1`
  ${theme.fonts.subhead2_semibold}
`;
const Divider = styled.div`
  width: 34rem;
  height: 0.1rem;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  background-color: ${theme.colors.gray03};
`;
const Title = styled.h1`
  margin-bottom: 0.8rem;
  ${theme.fonts.subhead2_semibold}
`;
const TextInput = styled.input`
  width: 33.7rem;
  height: 5rem;
  padding: 1.6rem;
  color: ${theme.colors.gray09};
  border-radius: 1.6rem;
  border: solid 0.1rem ${theme.colors.gray05};
  outline: none;
  &::placeholder {
    ${theme.fonts.body2_regular};
    color: ${theme.colors.gray08};
  }
`;
const UploadImage = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
  width: 33.7rem;
  height: 12.7rem;
  border-radius: 1.6rem;
  border: solid 0.1rem ${theme.colors.gray05};
  cursor: pointer;
`;
const ImageInput = styled.input`
  display: none;
`;
const Image = styled.img`
  width: 33.7rem;
  height: 12.7rem;
  border-radius: 1.6rem;
  object-fit: fill;
`;
const ImageText = styled.h1`
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray08};
`;
const PeopleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 33.7rem;
`;
const Target = styled.h2`
  ${theme.fonts.body1_medium};
  color: ${theme.colors.gray10};
`;
const PeopleSection = styled.div`
  width: 14.3rem;
  height: 4rem;
  display: flex;
  justify-content: space-evenly;
`;
const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;
const People = styled.h2`
  ${theme.fonts.subhead2_semibold};
  color: ${theme.colors.black};
`;
const Description = styled.textarea`
  width: 33.6rem;
  height: 14.8rem;
  padding: 1.6rem;
  margin-top: 0.8rem;
  /* margin-bottom: 5rem; */

  color: ${theme.colors.gray09};
  border-radius: 1.6rem;
  border: solid 0.1rem ${theme.colors.gray05};
  outline: none;
  &::placeholder {
    ${theme.fonts.body2_regular};
    color: ${theme.colors.gray08};
  }
`;
const DateInput = styled.input`
  width: 15.6rem;
  height: 5rem;
  padding: 1.6rem;
  margin-top: 0.5rem;
  color: ${theme.colors.gray09};
  border-radius: 1.6rem;
  border: solid 0.1rem ${theme.colors.gray05};
  outline: none;
  &::placeholder {
    ${theme.fonts.body2_regular};
    color: ${theme.colors.gray08};
  }
`;
const DateSection = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const DateBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const DisabledButton = styled.button`
  width: 34.3rem;
  height: 5.8rem;
  margin-top: 17.2rem;
  margin-bottom: 2.4rem;
  border: none;
  border-radius: 1.6rem;
  background-color: ${theme.colors.gray03};
  ${theme.fonts.subhead2_semibold};
  color: ${theme.colors.white};
  cursor: pointer;
`;
const Button = styled.button`
  width: 34.3rem;
  height: 5.8rem;
  margin-top: 17.2rem;
  margin-bottom: 2.4rem;
  border: none;
  border-radius: 1.6rem;
  background-color: ${theme.colors.primary};
  ${theme.fonts.subhead2_semibold};
  color: ${theme.colors.white};
  cursor: pointer;
`;
