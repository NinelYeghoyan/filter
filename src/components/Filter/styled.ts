import styled from 'styled-components';

const StyledFilter = styled.div`
    margin: 94px 80px;

    .FT-filter__content {
        width: 180px;
        height: 44px;
        direction: rtl;

        border-radius: ${(p) => p.theme.borderRadius.radius30};
        border: 1px solid ${(p) => p.theme.palette.borderColor};

        background-color: ${(p) => p.theme.palette.white};
        color: ${(p) => p.theme.palette.primary};
    }

    .FT-filter__icon {
        width: 24px;
        height: 24px;
        transform: rotate(0deg);

        > svg {
            transition: all 0.3s ease;
        }
    }

    .FT-filter__text {
        font-size: ${({ theme }) => theme.typography.fontSize.p16};
        font-weight: ${({ theme }) => theme.typography.weight.medium};
        line-height: 20px;

        margin-left: 8px;
    }

    .open {
        &.FT-filter__icon {
            > svg {
                transform: rotate(-180deg);
                transform-origin: 50% 52%;
            }
        }

        &.FT-dropdown {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export default StyledFilter;
