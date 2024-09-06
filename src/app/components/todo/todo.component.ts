import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task: string = '';
  tasks: { task: string; completed: boolean; category?: string }[] = [];
  editingIndex: number | null = null;
  editedTask: string = '';
  categories: string[] = ['Work', 'Personal', 'Others'];
  selectedCategory: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
  }

  addTask(): void {
    if (this.task.trim()) {
      this.todoService.addTask({ task: this.task, completed: false, category: this.selectedCategory });
      this.task = '';
      this.selectedCategory = '';
      this.tasks = this.todoService.getTasks();
    }
  }

  editTask(index: number): void {
    this.editingIndex = index;
    this.editedTask = this.tasks[index].task;
  }

  updateTask(): void {
    if (this.editedTask.trim() && this.editingIndex !== null) {
      this.tasks[this.editingIndex] = { ...this.tasks[this.editingIndex], task: this.editedTask };
      this.todoService.saveTasks();
      this.editingIndex = null;
      this.editedTask = '';
      this.tasks = this.todoService.getTasks();
    }
  }

  toggleCompletion(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.todoService.saveTasks();
  }

  removeTask(index: number): void {
    this.todoService.removeTask(index);
    this.tasks = this.todoService.getTasks();
  }
}
