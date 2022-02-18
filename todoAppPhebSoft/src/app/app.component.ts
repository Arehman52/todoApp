import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  TasksList: TasksModel[] = [];

  blocks: any[] = [
    { title: 'Total Tasks', content: 233, color: 'rgb(135, 40, 40)' },
    { title: 'In Progress', content: 2, color: 'steelblue' },
    { title: 'Completed', content: 23, color: 'green' },
  ];

  ngOnInit(): void {
    //call fetch api here and populate following array with it.
    this.TasksList = [];
  }


  onSubmit(theForm: NgForm) {
    console.log(theForm.value);
    if(theForm.valid){
      this.TasksList.push({id: this.TasksList.length + 1, status: 'In Progress', task: theForm.value.taskDescription});
      theForm.reset();
      //call create api here to create in DB.
    }
  }

  getTasksCount(status: any): number {
    let count: number = 0;
    if (status == 'In Progress') {
      this.TasksList?.forEach((item) => {
        item.status == 'In Progress' ? count++ : null;
      });
    } else if (status == 'Done') {
      this.TasksList?.forEach((item) => {
        item.status == 'Done' ? count++ : null;
      });
    }
    return count;
  }
}

export interface TasksModel {
  id: number;
  task: string;
  status: string;
}
