#pragma once
#include <sqlite3.h>
#include <vector>
#include <string>

struct Task{
    int id;
    int sp;  // сумма всех sp
    std::string inspector;
    std::string name;
    std::string startDate;
};

struct Project{
    int id;
    std::string name;
};

struct User{
    int id;
    std::string name;
    std::string mail;
};

static std::vector<User> users;
static std::vector<Task> tasks;
static std::vector<Project> projects;

void selectUsers(sqlite3* db) {
    sqlite3_stmt* stmt;
    sqlite3_prepare_v2(db, "SELECT * FROM users", -1, &stmt, NULL);
    while (sqlite3_step(stmt) == SQLITE_ROW) {
        User user;
        user.id = sqlite3_column_int(stmt, 0);
        user.name = reinterpret_cast<const char*>(sqlite3_column_text(stmt, 1));
        user.name += ' ';
        user.name += reinterpret_cast<const char*>(sqlite3_column_text(stmt, 2));
        user.mail = reinterpret_cast<const char*>(sqlite3_column_text(stmt, 3));
        users.push_back(user);
    }
    sqlite3_finalize(stmt);
}

void selectTasks(sqlite3* db) {
    sqlite3_stmt* stmt;
    sqlite3_prepare_v2(db, "SELECT * FROM tasks", -1, &stmt, NULL);
    while (sqlite3_step(stmt) == SQLITE_ROW) {
        Task task;
        task.id = sqlite3_column_int(stmt, 0);
        task.sp = sqlite3_column_int(stmt, 15) + sqlite3_column_int(stmt, 16) + sqlite3_column_int(stmt, 17) + sqlite3_column_int(stmt, 18);
        task.inspector = reinterpret_cast<const char*>(sqlite3_column_text(stmt, 6));
        task.name = reinterpret_cast<const char*>(sqlite3_column_text(stmt, 2));
        task.startDate = reinterpret_cast<const char*>(sqlite3_column_text(stmt, 19));
        tasks.push_back(task);
    }
    sqlite3_finalize(stmt);
}

void selectProjects(sqlite3* db) {
    sqlite3_stmt* stmt;
    sqlite3_prepare_v2(db, "SELECT * FROM projects", -1, &stmt, NULL);
    while (sqlite3_step(stmt) == SQLITE_ROW) {
        Project project;
        project.id = sqlite3_column_int(stmt, 0);
        project.name = reinterpret_cast<const char*>(sqlite3_column_text(stmt, 1));
        projects.push_back(project);
    }
    sqlite3_finalize(stmt);
}

void loadDataFromDB() {
    sqlite3* db;
    sqlite3_open("../taskflow.db", &db);
    selectUsers(db);
    selectTasks(db);
    //selectProjects(db);
    sqlite3_close(db);
}