import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { getTodo } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  todos!:Todo[];
  constructor(){
    getTodo().then(todos =>{
      console.log(todos);
      this.todos = todos
      this.completeAll();
      console.log(this.todos);
    })
  }

  completeAll(){
    this.todos = this.todos.map(todo =>{
      return {...todo, completed : true}
    })
  }
}
