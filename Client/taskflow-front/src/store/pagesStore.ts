import { makeAutoObservable } from 'mobx'

class PagesStore {
    page: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    changePage(page: number) {
        this.page = page;
    }
}

export default new PagesStore();