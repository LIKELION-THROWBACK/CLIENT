import React from "react";
import styled from "styled-components";
import { backIcon } from "../assets";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom";
import Footer from "../@components/Footer";
const Nowadays = () => {
  const navigate = useNavigate();
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
      <Container>
        <Text>
          식당에서는
          <br />
          키오스크로 주문하지~
        </Text>
      </Container>
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
`;
const HeaderTitle = styled.h1`
  ${theme.fonts.subhead2_semibold}
`;
const Container = styled.div`
  display: flex;
  align-items: flex-end;
  width: 32.7rem;
  height: 16.2rem;
  background-color: ${theme.colors.gray03};
  border: none;
  border-radius: 0.8rem;
`;
const Text = styled.div`
  width: 32.7rem;
  height: 6.4rem;
  padding: 0.8rem 2rem;
  background-color: rgba(216, 26, 97, 0.8);
  ${theme.fonts.body1_medium};
  color: ${theme.colors.white};
  border-radius: 0rem 0rem 0.8rem 0.8rem;
`;
