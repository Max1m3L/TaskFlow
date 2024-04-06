import React from 'react';
import {UserEntity} from "../../types/entities";
import {Link} from "react-router-dom";

const StaffCard: React.FC<{user: UserEntity}> = ({user}) => {
    return (
        <Link to={`/users/${user.id}`}>
            <article className="flex gap-x-6 items-start bg-white rounded-[32px] py-5 px-8 w-[520px]">
                <img src={"/avatars/avatarfull.jpg"} alt={user.name} className="flex-shrink-0 w-32 h-32 object-cover"/>
                <div>
                    <h2 className="font-bold text-3xl">{user.name + " " + user.surname}</h2>
                    <p>Должность: {user.post}</p>
                    <p>Команда: {user.team}</p>
                    <p>{user.gmail}</p>
                </div>
            </article>
        </Link>
    );
};

export default StaffCard;