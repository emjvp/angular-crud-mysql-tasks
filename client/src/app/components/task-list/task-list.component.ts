import { Component, OnInit, HostBinding } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  tasks: any = [];

  constructor(private tasksService: TasksService ) { }

  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.tasksService.getTasks().subscribe(
      res => {
        this.tasks = res;
      },
      err => console.error(err)
    );
  }
  deleteTask(id: string) {
     this.tasksService.deleteTask(id).subscribe(
       res => {
         console.log(res);
         this.getTasks();

       },
       err => console.error(err)
     );
  }

}
