import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(`${this.API_URI}/tasks`);
  }

  getTask(id: string) {
    return this.http.get(`${this.API_URI}/tasks/${id}`);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.API_URI}/tasks/${id}`);
  }
  saveTask(task: Task) {
    return this.http.post(`${this.API_URI}/tasks`, task);
  }

  updateTask(id: string | number, updatedTask: Task): Observable<Task> {
    return this.http.put(`${this.API_URI}/tasks/${id}`, updatedTask);
  }

}
