"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksController_1 = __importDefault(require("../controllers/tasksController"));
class TasksRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tasksController_1.default.list);
        this.router.get('/:id', tasksController_1.default.getOne);
        this.router.post('/', tasksController_1.default.create);
        this.router.put('/:id', tasksController_1.default.update);
        this.router.delete('/:id', tasksController_1.default.delete);
    }
}
const tasksRoutes = new TasksRoutes();
exports.default = tasksRoutes.router;
