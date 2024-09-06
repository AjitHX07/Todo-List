import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: { task: string; completed: boolean; category?: string }[] = [];

  constructor() {
    this.loadTasks();
  }

  getTasks(): { task: string; completed: boolean; category?: string }[] {
    return this.tasks;
  }

  addTask(task: { task: string; completed: boolean; category?: string }) {
    this.tasks.push(task);
    this.saveTasks();
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
}
