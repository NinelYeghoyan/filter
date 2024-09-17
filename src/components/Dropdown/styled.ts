import styled from 'styled-components';

const StyledDropdown = styled.div<{ $isSecondary: boolean }>`
    min-width: 206px;
    position: absolute;
    top: 56px;
    left: ${(props) => (props.$isSecondary ? 'initial' : '0')};
    right: ${(props) => (props.$isSecondary ? '0' : 'initial')};

    z-index: ${(p) => p.theme.zIndex.index8};

    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;

    border: 1px solid ${(p) => p.theme.palette.borderColor};
    border-radius: ${(p) => p.theme.borderRadius.radius6};
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: ${(p) => p.theme.palette.white};

    padding: 20px 12px;
`;

export default StyledDropdown;
