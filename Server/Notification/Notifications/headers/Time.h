#pragma once
#include <ctime>
#include <cmath>
#include <chrono>

bool is_weekend(std::tm* tm) {
    // Функция mktime может изменить поля tm_wday и tm_yday
    std::mktime(tm);
    return tm->tm_wday == 0 || tm->tm_wday == 6;
}

bool sendDifference(std::string start_date_str,int task_days) {
    // Преобразование строки в tm
    std::tm tm = {};
    strptime(start_date_str.c_str(), "%Y-%m-%d %H:%M:%S", &tm);
    std::time_t start_date = std::mktime(&tm);

    // Расчет даты дедлайна
    std::time_t deadline = start_date;
    while (task_days > 0) {
        deadline += 24 * 60 * 60;  // добавляем один день
        std::tm* deadline_tm = std::localtime(&deadline);
        if (!is_weekend(deadline_tm)) {
            --task_days;
        }
    }

    // Проверка, является ли сегодняшний день дедлайном
    std::time_t now = std::time(nullptr);
    double secTillDeadline = std::difftime(deadline,now);
    double daysTillDeadline = secTillDeadline / (60*60*24);


    return now >= deadline || daysTillDeadline <= 2;
}