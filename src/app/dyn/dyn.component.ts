import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dyn',
  templateUrl: './dyn.component.html',
  styleUrls: ['./dyn.component.css']
})
export class DynComponent {

  @Input() type: string = 'primary';
}
