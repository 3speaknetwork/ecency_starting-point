import React from "react";
import styled from "styled-components";

export const SectionWrapper: React.FC = ({ children }) => {
  return <Section>{children}</Section>;
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
