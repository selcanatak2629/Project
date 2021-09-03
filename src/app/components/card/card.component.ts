import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
 
  products:any[]=[
    {id:1, name:" otel adı 1",image:"assets/images/image1.jpg",location:"mugla" },
    {id:2, name:" otel adı 2" ,image:"assets/images/image2.jpg",location:"adana" },
    {id:3, name:" otel adı 3" ,image:"assets/images/image6.jpg",location:"izmir" }

  ]
  ngOnInit(): void {
  }

}
