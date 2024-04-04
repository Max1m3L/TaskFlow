# TaskFlow

----------

+ ***User: (Id, Fist_name, Last_Name, Gmail, Role, @Null Teams(Team Id))***
+ ***Team: (Id, Name, @Null Participants(user Id), @Null Projects(project Id))***
+ ***Project: (Id, Name, @Null Tasks(task Id), Team(team Id))***
+ ***Task: (Id, Name, Descriptions, Priority, Condition, Stage, Project(project Id))***
_@Null = can be empty while creating_

---

Enum:
1) __Priority__: High, Middle, Low
2) __Condition__: In the queue, In the process, Done
3) __Stage__: New func, Fix, Error

_Task's Life cycle_: __Analysis-Developing-Testing-Review-Relies__

---
![Architecture](Architecture_V1.png)

__<u>P.S. Не сдаёмся, парни</u>__ 