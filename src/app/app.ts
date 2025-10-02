import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Toast } from 'primeng/toast';
import { Footer } from './layout/footer/footer';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Toast, Footer],
  templateUrl: './app.html',
  providers: [MessageService],
  styleUrl: './app.scss',
})
export class App {
  ngOnInit() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
