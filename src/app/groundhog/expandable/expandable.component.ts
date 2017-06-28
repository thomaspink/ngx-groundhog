import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gh-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss']
})
export class ExpandableComponent implements OnInit {
  
  @Input() title:string;
  @Input() active:boolean = false;
  @Input() trigger:string = 'left';
  @Input() separated:boolean = false;

  constructor() { }

  ngOnInit() {
    if(!this.title || this.title === '') throw new Error("Attribute 'title' is required");
  }

  onTrigger() {
    this.active = !this.active;
  }

}
