import React, {useEffect, useState} from 'react';

const MiniTask: React.FC<{ title: string; text: string; status: string; deadline: string }> = ({
                                                                                                   title,
                                                                                                   text,
                                                                                                   status,
                                                                                                   deadline
                                                                                               }) => {
    const [opened, setOpened] = useState(false);

    const handleTaskOpen = () => {
        setOpened(!opened);
    }

    useEffect(() => {
        if (opened) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [opened])

    return (
        <article className="p-6 bg-white border-2 border-[#C9C6C3] rounded-2xl max-w-80 flex-shrink-0 cursor-pointer"
                 onMouseDown={handleTaskOpen}>
            <h2 className="font-bold text-2xl pb-3">{title}</h2>
            <p className="text-sm pb-6">{text}</p>
            <div className="flex items-center justify-between">
                <p className="py-3 px-6 bg-[#EEEEEE] rounded-xl">{status}</p>
                <p className="py-3 px-6 bg-[#EEEEEE] rounded-xl">{deadline}</p>
            </div>
            {
                opened &&
                <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/[0.3]">
                    <div
                        className="cursor-default fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-white shadow-2xl rounded-[32px] border-2 border-[#C9C6C3]"
                        onMouseDown={(e) => {
                            e.stopPropagation()
                        }}>
                        <div className="relative flex items-start justify-between gap-x-32 p-12 pt-20 w-full">
                            <div className="absolute left-12 top-6 flex items-center gap-x-2">
                                <span className="w-2 h-2 rounded-full bg-[#FF0000]/[0.6] block"></span>
                                <span className="text-[#FF0000]/[0.6]">Высокий приоритет</span>
                            </div>
                            <svg className="cursor-pointer absolute right-6 top-6" onClick={() => {
                                setOpened(false)
                            }} width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.8164 0.00854492C16.7969 0.0163574 16.7266 0.0319824 16.6602 0.0476074C16.5703 0.0671387 15.5938 1.02026 12.6484 3.96558L8.75 7.86011L4.875 3.98511C1.9375 1.05151 0.96875 0.106201 0.878906 0.0866699C0.816406 0.0710449 0.738281 0.0515137 0.707031 0.0437012C0.601562 0.0124512 0.332031 0.11792 0.210938 0.239014C0.046875 0.403076 -0.0195312 0.637451 0.0390625 0.856201C0.078125 1.00854 0.484375 1.42651 3.95703 4.90308L7.83203 8.77808L3.95703 12.657C1.82812 14.7859 0.0664062 16.571 0.0429688 16.6179C0.0195312 16.6648 0 16.7976 0 16.9109C0 17.2898 0.238281 17.5281 0.617188 17.5281C0.730469 17.5281 0.863281 17.5085 0.910156 17.4851C0.957031 17.4617 2.74219 15.7 4.875 13.5671L8.75 9.69604L12.6289 13.5671C14.7578 15.7 16.543 17.4617 16.5898 17.4851C16.6367 17.5085 16.7695 17.5281 16.8867 17.5281C17.1328 17.5281 17.3164 17.4265 17.4336 17.2234C17.5195 17.075 17.5352 16.7703 17.4609 16.6257C17.4336 16.575 15.6719 14.7859 13.5391 12.6531L9.66797 8.77808L13.5391 4.89917C15.6719 2.77026 17.4336 0.985107 17.457 0.938232C17.5352 0.785889 17.5117 0.446045 17.4102 0.301514C17.2852 0.114014 16.9766 -0.0383301 16.8164 0.00854492Z"
                                    fill="#151515" fillOpacity="0.6"/>
                            </svg>
                            <div>
                                <h2 className="text-3xl font-bold pb-8">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                    id
                                    est laborum.</p>
                            </div>
                            <div className="flex-shrink-0">
                                <p className="text-[#636363] text-lg font-light">#12983443</p>
                                <p className="text-[#636363] text-lg font-light mb-2">Новая функциональность</p>
                                <p className={"font-semibold text-xl mb-6"}>Срок до: 21.04.2024</p>
                                <p className={"font-semibold text-lg"}>Сотрудники:</p>
                                <ul>
                                    <li className="flex items-center gap-x-2 mt-4"><img src="/avatars/normis.png"
                                                                                        alt="Avatar"
                                                                                        className="w-6 h-6 object-cover rounded-full"/>
                                        John Doe
                                    </li>
                                    <li className="flex items-center gap-x-2 mt-4"><img src="/avatars/normis.png"
                                                                                        alt="Avatar"
                                                                                        className="w-6 h-6 object-cover rounded-full"/>
                                        Jane Doe
                                    </li>
                                    <li className="flex items-center gap-x-2 mt-4"><img src="/avatars/normis.png"
                                                                                        alt="Avatar"
                                                                                        className="w-6 h-6 object-cover rounded-full"/>
                                        John Smith
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </article>
    );
};

export default MiniTask;