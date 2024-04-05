import React, {MouseEventHandler} from 'react';

const CustomerFilter: React.FC<{opened: boolean; setOpened: MouseEventHandler<HTMLLIElement>}> = ({ opened, setOpened }) => {
    return (
        <li className="cursor-pointer relative" onClick={setOpened}>Заказчик: Все
            {
                opened &&
                <div className="absolute w-40 h-12 bg-white top-8 border-2 border-[#C9C6C3] rounded-xl" onClick={(e) => {e.stopPropagation()}}></div>
            }
        </li>
    );
};

export default CustomerFilter;