import { Router } from 'express'
import tasksController from '../controllers/tasksController'
class TasksRoutes {
    public router: Router = Router()
    constructor() {
        this.config()
    }
    config(): void {
        this.router.get('/', tasksController.list)
        this.router.get('/:id', tasksController.getOne)
        this.router.post('/', tasksController.create)
        this.router.put('/:id', tasksController.update)
        this.router.delete('/:id', tasksController.delete)
    }
}
const tasksRoutes = new TasksRoutes()
export default tasksRoutes.router