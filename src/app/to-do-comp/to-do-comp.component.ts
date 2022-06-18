import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo'

@Component({
  selector: 'app-to-do-comp',
  templateUrl: './to-do-comp.component.html',
  styleUrls: ['./to-do-comp.component.css']
})
export class ToDoCompComponent implements OnInit {

  todoList:Todo[] = [];
  inputToDo:string = '';
  isCompleted: boolean | undefined;

  addToDo(){
    this.todoList.push({
      content: this.inputToDo,
      isCompleted: false
    });
  }

  onComplete(id:number){
    this.todoList.map((value, index) => {
      if (index == id){
        value.isCompleted = !value.isCompleted
      }
    })
  }

  toggleDone(id:number){
    this.todoList.map((value, index) =>{
      if (index == id){
        value.isCompleted = !value.isCompleted
      }
    } )
  }

  removeToDo(id:number){
    this.todoList = this.todoList.filter((value, index) => id !== index )
  }

  clearAll<T>(array: T[]) {
    while (array.length) {
      array.pop();
    }
  }

  constructor() { }

  ngOnInit()  {
    this.todoList = [{
      content: 'Open eyes',
      isCompleted: true
    },
      {
        content: 'Stand up',
        isCompleted: false
      }
    ]
  }

}
