import { FC } from 'react';

import StyledSubmitButton from '@components/SubmitButton/styled';

type SubmitButtonProps = {
    onSubmit: () => void;
    isActive?: number | null;
};

const SubmitButton: FC<SubmitButtonProps> = ({ onSubmit, isActive }) => {
    return (
        <StyledSubmitButton className={`FT-submit-button ${isActive ? 'active' : ''}`} type="button" onClick={onSubmit}>
            הצגת בקשות
        </StyledSubmitButton>
    );
};

export default SubmitButton;
