import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http:HttpClient,private fb:FormBuilder) { }

  subscriberForm:FormGroup=this.fb.group({
    SubscriberId:[""],
    SubscriberCode:[""],
    SubscriberDate:[""],
    SubscriberNameAr:["",[Validators.required,Validators.pattern('[\u0600-\u06FF]+[\u0600-\u06FF ]+[\u0600-\u06FF]')]],
    SubscriberNameEn:["",[Validators.required,Validators.pattern('[a-zA-Z]+[a-zA-Z ]+[a-zA-Z]')]],
    SubscriberFlagId:["",Validators.required],
    SubscriberPhone:["",[Validators.required,Validators.pattern("[0-9]{11}")]],
    LanguageId:["",Validators.required],
    GovernorateId:["",Validators.required],
    Town:["",Validators.required],
    Village:["",Validators.required],
    BirthDate:[""],
    GenderId:[""],
    LevelId:[""],
    latitude:["",Validators.required],
    Longitude:["",Validators.required],
    SchoolTypeId:[""],
    SubscriberNumber:[""],
    SubscriberTeacherName:[""],
    SubscriberIsActive:[true],
    SubscriberIsClosed:[false]
  })


  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          console.log("error")
          console.log(err)
          reject(err);
        });
    });

  }

  getOneSubscriber(SubscriberId){
    return this.http.get(environment.apiUrl+"Subscribers/getOne?id="+SubscriberId)
  }

  getAllSubsciberForTrainerByFlag(SubscriberFlagId){
    return this.http.get(environment.apiUrl+"Subscribers/bySubscriberfLagForTrainer?SubscriberFlagId="+SubscriberFlagId)
  }

  postSubscriber(body){
    return this.http.post(environment.apiUrl+"Subscribers",body)
  }

  
    putSubscriber(SubscriberId,body){
      return this.http.put(environment.apiUrl+"Subscribers/"+SubscriberId,body);
    }

  deleteSubscriber(SubscriberId){
    
    return this.http.delete(environment.apiUrl+"Subscribers/deleteSubscriber?id="+SubscriberId)

  }

  closeSubscriber(SubscriberId){
return this.http.delete(environment.apiUrl+"Subscribers/AbsenceSubscriber?id="+SubscriberId)
  }

  ToPosition(SubscriberId,latitude,longitude){
return this.http.delete(environment.apiUrl+"Subscribers/EditPosition?id="+SubscriberId +"&&latitude="+latitude+"&&longitude="+longitude)
}
  
}
