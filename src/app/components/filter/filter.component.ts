import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  products:any[]=[
    {id:1, name:" OTELLER"},
    {id:2, name:" TURLAR" },
    {id:3, name:" UÇAK BİLETLERİ" },
    {id:4, name:" GÜNÜN FIRSSATLARI" },
    {id:5, name:" EN POPÜLER ŞEHİRLER" },
    {id:6, name:" EN POPÜLER TATİL ROTALARI" }

  ]
  ngOnInit(): void {
  }

}
