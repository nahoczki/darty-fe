import styled from "styled-components";

import Preloader from "../../components/preloader";

export default function Home() {
  const CenteredBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `;

  return (
    <main>
      <Preloader />
      <CenteredBlock>
        <h1>Super sick site</h1>
      </CenteredBlock>
    </main>
  );
}
