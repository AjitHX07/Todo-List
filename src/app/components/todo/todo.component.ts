import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  task: string = '';
  tasks: string[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
  }

  addTask(): void {
    if (this.task.trim()) {
      this.todoService.addTask(this.task);
      this.task = '';
    }
  }

  removeTask(index: number): void {
    this.todoService.removeTask(index);
  }
}