import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment.prod';
import { OrdersService } from '../../../../shared/orders.service';

@Component({
  selector: 'ngx-trainer-account-reports',
  templateUrl: './trainer-account-reports.component.html',
  styles: []
})
export class TrainerAccountReportsComponent implements OnInit {

  TrainerName:string;
  
  Total:number;
  DetailsList:any[]=[];
 
  

    useExistingCss:boolean;
    styleName:string;

  
    constructor(public service:OrdersService,private route:Router,
      private activeRoute:ActivatedRoute) { }
    

      
   
    ngOnInit() {
  
      this.useExistingCss = true;
      if (environment.production) {
            this.useExistingCss = false;
            const elements = document.getElementsByTagName('link');
            for (let index = 0; index < elements.length; index++) {
              if (elements[index].href.startsWith(document.baseURI)) {
                this.styleName += elements[index].href + ',';
              }
            }
            this.styleName = this.styleName.slice(0, -1);
          }
  
      this.service.getForAccountTrainer().subscribe((res:any)=>{

  this.TrainerName=res.Master.TrainerName;
  
  this.Total=res.Master.Total;
  this.DetailsList=res.result;
 
      
  
      })
  
    }

    onReports(DocTypeId,DocNum){
      if(DocTypeId==1)
      {
this.route.navigateByUrl('/pages/basicData/orderReportsTrainer/'+DocNum);
      }
      else
      {
        this.route.navigateByUrl('/pages/basicData/paymentTrainerReports/'+DocNum);
      }
    }

}
