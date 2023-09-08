import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import charImg from '../../images/serena.png';
import blinkSound from '../../sounds/blink.mp3';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

const audio = new Audio(blinkSound);

export function App() {
  const isMounted = useRef(true);
  const [quote, setQuote] = useState({
    speaker: 'Loading speaker...',
    quote: 'Loading Quote'
  });

  const onUpdate = async () => {
    const resQuote = await getQuote();

    if (isMounted.current) {
      setQuote(resQuote);
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate} />
      <CharImg alt="Serena(Pokemon X and Y) holding a pokeball" src={charImg} />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CharImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
