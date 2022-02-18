import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TasksModel } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  updateTask(task: TasksModel, Id: string) {
    this.http
      .put('http://localhost:3000/api/updateTask/' + Id, task)
      .subscribe((response) => {
        console.log(response);
      });
  }

  FetchAllTasks(): TasksModel[] {
    var fetchedTasks: TasksModel[] = [];
    this.http
      .get<{ message: string; tasks: TasksModel[] }>(
        'http://localhost:3000/api/FetchAllTasks'
      )
      .subscribe((responseData) => {
        for (let i = 0; i < Object.keys(responseData.tasks).length; i++) {
          fetchedTasks.push(responseData.tasks[i]);
        }
      });

    return fetchedTasks;
  }
}
