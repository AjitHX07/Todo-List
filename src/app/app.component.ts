import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private renderer: Renderer2) { }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const todoContainer = document.querySelector('.todo-container');
    const taskItems = document.querySelectorAll('.task-item');
    const addButton = document.querySelector('.add-button');
    const removeButtons = document.querySelectorAll('.remove-button');

    if (todoContainer) todoContainer.classList.toggle('dark-mode');
    taskItems.forEach(item => item.classList.toggle('dark-mode'));
    if (addButton) addButton.classList.toggle('dark-mode');
    removeButtons.forEach(button => button.classList.toggle('dark-mode'));
  }
}
