import styled from "styled-components";

export const Container = styled.div<{ size: number, left: number, top: number, sidePos: number }>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: relative;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('./assets/char.png');
    background-position: 0px ${props => props.sidePos}px;
    cursor: ${props => props.left === (14 * 30) && props.top === 30 ? 'pointer': ''};
`;

export const Ballon = styled.div<{id: string}>`
    position: relative; 
    top: -25px;
    left: 5px;

    #gomo1, #gomo2, #gomo3, #gomo4 {
        position: absolute; 
        width: 25px; 
        height: 15px; 
        background: #eee; 
        border-radius: 50%;
    }

    #gomo1 { 
        top: 0px;
        left: -10px;
    }
    #gomo2 { 
        top: -5px;
    }
    #gomo3 { 
        top: 5px;
    }
    #gomo4 { 
        top: 0px;
        right: -7px;
    }

    span {
        position: absolute;
        top: -4px;
        left: ${props => props.id?.length < 3 ? '6px' : ''};
        left: ${props => props.id?.length > 4 ? '-7px' : ''};
        font-size: 14px;
        color: #333;
    }
`;