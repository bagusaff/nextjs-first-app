import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackToHome = styled.div`
  margin: 3rem 0 0;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

export const Heading2X1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

export const HeadingLg = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

export const HeadingMd = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`;
