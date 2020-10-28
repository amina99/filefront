import { Component, OnInit } from '@angular/core';
import { ServicesDemandeService } from '../service/services-demande.service';
import { Demande } from '../model/demande.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consulterdemande',
  templateUrl: './consulterdemande.component.html',
  styleUrls: ['./consulterdemande.component.css']
})
export class ConsulterdemandeComponent implements OnInit {

  public numDemande:string=null;
  constructor(public demandeService:ServicesDemandeService) { }
  demandes: Observable<Demande[]>;

  ngOnInit(): void {
      this.reloadData();
  
    }
    reloadData() {
      this.demandes = this.demandeService.onConsulterDemandes();
    }
  
  }