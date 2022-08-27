import { useEffect, useState } from 'react';
import { CharacterSides } from '../../types/CharacterSides';
import * as C from './styles';

interface Props {
    x: number;
    y: number;
    side: CharacterSides;
    name: string;
    releaseExit?: () => void;
    playerPosition?: number[];
}

export const Character = ({ x, y, side, name, releaseExit, playerPosition }: Props) => {
    const [npcSide, setNpcSide] = useState(-30);
    const [npcBallon, setNpcBallon] = useState<string | null>();
    const [enabledClick, setEnabledClick] = useState(false);
    const [npcTitle, setNpcTitle] = useState('');

    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90,
        npc: npcSide
    }

    const talkArea = [
        '13,2',
        '13,3',
        '14,3'
    ];

    const handleLvlExit = () => {
        if (enabledClick && releaseExit) releaseExit();
    };

    const PlayerPosition = playerPosition?.toString();

    const handlePosition = () => {
        if (PlayerPosition && talkArea.includes(PlayerPosition)) {
            setNpcBallon('Click');
            setEnabledClick(true);
            setNpcTitle('Clique em mim');
            PlayerPosition === talkArea[1] ||
                PlayerPosition === talkArea[2]
                ? setNpcSide(0) : setNpcSide(-30);
        } else {
            setNpcBallon(null);
            setEnabledClick(false);
            setNpcTitle('Aproxime-se');
        }
    };

    useEffect(() => {
        handlePosition();
    }, [playerPosition]);

    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            sidePos={sides[side] ?? 0}
            onClick={handleLvlExit}
            title={npcTitle}
        >
            <C.Ballon id={name}>
                <div id="gomo1"></div>
                <div id="gomo2"></div>
                <div id="gomo3"></div>
                <div id="gomo4"></div>
                <span>{npcBallon ?? name}</span>
            </C.Ballon>
        </C.Container>
    );
}