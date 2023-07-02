import styled from 'styled-components';
import { BtnFill } from '../Btn.styled/Btn.style';

const BtnArea = () => {
  return (
    <BtnSection>
      <BtnFill>글 작성</BtnFill>
      <BtnFill>내 정보 수정</BtnFill>
    </BtnSection>
  );
};
export default BtnArea;

const BtnSection = styled.section`
  //   position: fixed;

  //   top: 230px;
  //   right: 0px;
  width: 300px;
  height: calc(100vh - 230px);
  background-color: #61dafb;
  flex-basis: 300px;
  flex-grow: 1;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
`;