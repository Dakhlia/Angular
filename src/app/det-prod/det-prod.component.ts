import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-det-prod',
  templateUrl: './det-prod.component.html',
  styleUrls: ['./det-prod.component.css']
})
export class DetProdComponent {
  
id!:number;
  constructor(private Act:ActivatedRoute){

    

  }

  ngOnInit(){
      this.id=this.Act.snapshot.params['id']
  }
}
