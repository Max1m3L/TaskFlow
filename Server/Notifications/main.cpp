#include <thread>
#include "headers/DataBase.h"
#include "headers/Time.h"
#include "headers/Message.h"
#include <iostream>

#define MIN 10

int main() {
    while(true){
        loadDataFromDB();
        for(const auto& task : tasks){
           if(sendDifference(task.startDate,std::ceil(task.sp/8))){
                for(const auto& user : users){
                    if(user.name == task.inspector){
                        sendMessage(user.mail,user.name,task.name);
                    }
                }
           }
        }
        std::this_thread::sleep_for(std::chrono::minutes(MIN));
    }
}
