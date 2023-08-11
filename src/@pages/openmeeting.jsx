import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../style/theme";
import { backIcon, lessIcon, moreIcon } from "../assets";
import Footer from "../@components/Footer";

const Openmeeting = () => {
  const [imageSource, setImageSource] = useState(null);
  const [people, setPeople] = useState(0);
  const handleUpload = (e) => {
    e.preventDefault();
    if (!e.target.files) return;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImageSource(reader.result);
    };
    // const formData = new FormData();
    // formData.append('files', e.target.files[0]);
    // 서버 axios로 전달
    // await axios({
    //   method: 'post',
    //   url: '/api/files/images',
    //   data: formData,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
  };
  const handleMorePeople = () => {
    setPeople(people + 1);
  };
  const handleLessPeople = () => {
    if (people === 0) return;
    setPeople(people - 1);
  };
  return (
    <Wrapper>
      <Header>
        <Back src={backIcon} />
        <HeaderTitle>추억 여행 만들기</HeaderTitle>
      </Header>
      <div>
        <Title>추억 여행 이름을 알려주세요! </Title>
        <TextInput type="text" placeholder="추억 여행명을 입력하세요"></TextInput>
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
            <ImageText>대표 이미지를 업로드해주세요.</ImageText>
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
        <TextInput type="text" placeholder="모임 날짜를 입력하세요"></TextInput>
      </div>
      <Divider />
      <div>
        <Title>장소</Title>
        <TextInput type="text" placeholder="모임 장소를 입력하세요"></TextInput>
      </div>
      <Divider />
      <div>
        <Title>참가비</Title>
        <TextInput type="text" placeholder="모임 참가비를 입력하세요 "></TextInput>
      </div>
      <Divider />
      <div>
        <Title>추억 여행 소개</Title>
        <Description type="text" placeholder="내용을 입력하세요"></Description>
      </div>
    </Wrapper>
  );
};

export default Openmeeting;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.5rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 4.9rem;
  margin-bottom: 5.5rem;
`;
const Back = styled.img`
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
  width: 33.7rem;
  height: 14.8rem;
  padding: 1.6rem;
  margin-top: 0.8rem;
  margin-bottom: 5rem;

  color: ${theme.colors.gray09};
  border-radius: 1.6rem;
  border: solid 0.1rem ${theme.colors.gray05};
  outline: none;
  &::placeholder {
    ${theme.fonts.body2_regular};
    color: ${theme.colors.gray08};
  }
`;
