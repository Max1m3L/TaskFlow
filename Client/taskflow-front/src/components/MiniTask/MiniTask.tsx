import React, {useEffect, useState} from 'react';
import {TaskEntity} from "../../types/entities";
import {calculateEndDate} from "../../api/deadline";
import {TaskRowType} from "../../types/tasks";

const MiniTask: React.FC<{ task: TaskEntity }> = ({task}) => {
    const [opened, setOpened] = useState(false);

    const timeToAdd = Math.ceil((Number(task.sp_test) + Number(task.sp_analysis) + Number(task.sp_analysis) + Number(task.sp_release)) / 8);
    const deadline = calculateEndDate((task.startdate ? new Date(task.startdate.split(' ')[0]).getTime() : Date.now()), timeToAdd).toLocaleDateString();

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

    let priorityTextColor;
    let priorityDecorationColor;
    if (task.priority === "Высокий") {
        priorityTextColor = "text-[#FF0000]"
        priorityDecorationColor = "bg-[#FF0000]"
    } else if (task.priority === "Средний") {
        priorityTextColor = "text-[#FFB800]"
        priorityDecorationColor = "bg-[#FFB800]"
    } else if (task.priority === "Низкий") {
        priorityTextColor = "text-[#00B807]"
        priorityDecorationColor = "bg-[#00B807]"
    }

    let statusBgColor;
    if (task.status_ === "Анализ") {
        statusBgColor = "bg-accent"
    } else if (task.status_ === "Разработка") {
        statusBgColor = "bg-[#FF0000]"
    } else if (task.status_ === "Новая") {
        statusBgColor = "bg-[#8200E8]"
    } else if (task.status_ === "Тестирование") {
        statusBgColor = "bg-[#FFB800]"
    } else if (task.status_ === "Релиз") {
        statusBgColor = "bg-[#00B807]"
    }

    let icon;
    if (task.condition_ === TaskRowType.INPROGRESS) {
        icon = <svg width="20" height="32" viewBox="0 0 46 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.414 1.29145C17.2226 5.08637 13.2691 9.91216 11.1621 13.7864C10.8562 14.3641 10.5617 14.8399 10.5051 14.8399C10.4598 14.8399 9.92733 14.4661 9.32694 14.0243L8.23944 13.1973L7.4578 14.0469C4.5578 17.1735 1.86171 22.6223 0.796862 27.4821C0.105847 30.6426 -0.188684 34.9247 0.105847 37.4961C1.31796 48.0766 9.3496 56.3688 19.8168 57.8188C21.4594 58.0567 24.5293 58.0567 26.1945 57.8301C34.8039 56.6407 42.0879 50.5801 44.8406 42.3106C45.7582 39.5465 46.0527 37.3489 45.9621 33.9278C45.8262 28.7282 44.6707 24.1856 42.3258 19.6543C41.091 17.2415 39.2558 14.6133 38.0324 13.4918L37.7379 13.22L36.6617 14.0356C36.0613 14.4774 35.5402 14.8399 35.4949 14.8399C35.4383 14.8399 35.1551 14.3641 34.8379 13.7864C33.7051 11.6907 31.632 8.79067 29.5816 6.40043C27.5086 3.98754 23.3851 4.36783e-05 22.9887 4.36783e-05C22.898 4.36783e-05 22.1957 0.577778 21.414 1.29145ZM24.7898 21.0704C31.2469 21.886 36.4691 26.7797 37.7379 33.2481C37.9758 34.4375 37.9531 37.6547 37.6926 38.8215C37.0355 41.9028 35.7215 44.293 33.4898 46.5133C30.5332 49.4473 27.1234 50.8633 22.9773 50.8633C18.8992 50.8633 15.4328 49.4247 12.5101 46.5133C10.2898 44.3043 8.96444 41.8688 8.30741 38.8215C8.02421 37.5075 8.02421 34.3016 8.31874 32.9649C9.98397 25.2958 17.1547 20.1188 24.7898 21.0704Z"
                fill="#FF0000"/>
            <path
                d="M21.8671 24.2989C21.7765 24.3216 21.3234 24.4009 20.8589 24.4688C17.098 25.0919 13.6429 27.8899 12.1816 31.5263C9.88197 37.2243 12.3515 43.704 17.8456 46.3888C19.7714 47.329 20.6097 47.5103 22.9999 47.5103C25.3902 47.5103 26.2285 47.329 28.1542 46.3888C31.53 44.7349 33.8636 41.631 34.5093 37.904C34.7472 36.6013 34.6679 34.4376 34.3394 33.1349C33.2746 28.8075 29.8195 25.4657 25.4355 24.5142C24.6992 24.3556 22.2523 24.197 21.8671 24.2989ZM24.6992 32.5118V34.3243H27.8144H30.9296V35.9669V37.6095H26.1152H21.3007V34.1544V30.6993H22.9999H24.6992V32.5118Z"
                fill="#FF0000"/>
        </svg>
    } else if (task.condition_ === TaskRowType.QUEUED) {
        icon = <svg width="20" height="32" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.60002 1.59998C0.600015 3.59998 0.300015 24.9 2.20002 26.8C2.90002 27.5 5.80001 28 8.70001 28H14V33.3C14 36.2 14.5 39.1 15.2 39.8C15.9 40.5 18.3 41 20.7 41H25V45.5C25 51.4 26.4 52 39.4 52C53.2 52 53 52.2 53 37.6C53 30.2 52.6 26 51.8 25.2C51.1 24.5 48.7 24 46.3 24H42V19.7C42 17.3 41.5 14.9 40.8 14.2C40.1 13.5 37.2 13 34.3 13H29V7.49998C29 0.499978 28.1 -1.90854e-05 14.6 -1.90854e-05C6.40001 -1.90854e-05 3.80002 0.299978 2.60002 1.59998ZM25 8.99998V13H20.7C15.3 13 14 14.3 14 19.7V24H10H6.00001V14.5V4.99998H15.5H25V8.99998ZM37 20.5V24H32.2C29.6 24 26.9 24.5 26.2 25.2C25.5 25.9 25 28.6 25 31.2V36H21.5H18V26.5V17H27.5H37V20.5ZM48 37.5V47H38.5H29V37.5V28H38.5H48V37.5Z" fill="#4C7EFF"/>
            <path d="M8.5002 7C7.2002 9.1 9.3002 10 15.6002 10C21.3002 10 22.0002 9.8 22.0002 8C22.0002 6.2 21.3002 6 15.6002 6C12.0002 6 8.8002 6.4 8.5002 7Z" fill="#4C7EFF"/>
            <path d="M21.3998 19.5C20.2998 22.2 22.3998 23.1 28.5998 22.8C33.6998 22.5 34.4998 22.2 34.4998 20.5C34.4998 18.7 33.6998 18.5 28.1998 18.2C23.1998 18 21.8998 18.2 21.3998 19.5Z" fill="#4C7EFF"/>
            <path d="M32.3998 30.5C31.3998 33.1 32.9998 34 38.9998 34C43.3998 34 44.8998 33.6 45.3998 32.4C46.3998 29.7 45.0998 29 38.8998 29C34.5998 29 32.7998 29.4 32.3998 30.5Z" fill="#4C7EFF"/>
        </svg>
    } else if (task.condition_ === TaskRowType.COMPLETED) {
        icon = <svg width="20" height="15" viewBox="0 0 58 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.2599 0.187063C50.331 0.277688 49.5267 0.560891 48.745 1.08198C48.3259 1.35386 43.1942 6.4062 34.7208 14.891L21.3536 28.2695L15.463 22.4015C9.09658 16.0578 9.05127 16.0125 7.46533 15.6386C4.96182 15.0496 2.34502 16.0578 0.974319 18.1195C0.759084 18.448 0.441897 19.1277 0.271975 19.6148C0.0114279 20.4191 -0.0225565 20.6343 0.022756 21.7558C0.0793967 23.1832 0.305959 23.8855 1.01963 24.9503C1.28018 25.3355 4.82588 28.9605 9.59502 33.7183C18.397 42.4976 18.2157 42.3277 19.8356 42.7128C20.7646 42.9281 21.9767 42.9281 22.8263 42.7128C24.4802 42.2824 23.472 43.2226 40.7134 26.0152C51.1466 15.5933 56.822 9.86128 57.1052 9.41948C57.7396 8.44527 58.0001 7.52769 58.0001 6.19097C58.0001 4.3898 57.479 3.08706 56.2782 1.89761C54.9528 0.560891 53.2423 -0.0168436 51.2599 0.187063Z" fill="#00B807"/>
        </svg>
    }

    return (
        <article className="p-6 bg-white border-2 border-[#C9C6C3] rounded-2xl max-w-96 flex-shrink-0 cursor-pointer"
                 onMouseDown={handleTaskOpen}>
            <h2 className="font-bold text-2xl pb-3">{task.name}</h2>
            <p className="text-sm pb-6">{task.description ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
            <div className="flex items-center justify-between gap-x-6">
                <p className={`py-3 px-6 text-white rounded-xl ${statusBgColor}`}>{task.status_}</p>
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
                                <span className={`w-2 h-2 rounded-full block ${priorityDecorationColor}`}></span>
                                <span className={priorityTextColor}>{task.priority}</span>
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
                                <h2 className="text-3xl font-bold pb-8">{task.name}</h2>
                                <p>{task.description ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
                            </div>
                            <div className="flex-shrink-0">
                                <p className="text-[#636363] text-lg font-light">#{task.id}</p>
                                <p className="text-[#636363] text-lg font-light mb-2">{task.stage_}</p>
                                <p className={"font-semibold text-xl mb-6"}>Срок до: {deadline}</p>
                                <p className={"font-semibold text-lg mb-3 flex items-center gap-x-3"}>Статус: {task.condition_} {icon}</p>
                                <p className={"font-semibold text-lg mb-3"}>Заказчик: {task.customer}</p>
                                <p className={"font-semibold text-lg mb-5"}>Приемщик: {task.inspector}</p>
                                <p className={"font-semibold text-lg"}>Команда: {task.team_}</p>
                                <ul>
                                    {
                                        task.analyst_ &&
                                        <li className="flex items-center gap-x-2 mt-4"><img src="/avatars/normis.png"
                                                                                            alt="Avatar"
                                                                                            className="w-6 h-6 object-cover rounded-full"/>
                                            {task.analyst_}
                                        </li>
                                    }
                                    {
                                        task.developer &&
                                        <li className="flex items-center gap-x-2 mt-4"><img src="/avatars/normis.png"
                                                                                            alt="Avatar"
                                                                                            className="w-6 h-6 object-cover rounded-full"/>
                                            {task.developer}
                                        </li>
                                    }
                                    {
                                        task.tester &&
                                        <li className="flex items-center gap-x-2 mt-4"><img src="/avatars/normis.png"
                                                                                            alt="Avatar"
                                                                                            className="w-6 h-6 object-cover rounded-full"/>
                                            {task.tester}
                                        </li>
                                    }
                                    {
                                        task.manager &&
                                        <li className="flex items-center gap-x-2 mt-4"><img src="/avatars/normis.png"
                                                                                            alt="Avatar"
                                                                                            className="w-6 h-6 object-cover rounded-full"/>
                                            {task.manager}
                                        </li>
                                    }
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