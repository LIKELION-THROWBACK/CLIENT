import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { nowadaysList } from "../dummy/nowadaysData";
import { theme } from "../style/theme";
import { backIcon } from "../assets";
const NowadaysDetail = () => {
  const { id } = useParams();
  const data = nowadaysList[id - 1];
  return (
    <Wrapper>
      <Section>
        <BackClick>
          <img
            src={backIcon}
            onClick={() => {
              navigate(-1);
            }}
          />
        </BackClick>
      </Section>
      <Subtitle>{data.title}</Subtitle>
      <Title>{data.subtitle}</Title>
      <Image src={data.img} alt="컨텐츠 이미지" />
      <Content>{data.content}</Content>
    </Wrapper>
  );
};

export default NowadaysDetail;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
`;
const BackClick = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.55rem 0.84em 0.65rem 0.84rem;
`;
const Section = styled.div`
  margin-bottom: 3rem;
  margin-left: 0rem;
`;

const Subtitle = styled.h2`
  margin-bottom: 3.4rem;
  ${theme.fonts.body1_medium};
  color: ${theme.colors.gray07};
`;
const Title = styled.h1`
  ${theme.fonts.headline2_bold};
  margin-bottom: 1.6rem;
`;
const Image = styled.img`
  /* width: 31.4rem; */
  height: 26.8rem;
  border: none;
  border-radius: 0.6rem;
  margin-bottom: 2.4rem;
  object-fit: fill;
`;
const Content = styled.article`
  ${theme.fonts.body1_medium};
`;
