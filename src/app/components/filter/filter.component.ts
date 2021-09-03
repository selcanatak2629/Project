import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  products:any[]=[
    {id:1, name:" OTEL"},
    {id:2, name:" TUR" },
    {id:3, name:" UÇAK BİLETİ" },
    {id:4, name:" GÜNÜN FIRSSATLARI" }
  ]
  ngOnInit(): void {
  }

}
