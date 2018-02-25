import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {DynComponent} from "./dyn/dyn.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentRef: any;
  @ViewChild('alertContainer', {read: ViewContainerRef}) alertContainer;

  title = 'app';

  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(type: string) {
    this.alertContainer.clear();
    const dynFactory = this.resolver.resolveComponentFactory(DynComponent);
    this.componentRef = this.alertContainer.createComponent(dynFactory);
    this.componentRef.instance.type = type;
  }
}
