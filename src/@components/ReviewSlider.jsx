import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { theme } from "../style/theme";
import { getDate, elapsedTime } from "../utils/date";

const ReviewSlider = (props) => {
  const { reviewList } = props;
  console.log(reviewList);
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
              <UserImage src={item.user.profile_image} alt="프로필 이미지" />
              <CardTextBox>
                <CardTitle>{item.title}</CardTitle>
                <Content>{item.description}</Content>
                <DateWrapper>
                  <Date>{getDate(item.travel.start_date)}</Date>
                  <DateBefore>{elapsedTime(item.created_at)}</DateBefore>
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
  /* width: 40rem;
  margin-left: -1.8rem; */
`;
const StyledSlider = styled(Slider)`
  .slick-slide {
    outline: none;
    width: 30rem;
    margin-right: 1.8rem;
  }
  .slick-slide div {
    display: flex !important;
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 25.4rem;
  height: 19.7rem;
  padding: 1.8rem 1.5rem 2.1rem 1.8rem;
  border: 1px solid var(--gray-100, #f3f4f6);
  border-radius: 0.8rem;
  cursor: pointer;
`;
const UserImage = styled.img`
  height: 4.3rem;
  width: 4.3rem;
  border: none;
  border-radius: 10rem;
`;
const CardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.8rem;
  margin-left: 1.6rem;
`;
const CardTitle = styled.div`
  margin-top: 0.7rem;
  margin-bottom: 1.2rem;
  ${theme.fonts.subhead2_medium};
`;
const Content = styled.h2`
  width: 20.8rem;
  height: 8rem;
  margin-bottom: 1.2rem;
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray08};

  overflow-y: hidden;
`;
const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20.8rem;
  height: 2rem;
  color: ${theme.colors.gray10};
`;
const Date = styled.h3`
  ${theme.fonts.body2_medium};
`;
const DateBefore = styled.h3`
  ${theme.fonts.body2_medium};
`;
