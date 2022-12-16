import styled from "styled-components";

export const BannerStore = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  margin: 40px 10px 15px 0px;
  padding: 3px;
  width: 100%;

  @media (max-width: 385px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    margin-right: 0;
    overflow: auto;
  }
`;
export const BoxScroll = styled.div`
  @media (max-width: 480px) {
    overflow: auto;
    width: 100%;
  }
`;
