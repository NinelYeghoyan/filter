import { FC, useEffect, useRef, useState } from 'react';

import IconArrow from '@assets/icons/Arrow';
import Dropdown from '@components/Dropdown';
import DropdownBody from '@components/DropdownBody';
import StyledFilter from '@components/Filter/styled';

const Filter: FC = () => {
    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
    const [selectedText, setSelectedText] = useState('סטטוס בקשה');
    const filterRef = useRef<HTMLDivElement>(null);

    const handleToggleDropdown = () => {
        setIsOpenDropdown((prevState) => !prevState);
    };

    const handleTextUpdate = (text: string) => {
        setSelectedText(text);
    };

    const handleResetText = () => {
        setSelectedText('סטטוס בקשה');
    };

    const handleCloseDropdown = () => {
        setIsOpenDropdown(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
            setIsOpenDropdown(false);
        }
    };

    useEffect(() => {
        if (isOpenDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpenDropdown]);

    return (
        <StyledFilter ref={filterRef} className="FT-filter relative">
            <div
                role="button"
                tabIndex={0}
                className="FT-filter__content flex-center cursor-pointer"
                onClick={handleToggleDropdown}
                onKeyDown={handleToggleDropdown}
            >
                <span className="FT-filter__text">{selectedText}</span>

                <div className={`${isOpenDropdown ? 'open' : ''} FT-filter__icon flex-center`}>
                    <IconArrow />
                </div>
            </div>

            <Dropdown
                component={
                    <DropdownBody
                        onItemSelected={handleTextUpdate}
                        onReset={handleResetText}
                        onClose={handleCloseDropdown}
                    />
                }
                className={isOpenDropdown ? 'open' : ''}
            />
        </StyledFilter>
    );
};

export default Filter;
