import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  constructor() { }
  title="TATİL REHBERİM";
  products:any[]=[
    {id:1, name:" Ara"},
    {id:2, name:" Giriş Yap " },
    {id:3, name:" Kayıt Ol" },
    {id:4, name:" Favoriler" }
  ]
  ngOnInit(): void {
  }

}
