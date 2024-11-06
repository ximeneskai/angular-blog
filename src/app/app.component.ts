import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importando o RouterModule
import { routes } from './app.routes';  // Importando as rotas do arquivo app.route.ts
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { BigCardComponent } from "./components/big-card/big-card.component";
import { HomeComponent } from "./pages/home/home.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { ContentComponent } from './pages/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MenuTitleComponent,
    BigCardComponent,
    HomeComponent,
    MenuBarComponent,
    ContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';
}
