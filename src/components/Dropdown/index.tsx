import { FC, ReactNode } from 'react';

import StyledDropdown from './styled';

type DropdownPropsType = {
    component: ReactNode;
    $isSecondary?: boolean;
    className?: string;
};

const Dropdown: FC<DropdownPropsType> = ({ component, $isSecondary = false, className }) => {
    return (
        <StyledDropdown
            $isSecondary={$isSecondary}
            className={`FT-dropdown ${className}`}
            onClick={(e) => e.stopPropagation()}
        >
            {component}
        </StyledDropdown>
    );
};

export default Dropdown;
