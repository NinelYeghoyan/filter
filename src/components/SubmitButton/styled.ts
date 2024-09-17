import styled from 'styled-components';

const StyledSubmitButton = styled.button`
    border: none;
    padding: 0;

    width: 100%;
    height: 44px;
    direction: rtl;

    border-radius: ${(p) => p.theme.borderRadius.radius30};

    background-color: ${(p) => p.theme.palette.secondary};
    color: ${(p) => p.theme.palette.gray200};

    pointer-events: none;
    touch-action: none;

    &:hover {
        opacity: 0.9;
    }

    &.active {
        background-color: ${(p) => p.theme.palette.accent};
        color: ${(p) => p.theme.palette.white};

        cursor: pointer;
        pointer-events: initial;
        touch-action: auto;
    }
`;

export default StyledSubmitButton;
