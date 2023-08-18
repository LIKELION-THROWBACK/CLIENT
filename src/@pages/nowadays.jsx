import React from "react";
import styled from "styled-components";
import { backIcon } from "../assets";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom";
import Footer from "../@components/Footer";
import { nowadaysList } from "../dummy/nowadaysData";
const Nowadays = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/nowadaysDetail/${id}`);
  };
  return (
    <Wrapper>
      <Header>
        <Back
          src={backIcon}
          onClick={() => {
            navigate(-1);
          }}
        />
        <HeaderTitle>요즘엔 이래요!</HeaderTitle>
      </Header>
      {nowadaysList.map((item) => (
        <CardContainer image={item.img} key={item.id} onClick={() => handleClick(item.id)}>
          {/* <Image src={item.img} alt="아티클 이미지" /> */}
          <CardTextBox>
            <CardTitle>{item.title}</CardTitle>
            <CardSubTitle>{item.subtitle}</CardSubTitle>
          </CardTextBox>
        </CardContainer>
      ))}
      <Footer />
    </Wrapper>
  );
};

export default Nowadays;
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
  margin-bottom: 2.4rem;
`;
const Back = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.55rem 0.84em 0.65rem 0.84rem;
  margin-right: 8.4rem;
  cursor: pointer;
`;
const HeaderTitle = styled.h1`
  ${theme.fonts.subhead2_semibold}
`;
const CardContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 32.7rem;
  height: 16.2rem;
  background-image: url(${(props) => props.image});
  background-size: 32.7rem 16.2rem;
  object-fit: fill;
  border: none;
  border-radius: 0.8rem;
  margin-bottom: 2.4rem;
`;
const Image = styled.img`
  position: fixed;

  width: 32.7rem;
  height: 16.2rem;
  border: none;
  border-radius: 0.8rem;
`;
const CardTextBox = styled.div`
  display: relative;
  width: 32.7rem;
  height: 6.4rem;
  padding: 0.8rem 2rem;
  background-color: rgba(216, 26, 97, 0.8);
  ${theme.fonts.body1_medium};
  color: ${theme.colors.white};
  border-radius: 0rem 0rem 0.8rem 0.8rem;
  cursor: pointer;
`;
const CardTitle = styled.div`
  ${theme.fonts.body1_medium};
  color: ${theme.colors.white};
`;
const CardSubTitle = styled.h2`
  width: 100%;
  height: 2rem;
  overflow-x: hidden;
  overflow-y: hidden;
  ${theme.fonts.body2_regular};
  color: ${theme.colors.white};
`;
