import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.TasksList = [
      {id:1, status: 'Pending', task: 'Clear the room.'},
      {id:2, status: 'Pending', task: 'Clean the room.'},
      {id:3, status: 'Pending', task: 'Clean the room.'},
    ]
  }
  title = 'todoAppPhebSoft';
  TasksList: TasksModel[] = [];

  blocks: any[] = [
    { 'title': 'Total Tasks', 'content': 23, 'color': 'rgb(135, 40, 40)'},
    { 'title': 'In Progress', 'content': 2, 'color': 'steelblue'},
    { 'title': 'Completed', 'content': 23, 'color': 'green'},
  ]

  onSubmit(theForm: NgForm){
    console.log(theForm.value);
  }

}

export interface TasksModel{
  id: number;
  task: string;
  status: string;
}
