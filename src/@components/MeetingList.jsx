import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { theme } from "../style/theme";
import { backIcon, manyUserIcon } from "../assets";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSearch } from "../api/getSearch";
const MeetingList = (props) => {
  const navigate = useNavigate();
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");
  const { meetingList } = props;
  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  async function fetchSearch() {
    const result = await getSearch(search);
    setSearchList(result);
  }
  useEffect(() => {
    fetchSearch();
  }, [search]);

  return (
    <ListWrapper>
      <SearchSection>
        <BackClick>
          <img
            src={backIcon}
            onClick={() => {
              navigate(-1);
            }}
          />
        </BackClick>
        <SearchContainer>
          <TextInput type="text" placeholder="검색하기" onChange={(e) => handleSearchInput(e)}></TextInput>
        </SearchContainer>
      </SearchSection>
      {searchList ? (
        <ListSection>
          {searchList?.map((item) => (
            <CardContainer
              key={item.id}
              onClick={() => {
                navigate(`meetdetail/${item.id}`);
              }}>
              <CardImage src={item.image} alt="추억 여행 이미지" />
              <CardTextBox>
                <CardTitle>
                  <Title>{item.name}</Title>
                </CardTitle>

                <CardDate>
                  {item.start_date} - {item.end_date}
                </CardDate>
                <UserPeople>
                  <CardUser>
                    <UserImg src={item.host_profile_image} alt="호스트 프로필" />

                    <span>{item.host}</span>
                  </CardUser>
                  <People>
                    <img src={manyUserIcon} alt="여러명 아이콘" />
                    <span>
                      {item.current_member}/{item.max_participation}
                    </span>
                  </People>
                </UserPeople>
              </CardTextBox>
            </CardContainer>
          ))}
        </ListSection>
      ) : (
        <ListSection>
          {meetingList?.map((item) => (
            <CardContainer
              key={item.id}
              onClick={() => {
                navigate(`meetdetail/${item.id}`);
              }}>
              <CardImage src={item.image} alt="추억 여행 이미지" />
              <CardTextBox>
                <CardTitle>
                  <Title>{item.name}</Title>
                </CardTitle>

                <CardDate>
                  {item.start_date} - {item.end_date}
                </CardDate>
                <UserPeople>
                  <CardUser>
                    <UserImg src={item.host_profile_image} alt="호스트 프로필" />

                    <span>{item.host}</span>
                  </CardUser>
                  <People>
                    <img src={manyUserIcon} alt="여러명 아이콘" />
                    <span>
                      {item.current_member}/{item.max_participation}
                    </span>
                  </People>
                </UserPeople>
              </CardTextBox>
            </CardContainer>
          ))}
        </ListSection>
      )}
    </ListWrapper>
  );
};

export default MeetingList;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  height: 4.9rem;
  margin-bottom: 3.5rem;
  margin-top: 2.5rem;
`;
const BackClick = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.55rem 0.84em 0.65rem 0.84rem;
  margin-right: 1.6rem;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  width: 20rem;
  margin-right: 1rem;
`;
const TextInput = styled.input`
  width: 28rem;
  height: 4rem;
  padding: 1.6rem;
  color: ${theme.colors.gray09};
  border-radius: 1.6rem;
  border: solid 0.1rem ${theme.colors.gray05};
  outline: none;
  &::placeholder {
    ${theme.fonts.body2_regular};
    color: ${theme.colors.gray08};
  }
  display: flex;
  justify-content: space-evenly;
`;
const ListSection = styled.div`
  width: 34rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: flex;

  width: 32rem;
  height: 16rem;
  padding: 1.6rem;
  border: 1px solid var(--gray-100, #f3f4f6);
  border-radius: 0.8rem;
  background-color: ${theme.colors.gray01};
  box-shadow: 0px 6px 16px 0px rgba(180, 188, 201, 0.12);
  cursor: pointer;
  margin-bottom: 1.6rem;
`;
const CardImage = styled.img`
  width: 11.2rem;
  height: 11.6rem;
  border: none;
  border-radius: 0.8rem;
  background-color: ${theme.colors.gray03};
`;
const CardTextBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 16.2rem;
  height: 9.6rem;
  margin-left: 1.6rem;
`;
const CardTitle = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`;
const Title = styled.h1`
  ${theme.fonts.subhead2_semibold};
`;
const People = styled.div`
  display: flex;
  & > img {
    width: 2.4rem;
    height: 2.4rem;
  }
  & > span {
    ${theme.fonts.body2_medium};
  }
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${theme.fonts.body2_regular};
`;
const CardDate = styled.div`
  display: flex;
  ${theme.fonts.body3_medium};
  margin-top: 0.3rem;
`;

const UserPeople = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.6rem;
  align-items: center;
`;
const UserImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 3rem;
  background-color: ${theme.colors.gray03};
  margin: 0.8rem;
`;
