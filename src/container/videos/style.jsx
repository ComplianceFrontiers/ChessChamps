/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const VideosWrapper = styled.div`
  background: #fafafa;
  padding: 60px 0;
`;

export const VideoCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const VideoTitle = styled.h5`
  padding: 10px 0;
  font-weight: 600;
  color: #333;
`;

export const VideoWrapper = styled.div`
  iframe {
    width: 100%;
    height: 250px;
    border: none;
    border-radius: 10px;
  }
`;
