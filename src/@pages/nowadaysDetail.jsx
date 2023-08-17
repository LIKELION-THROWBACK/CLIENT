import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { nowadaysList } from "../dummy/nowadaysData";
import { theme } from "../style/theme";
const NowadaysDetail = () => {
  const { id } = useParams();
  const data = nowadaysList[id - 1];
  return (
    <Wrapper>
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
