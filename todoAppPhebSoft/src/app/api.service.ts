import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TasksModel } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  createTask(task: TasksModel): any {
    this.http
      .put('http://localhost:3000/api/CreateTask', task)
      .subscribe((response) => {
        console.log(response);
        return response;
      });
  }
  updateTask(task: TasksModel, id: string) {
    this.http
      .put('http://localhost:3000/api/updateTask/' + id, task)
      .subscribe((response) => {
        console.log(response);
      });
  }

  FetchAllTasks(): TasksModel[] {
    var fetchedTasks: TasksModel[] = [];
    this.http
      .get<{ message: string; tasks: TasksModel[] }>(
        'http://localhost:3000/api/FetchTasks'
      )
      .subscribe((responseData) => {
        for (let i = 0; i < Object.keys(responseData.tasks).length; i++) {
          fetchedTasks.push(responseData.tasks[i]);
        }
      });

    return fetchedTasks;
  }
}
