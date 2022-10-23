import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list: string[];
  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(i: number) {
this.list.splice(i, 1)
  }

}
