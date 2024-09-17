import { FC } from 'react';

import IconCheck from '@assets/icons/Check';
import StyledList from '@components/List/styled';
import { filterList } from '@constants/filter';

type ListProps = {
    selectedItem: number | null;
    setSelectedItem: (selectedItem: number | null) => void;
};

const List: FC<ListProps> = ({ selectedItem, setSelectedItem }) => {
    const handleItemClick = (id: number) => {
        setSelectedItem(id);
    };

    return (
        <StyledList className="FT-list">
            {filterList.map((item) => {
                const isSelected = selectedItem === item.id;

                return (
                    <li
                        key={item.id}
                        className="flex align-center cursor-pointer"
                        onClick={() => handleItemClick(item.id)}
                        onKeyDown={() => handleItemClick(item.id)}
                    >
                        <span className="FT-list__title">{item.title}</span>

                        {isSelected && (
                            <div className="FT-list__icon flex-center">
                                <IconCheck />
                            </div>
                        )}
                    </li>
                );
            })}
        </StyledList>
    );
};

export default List;
