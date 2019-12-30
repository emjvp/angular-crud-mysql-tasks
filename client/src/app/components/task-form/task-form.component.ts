import { Component, OnInit, HostBinding } from '@angular/core';
import { Task } from '../../models/Task';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  task: Task = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private tasksService: TasksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.tasksService.getTask(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.task = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  saveNewTask() {
    delete this.task.id;
    delete this.task.created_at;
    this.tasksService.saveTask(this.task)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/tasks']);
      },
      err => console.error(err)
    );
  }
  updateTask() {
    delete this.task.created_at;
    this.tasksService.updateTask(this.task.id, this.task)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/tasks']);
      },
      err => console.error(err)
    );
  }
}
