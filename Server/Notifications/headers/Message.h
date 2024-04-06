#pragma once
#include <curl/curl.h>

void sendMessage(std::string mail,std::string userName,std::string taskName){

    std::string message = "Dear " + userName + " your task should be completed & soon, the time for submitting the task is approaching" +'\n'+ "Task:"+taskName;

    CURL *curl;
    CURLcode res = CURLE_OK;

    curl = curl_easy_init();
    if(curl) {
        struct curl_slist *recipients = NULL;

        /* Установите имя пользователя и пароль для аутентификации SMTP */
        curl_easy_setopt(curl, CURLOPT_USERNAME, "Wherescary@gmail.com");
        curl_easy_setopt(curl, CURLOPT_PASSWORD, "Kreuzschlitzschraubendreher!");

        /* URL SMTP сервера */
        curl_easy_setopt(curl, CURLOPT_URL, "smtp.gmail.com");

        /* Установите получателя */
        recipients = curl_slist_append(recipients, mail.c_str());
        curl_easy_setopt(curl, CURLOPT_MAIL_RCPT, recipients);

        /* Отправка письма */
        curl_easy_setopt(curl, CURLOPT_READDATA, &message);
        curl_easy_setopt(curl, CURLOPT_UPLOAD,1L);

        res = curl_easy_perform(curl);

        /* Очистка списка получателей */
        curl_slist_free_all(recipients);

        /* Очистка сеанса */
        curl_easy_cleanup(curl);
    }

    if(res != CURLE_OK)
        fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));

}