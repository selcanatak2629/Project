import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
 
  products:any[]=[
    {id:1, name:" Marcan Beach Hotel",image:"assets/images/MarcanBeachHotel.jpeg",location:"Muğla / Fethiye / Ölüdeniz" },
    {id:2, name:" SuneoClub Mersoy Bellavista" ,image:"assets/images/SuneoClubMersoyBellavista.jpeg",location:"Muğla / Marmaris / Marmaris İçmeler" },
    {id:3, name:" Royal Asarlık Beach Hotel Spa" ,image:"assets/images/RoyalAsarlıkBeachHotelSpa.jpeg",location:"Muğla / Bodrum / Gümbet" },
    {id:4, name:" Grand Efe Otel" ,image:"assets/images/GrandEfeOtel.jpeg",location:"İzmir / Menderes / Özdere" },
    {id:5, name:" Horus Paradise Luxury Resort" ,image:"assets/images/HorusParadiseLuxuryResort.jpeg",location:"Antalya / Side / Kumköy" },
    {id:6, name:" Taksim International Abant Palace" ,image:"assets/images/TaksimInternationalAbantPalace.jpeg",location:"Bolu / Abant / Abant Göl Kenarı" },
    {id:7, name:" Senza Grand Santana Hotel" ,image:"assets/images/SenzaGrandSantanaHotel.jpg",location:"Antalya / Alanya / Mahmutlar" }


  ]
  ngOnInit(): void {
  }

}
