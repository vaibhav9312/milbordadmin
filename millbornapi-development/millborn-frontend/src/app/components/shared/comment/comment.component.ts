import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit {

  @Input() isArrow: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
