import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { theme } from "../style/theme";

const NowadaysSlider = (props) => {
  const { nowadaysList } = props;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    variableWidth: true,
  };
  return (
    <SliderWrapper>
      <SliderSection>
        <StyledSlider {...settings}>
          {nowadaysList?.map((item) => (
            <CardContainer image={item.img} key={item.id}>
              <CardTextBox>
                <CardTitle>{item.title}</CardTitle>
                <CardSubTitle>{item.subtitle}</CardSubTitle>
              </CardTextBox>
            </CardContainer>
          ))}
        </StyledSlider>
      </SliderSection>
    </SliderWrapper>
  );
};

export default NowadaysSlider;
const SliderWrapper = styled.div`
  /* width: 37.5rem; */
  overflow-x: hidden;
  overflow-y: hidden;
`;
const SliderSection = styled.div`
  /* width: 40rem; */
  /* margin-left: -1.8rem; */
`;
const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
    width: 30rem;
    margin-right: 1.8rem;
  }
`;
const CardContainer = styled.div`
  width: 25.4rem;
  height: 18.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid var(--gray-100, #f3f4f6);
  border-radius: 0.8rem;
  background-image: url(${(props) => props.image});
  background-size: 30rem 18.4rem;
  background-repeat: no-repeat;
  box-shadow: 0px 6px 16px 0px rgba(180, 188, 201, 0.12);
`;
const CardTextBox = styled.div`
  height: 5.4rem;
  /* height: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.6rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-top: 13rem;
  /* background-color: rgba(79, 83, 87, 0.5); */
  background-color: rgba(216, 26, 97, 0.8);
  border-radius: 0rem 0rem 0.8rem 0.8rem;
`;
const CardTitle = styled.div`
  ${theme.fonts.body2_bold};
  color: ${theme.colors.white};
`;
const CardSubTitle = styled.h2`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  ${theme.fonts.body2_regular};
  color: ${theme.colors.white};
`;
