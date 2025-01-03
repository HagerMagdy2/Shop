import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
@Input() title:string =" ";
@Input() data:any[]=[]
@Output() SelectValue = new EventEmitter
DetectChanges(event:any){
this.SelectValue.emit(event);
}
}
