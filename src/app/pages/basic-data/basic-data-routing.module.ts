import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDataComponent } from './basic-data.component';
import { AuthGuard } from '../../auth/auth.guard';
import { StagesListComponent } from './stages/stages-list/stages-list.component';
import { LevelsListComponent } from './stages/levels-list/levels-list.component';
import { TrainersListComponent } from './trainers/trainers-list/trainers-list.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { OrdersFormComponent } from './orders/orders-form/orders-form.component';
import { SubscriberListComponent } from './Subscriber/subscriber-list/subscriber-list.component';
import { StudentsComponent } from './Subscriber/Students.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { TrainersFormComponent } from './trainers/trainers-form/trainers-form.component';
import { OrderPaymentListComponent } from './orders/order-payment/order-payment-list/order-payment-list.component';
import { TrainerAccountReportsComponent } from './orders/trainer-account-reports/trainer-account-reports.component';
import { OrderPaymentReportsComponent } from './orders/order-payment/order-payment-reports/order-payment-reports.component';
import { OrderReportsComponent } from './orders/order-reports/order-reports.component';



const routes: Routes = [{
  path: '',
  component: BasicDataComponent,
  canActivate:[AuthGuard],
  children: [
    {
      path:'orderReportsTrainer/:id',
      component:OrderReportsComponent
    },
    {
path:'trainerAccountReports',
component:TrainerAccountReportsComponent
    },
    {
      path:'paymentTrainerReports/:id',
      component:OrderPaymentReportsComponent
    },
    
    {
path:'trainerPayment',
component:OrderPaymentListComponent
    },
    {
      path:'subscriber',
      component:StudentsComponent,
      children:[
        {
          path:':id',
          component:SubscriberListComponent
        }
      ]
    },

    {
path:'orderList',
component:OrdersListComponent
    },
    {
path:'ordersForm',
component:OrdersFormComponent
    },
    {
      path:'items/:id',
      component:ItemListComponent
    },
    {
path:'trainers/:id',
component:TrainersListComponent
    },
    {
path:'levels',
component:LevelsListComponent
    },

  
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule],
})
export class BasicDataRoutingModule { }
