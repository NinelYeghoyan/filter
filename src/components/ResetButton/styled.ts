import styled from 'styled-components';

const StyledResetButton = styled.button`
    border: none;
    padding: 0;
    background-color: transparent;

    font-size: ${({ theme }) => theme.typography.fontSize.p16};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    line-height: 20px;

    display: inline-block;
    direction: rtl;
    border-bottom: 1px solid ${(p) => p.theme.palette.gray200};
    color: ${(p) => p.theme.palette.gray200};
`;

export default StyledResetButton;
