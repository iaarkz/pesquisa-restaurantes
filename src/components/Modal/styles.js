import styled from 'styled-components';

export const Overlay = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  backdrop-filter: blur(5px);
  background-color: rgba(78, 89, 131, 0.5);

  z-index: 999;
`;

export const Dialog = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  max-height: calc(100% - 144px);
  width: 500px;
`;
