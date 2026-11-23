import { Component } from '@angular/core';
import { ListConfComponent } from './list-conf/list-conf.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListConfComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ConfHub';
}
