import styled from 'styled-components';

const StyledList = styled.ul`
    > li {
        height: 24px;
        position: relative;
        direction: rtl;

        margin-bottom: 20px;
        padding-right: 28px;
        color: ${(p) => p.theme.palette.primary};
    }

    .FT-list__icon {
        width: 24px;
        height: 24px;
        position: absolute;
        right: 0;
    }

    .FT-list__title {
        font-size: ${({ theme }) => theme.typography.fontSize.p16};
        font-weight: ${({ theme }) => theme.typography.weight.medium};
        line-height: 20px;
    }
`;

export default StyledList;
