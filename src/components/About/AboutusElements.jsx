import styled from "styled-components";

export const AboutusContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#222222" : "#1a1a1a")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutusWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutusRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  grid-template-areas: ${({ imgStart }) =>
    imgStart
      ? `'col2 
    col1'`
      : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStartM }) =>
      imgStartM
        ? `'col2' 
        'col1'`
        : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #5e4cd6;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
    
    font-size: 46px;
    line-height: 1.1;
    font-weight: 600;
    color ${({ lightText }) => (lightText ? "#f7f8ga" : "#010606")};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`;

export const Subtitle = styled.p`
  font-size: 26px;
  max-width: 540px;
  margin-bottom: 35px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 1000px) {
    font-size: 24px;

    width: fit-content;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
