import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { theme } from "../style/theme";

const ReviewSlider = (props) => {
  const { reviewList } = props;
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
          {reviewList?.map((item) => (
            <CardContainer key={item.id}>
              <UserImage />
              <CardTextBox>
                <CardTitle>{item.title}</CardTitle>
                <Content>{item.review}</Content>
                <DateWrapper>
                  <Date>{item.date}</Date>
                  <DateBefore>{item.before}</DateBefore>
                </DateWrapper>
              </CardTextBox>
            </CardContainer>
          ))}
        </StyledSlider>
      </SliderSection>
    </SliderWrapper>
  );
};

export default ReviewSlider;
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
  display: flex;
  flex-direction: row;
  width: 25.4rem;
  height: 18.4rem;
  padding: 1.8rem;
  border: 1px solid var(--gray-100, #f3f4f6);
  border-radius: 0.8rem;
`;
const UserImage = styled.div`
  width: 4.3rem;
  height: 4.3rem;
  background-color: ${theme.colors.gray06};
  border: none;
  border-radius: 10rem;
`;
const CardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
`;
const CardTitle = styled.div`
  ${theme.fonts.subhead2_medium};
`;
const Content = styled.h2`
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray08};
`;
const DateWrapper = styled.div`
  display: flex;
`;
const Date = styled.h3`
  ${theme.fonts.body2_medium};
`;
const DateBefore = styled.h3`
  ${theme.fonts.body2_medium};
`;
