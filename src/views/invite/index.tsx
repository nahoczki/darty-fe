import styled from "styled-components";
import HorizontalDate from "../../components/HorizontalDate";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  border: 1px solid white;
  flex-direction: column;
  background-image: url("/spider-bg.png");
  background-size: cover;
  background-color: #2e1c2b;
`;

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 5em;
`;

const Title = styled.span`
  font-size: 50px;
  font-family: "Spooky-Font";
  text-align: center;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.span``;

export default function Invite() {
  return (
    <MainWrapper>
      <Wrapper>
        <Section>
          <SubTitle>You're invite to</SubTitle>
          <Title>A Nightmare on Camden</Title>
          <SubTitle>Hosted by: Luke & Zoli</SubTitle>
        </Section>
        <Section>
          <HorizontalDate />
        </Section>
        <Section>
          <span>3900 Grapevine Mills Pkwy</span>
          <span>Apt 423</span>
          <span>Grapevine Mills, Grapevine, TX</span>
        </Section>
      </Wrapper>
    </MainWrapper>
  );
}
