import { Component, OnInit } from '@angular/core';
import { Demande } from '../model/demande.model';
import { HttpClient } from '@angular/common/http';
import { ServicesDemandeService } from '../service/services-demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  public demande:Demande;
  selectedFile: File;
  imageUrl: string = "/assets/img/noimage.png";


  constructor(private demandeService:ServicesDemandeService) { }

  ngOnInit(): void {
  }

  onSaveDemande(dem:Demande)
  {
    
    this.demandeService.addDemande(dem,this.selectedFile).subscribe(
      data=>{
        console.log(data)
        this.demande=data;
       // console.log(this.demande);
      },error=>{
        console.log(error);
      }
    )
  }



onFileChanged(event: Event) {
  this.selectedFile = (event.target as HTMLInputElement).files[0];
  var reader = new FileReader();
  reader.onload = (event: any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.selectedFile);
}
}

 

