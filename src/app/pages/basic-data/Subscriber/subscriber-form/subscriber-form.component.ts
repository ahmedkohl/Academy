import { Component, Inject, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { empty, Observable } from 'rxjs';
import { GendersService } from '../../../../shared/genders.service';
import { GovernoratesService } from '../../../../shared/governorates.service';
import { LanguagesService } from '../../../../shared/languages.service';
import { LevelsService } from '../../../../shared/levels.service';
import { NotificationService } from '../../../../shared/notification.service';
import { SchoolTypeService } from '../../../../shared/school-type.service';
import { SubscriberService } from '../../../../shared/subscriber.service';

@Component({
  selector: 'ngx-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styles: []
})
export class SubscriberFormComponent implements OnInit {

 genderList$:Observable<any>;
 governmentList$:Observable<any>;
 schoolTypeList$:Observable<any>;
   languageList$:Observable<any>;
 levelsList$:Observable<any>;
  submitted:boolean=false;
     constructor(
       public service:SubscriberService,public dialogRef: MatDialogRef<SubscriberFormComponent>,
       @Inject(MAT_DIALOG_DATA) public data,private serviceGender:GendersService,
       private serviceGovernate:GovernoratesService,
       private serviceSchoolType:SchoolTypeService,
       private serviceLevels:LevelsService,private serviceLanguages:LanguagesService,
      
       private notify:NotificationService) { }
   
     ngOnInit() {
       this.genderList$=this.serviceGender.getAllGenders();
       this.levelsList$=this.serviceLevels.getAlllevels();
       this.governmentList$=this.serviceGovernate.getAllGovernorates();
       this.languageList$=this.serviceLanguages.getAllLanguages(1);
      
      this.service.subscriberForm.controls['LevelId'].clearValidators();
      this.service.subscriberForm.controls['SchoolTypeId'].clearValidators(); 
      this.service.subscriberForm.controls["BirthDate"].clearValidators();
      this.service.subscriberForm.controls['GenderId'].clearValidators();
      this.service.subscriberForm.controls['SubscriberNumber'].clearValidators(); 
      this.service.subscriberForm.controls["SubscriberTeacherName"].clearValidators();
      this.service.subscriberForm.controls['LevelId'].updateValueAndValidity();
      this.service.subscriberForm.controls['SchoolTypeId'].updateValueAndValidity(); 
      this.service.subscriberForm.controls["BirthDate"].updateValueAndValidity();
      this.service.subscriberForm.controls['GenderId'].updateValueAndValidity();
      this.service.subscriberForm.controls['SubscriberNumber'].updateValueAndValidity(); 
      this.service.subscriberForm.controls["SubscriberTeacherName"].updateValueAndValidity();


 if(this.data.SubscriberFlagId==1)
 {
  this.schoolTypeList$=this.serviceSchoolType.getAllSchoolType(1);
  this.service.subscriberForm.controls['LevelId'].setValidators([Validators.required]);
      this.service.subscriberForm.controls['SchoolTypeId'].setValidators([Validators.required]);
      this.service.subscriberForm.controls["BirthDate"].setValidators([Validators.required]);
      this.service.subscriberForm.controls['GenderId'].setValidators([Validators.required]);

      this.service.subscriberForm.controls['LevelId'].updateValueAndValidity();
      this.service.subscriberForm.controls['SchoolTypeId'].updateValueAndValidity(); 
      this.service.subscriberForm.controls["BirthDate"].updateValueAndValidity();
      this.service.subscriberForm.controls['GenderId'].updateValueAndValidity();


 }
 
else if(this.data.SubscriberFlagId==2)
 {

  this.service.subscriberForm.controls['SubscriberNumber'].setValidators([Validators.required,Validators.pattern("[0-9]")]); 
  this.service.subscriberForm.controls["SubscriberTeacherName"].setValidators([Validators.required]);

  this.service.subscriberForm.controls['SubscriberNumber'].updateValueAndValidity();
  this.service.subscriberForm.controls["SubscriberTeacherName"].updateValueAndValidity();
  
 }

 else if (this.data.SubscriberFlagId==3){
  this.schoolTypeList$=this.serviceSchoolType.getAllSchoolType(3);

  this.service.subscriberForm.controls['SchoolTypeId'].setValidators([Validators.required]);
  this.service.subscriberForm.controls['SubscriberNumber'].setValidators([Validators.required]);
  this.service.subscriberForm.controls['SchoolTypeId'].updateValueAndValidity();
  this.service.subscriberForm.controls['SubscriberNumber'].updateValueAndValidity();

  
 }

       if(this.data.SubscriberId==null){
       this.service.subscriberForm.reset({SubscriberId:0,  SubscriberIsActive:true,SubscriberIsClosed:false});
       this.service.subscriberForm.get('SubscriberFlagId').setValue(this.data.SubscriberFlagId);
       console.log("aaaa");
       this.service.getPosition().then(pos=>
        {
          
          this.service.subscriberForm.get('latitude').setValue(pos.lat);
          this.service.subscriberForm.get('Longitude').setValue(pos.lng)
          // console.log(`Positon: ${pos.lng} ${pos.lat}`);
        });
      
 this.service.subscriberForm;
 
     }
   else
   {
     
   this.service.getOneSubscriber(this.data.SubscriberId).subscribe((res:any)=>{
    var d = new Date(res.BirthDate);
    d.setMinutes( d.getMinutes() +480);
     this.service.subscriberForm.setValue({
      SubscriberId:res.SubscriberId,
      SubscriberCode:res.SubscriberCode,
      SubscriberDate:res.SubscriberDate,
      SubscriberNameAr:res.SubscriberNameAr,
      SubscriberNameEn:res.SubscriberNameEn,
      SubscriberFlagId:res.SubscriberFlagId,
      SubscriberPhone:res.SubscriberPhone,
      LanguageId:res.LanguageId,
      GovernorateId:res.GovernorateId,
      Town:res.Town,
      Village:res.Village,
      BirthDate:d,
      GenderId:res.GenderId,
      LevelId:res.LevelId,
      latitude:res.latitude,
      Longitude:res.Longitude,
      SchoolTypeId:res.SchoolTypeId,
      SubscriberNumber:res.SubscriberNumber,
      SubscriberTeacherName:res.SubscriberTeacherName,
      SubscriberIsActive:res.SubscriberIsActive,
      SubscriberIsClosed:res.SubscriberIsClosed
        })
   })
   }
   
     }
   
     get f(){
       return this.service.subscriberForm.controls;
     }
 
   
   
   
     onClose(){
      this.service.subscriberForm.reset({SubscriberId:0,  SubscriberIsActive:true,SubscriberIsClosed:false});

       this.dialogRef.close();
     }
   
     onSubmit(){
    console.log(this.service.subscriberForm.value);
   this.submitted=true;
   if(this.service.subscriberForm.invalid)
   {
   return;
   }
   else
   {
   var body={
   ...this.service.subscriberForm.value 
   }
   if(this.data.SubscriberId==null)
   {
 
 
   this.service.postSubscriber(body).subscribe(res=>{
     this.notify.success('تمت الاضافه بنجاح');
     this.service.subscriberForm.reset({SubscriberId:0,  SubscriberIsActive:true,SubscriberIsClosed:false});
     this.dialogRef.close();
   })
   
   }
   else 
   {
     this.service.putSubscriber(this.data.SubscriberId,body).subscribe(res=>{
     this.notify.success('تم التعديل بنجاح');
     this.service.subscriberForm.reset({SubscriberId:0,  SubscriberIsActive:true,SubscriberIsClosed:false});
     this.dialogRef.close();
     })
   }
   }
   
     }

   



}
