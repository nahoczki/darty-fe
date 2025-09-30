import styled from "styled-components";
import bat from "../../assets/bat.svg";

const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  height: 100%;
  font-family: "Spooky-Font";

  padding: 20px 0;
  border-top: 1px solid red;
  border-bottom: 1px solid red;
`;

const TimeSpan = styled.span`
  font-size: 15px;
`;

const OuterDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
`;

const BackgroundDiv = styled.div`
  position: relative;
  & > span {
    z-index: 1000;
    position: relative;
  }
  & > img {
    position: absolute;
    left: -75%;
    top: -50%;
    z-index: 1;
    color: orange;
  }
`;

const HorizontalDate = () => {
  return (
    <DateWrapper>
      <OuterDiv>
        <span>October</span>
      </OuterDiv>
      <BackgroundDiv>
        <span>31st</span>
        <img src={bat} width={150} />
      </BackgroundDiv>
      <OuterDiv>
        <TimeSpan>x:xx - x:xx pm</TimeSpan>
      </OuterDiv>
    </DateWrapper>
  );
};

export default HorizontalDate;
