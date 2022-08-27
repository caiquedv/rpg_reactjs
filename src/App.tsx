import { FormEvent, useEffect, useState } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character/Character';
import { mapSpots } from './data/mapSpots';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const [playerName, setPlayerName] = useState('');

  const char = useCharacter(playerName ? playerName : 'Player');
  const npc1 = useCharacter('Zyro');


  const [lockedLvl, setLockedLvl] = useState(true);
  const [missionsOpen, setMissionsOpen] = useState(false);
  const [talkModal, setTalkModal] = useState(false);
  const [talkCounter, setTalkCounter] = useState(0);
  const [level, setLevel] = useState(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    setMissionsOpen(false);

    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()
        break;
    }
  };

  const handleLock = () => {
    setTalkCounter(talkCounter + 1);

    if (talkCounter === 1) {
      setLockedLvl(false);
      mapSpots[12][6] = 1;
      mapSpots[12][7] = 1;
      mapSpots[12][8] = 1;
      mapSpots[12][9] = 1;
      setTalkModal(false);
      setTalkCounter(0);
    }
  };

  const handleNameSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    playerName.length > 6 ? alert('Máximo de 6 caracters') : setLevel(level + 1);    
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <C.Container>
      {level === 0 &&
        <C.NameArea onSubmit={handleNameSubmit}>
          <label>
            <h2>Bem Vindo ao "Fuga para a padoca"!</h2>
            Você pode escolher até 6 caracteres ou apenas começar.
            <input type="text" value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <button>Começar!</button>
          </label>
        </C.NameArea>
      }

      {level === 1 &&
        <C.Map>
          <C.Missions onClick={() => setMissionsOpen(!missionsOpen)}>
            Missões <br />
            {missionsOpen &&
              <>Peça Ajuda à "Zyro" para encontrar a saída.</>
            }
          </C.Missions>

          <Character x={char.x} y={char.y} side={char.side} name={char.name} />
          <Character x={14} y={1} side={'npc'} name={npc1.name}
            playerPosition={[char.x, char.y]} releaseExit={() => setTalkModal(!talkModal)}
          />

          {lockedLvl &&
            <C.ExitLvl1 />
          }

          {talkModal &&
            <C.TalkArea>
              <div className='talk'>
                <C.TalkImage alt={talkCounter === 0 ? 'spriteLeft' : 'spriteRight'} />

                {talkCounter === 0 &&
                  <>
                    E aí, parsa? Beleza? Tem como liberar a saída? To querendo ir na padoca
                    comer um pão com mortadela.
                  </>
                }

                {talkCounter === 1 &&
                  <>
                    Beleza, irmão? Da hora em, se lembrar traz um pra mim! Vai indo lá que o
                    portão é eletrônico, até você chegar já abri!
                  </>
                }
              </div>

              <span onClick={handleLock}>X</span>
              <hr /><hr /><br /><hr /><hr />
            </C.TalkArea>
          }
        </C.Map>
      }
    </C.Container>
  );
};

export default App;