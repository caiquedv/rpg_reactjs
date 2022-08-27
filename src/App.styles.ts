import styled from "styled-components";

export const Container = styled.div`
    background-color: #24282F;
    color: #fff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Map = styled.div`
    width: 480px;
    height: 480px;
    background-image: url('/assets/map.png');
    background-position: left top;
    background-size: 100%;
    position: relative;
`;

export const ExitLvl1 = styled.div`
    position: absolute;
    bottom: 100px;
    left: 39%;
    width: 106px;
    height: 23px;
    background-image: url('assets/exit_lvl-1.png');
    background-size: 100%;
    background-position:center;
`;

export const Missions = styled.div`
    position: absolute;
    z-index: 1;
    left: 15%;
    top: 10px;
    background-color: #aaa;
    color: #333;
    border-radius: 10px;
    padding: 0 5px;
    cursor: pointer;
    text-align: center;

    &:hover {
        opacity: .9;
    }
`;

export const TalkArea = styled.div`
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    z-index: 1;
    background-color: #333;
    border-radius: 10px;

    hr {
        border: 0;
        background-color: #8808;
        height: 5px;
    }

    span {
        position: absolute;
        right: 5px;
        top: 0;
        cursor: pointer;
        color: #F00;

        &:hover {
            opacity: .9;
        }
    }

    .talk {
        position: absolute;
        color: #FFF;
        top: 5px;
        left: 5px;
        right: 5px;
        font-size: 12px;
        line-height: 22px;
    }
`;

export const NameArea = styled.form`
    width: 480px;
    height: 480px;
    background-color: #24282F;
    color: #fff;
    display: flex;
    justify-content: center;
    place-items: center;

    label {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;

        input {
            text-align: center;
            
            &:focus {
                outline: 0;
            }
        }

        button {
            margin-top: 5px;
            background-color: darkblue;
            border: 0;
            color: #FFF;
            padding: 5px 10px;
            cursor: pointer;

            &:hover {
                opacity: .9;
            }
        }
    }
`;

export const TalkImage = styled.img.attrs(props => ({
    src: `assets/talk_${props.alt === 'spriteLeft' ? 'left' : 'right'}-char.png`
}))`
    height: 60px;
    float: ${props => props.alt === 'spriteLeft' ? 'left' : 'right'};
    margin-right: 5px;
`;