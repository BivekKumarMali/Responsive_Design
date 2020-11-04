import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  tag = ['Fitness', 'Sucess Stories', 'Food'];
  constructor() { }

  ngOnInit(): void {
  }

}
