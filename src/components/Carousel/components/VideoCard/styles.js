import styled from 'styled-components';

const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity 1s;
  transition: ease 1s;
  &:hover,
  &:focus {
    opacity: .8;
    transform: scale(1.02); 
    &:before{
      /* as aspas não transformam o codigo dinamico em string  */
      content: '${({ description }) => description || 'Esqueceram do titulo'}';
      background-color: ${({ backColor }) => backColor || 'red'};
      /* opacity: 0.9; */
      color: white;
      padding: 10px 20px;
      border-radius: 10px;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export default VideoCardContainer;
