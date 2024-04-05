export interface ProjectEntity {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
}

export interface UserEntity {
    id: number;
    name: string;
    surname: string;
    gmail: string;
    post: string;
    team: string;
}

export interface TaskEntity {
    id: number;
    name: string;
    description: string;
    priority: string;
    customer: string;
    inspector: string;
    proj: string;
    team_: string;
    stage_: string;
    status_: string;
    condition_: string;
    analyst_: string;
    developer: string;
    tester: string;
    manager: string;
    sp_analysis: string;
    sp_test: string;
    sp_develop: string;
    sp_release: string;
    startdate: string;
    tasknumberblock: string;
    blocktask: string;
}