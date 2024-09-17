import { FC } from 'react';

import StyledResetButton from '@components/ResetButton/styled';

type ResetButtonProps = {
    onReset: () => void;
    className?: string;
};

const ResetButton: FC<ResetButtonProps> = ({ onReset, className }) => {
    return (
        <StyledResetButton className={`FT-reset-button ${className} cursor-pointer`} type="button" onClick={onReset}>
            ניקוי בחירה
        </StyledResetButton>
    );
};

export default ResetButton;
