import { loadUsers } from "./service.js";
import {
    addPrevPageBtnEvent,
    addNextPageBtnEvent,
    addFirstPageBtnEvent,
    addLastPageBtnEvent,
    addJumpForwardBtnEvent,
    addJumpBackBtnEvent,
    addLimitSelectEvent,
    render,
} from "./ui.js";

async function startApp() {
    addPrevPageBtnEvent();
    addNextPageBtnEvent();
    addFirstPageBtnEvent();
    addLastPageBtnEvent();
    addJumpForwardBtnEvent();
    addJumpBackBtnEvent();
    addLimitSelectEvent();
    await loadUsers();
    render();
}

startApp();