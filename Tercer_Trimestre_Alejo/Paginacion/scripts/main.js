import { loadUsers } from "./service.js";

import {
  addPrevPageBtnEvent,
  addNextPageBtnEvent,
  addFirstPageBtnEvent,
  addLastPageBtnEvent,
  addJumpForwardBtnEvent,
  addJumpBackBtnEvent,
  render,
} from "./ui.js";

async function startApp() {
  addFirstPageBtnEvent();
  addPrevPageBtnEvent();
  addJumpBackBtnEvent();

  addNextPageBtnEvent();
  addJumpForwardBtnEvent();
  addLastPageBtnEvent();

  await loadUsers();

  render();
}

startApp();
