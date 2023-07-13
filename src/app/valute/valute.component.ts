import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valute',
  templateUrl: './valute.component.html',
  styleUrls: ['./valute.component.scss'],
})
export class ValuteComponent {
  @Input() title: string = '';
}
