import { FC, useState } from 'react';

import StyledDropdownBody from '@components/DropdownBody/styled';
import List from '@components/List';
import ResetButton from '@components/ResetButton';
import SubmitButton from '@components/SubmitButton';
import { filterList } from '@constants/filter.tsx';

type DropdownMenuProps = {
    onItemSelected: (text: string) => void;
    onReset: () => void;
    onClose: () => void;
};

const DropdownBody: FC<DropdownMenuProps> = ({ onItemSelected, onReset, onClose }) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const handleReset = () => {
        setSelectedItem(null);
        onReset();
    };

    const handleSubmit = () => {
        if (selectedItem !== null) {
            const selected = filterList.find((item) => item.id === selectedItem);
            if (selected) {
                onItemSelected(selected.title);
                onClose();
            }
        }
    };

    return (
        <StyledDropdownBody className="FT-dropdown-body">
            <List selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

            <div className="FT-dropdown__footer flex flex-column align-center">
                <SubmitButton onSubmit={handleSubmit} isActive={selectedItem} />

                {selectedItem && <ResetButton onReset={handleReset} className="mt-20" />}
            </div>
        </StyledDropdownBody>
    );
};

export default DropdownBody;
