import React from 'react';

const StaffCard: React.FC<{img: string; name: string; post: string; role: string; team: string}> = ({img, name, post, role, team}) => {
    return (
        <article className="flex gap-x-6 items-start bg-white rounded-[32px] py-5 px-8">
            <img src={img} alt={name} className="flex-shrink-0 w-32 h-32 object-cover"/>
            <div>
                <h2 className="font-bold text-3xl">{name}</h2>
                <p>Должность: {post}</p>
                <p>Роль: {role}</p>
                <p>Команда: {team}</p>
            </div>
        </article>
    );
};

export default StaffCard;