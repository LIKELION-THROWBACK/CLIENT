import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
const Layout = (props) => {
  const { children, noFooter } = props;
  return (
    <LayoutWrapper>
      <ContentWrapper>
        {children}
        {!noFooter && <Footer />}
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 37.5rem;
`;
