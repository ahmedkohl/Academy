import { NbMenuItem } from '@nebular/theme';
import { title } from 'process';
import { roleMatch } from '../shared/roleMatch.roles';
import { NbMenuItemWithPermissions } from './pagesClass';

export const MENU_ITEMS: NbMenuItemWithPermissions[] = [

{
title:'البيانات الاساسيه',
icon:'shopping-cart-outline',
children:[
  {
    title:'المستويات',
    link:'/pages/basicData/levels'
  },

  {
  title:"الاصناف",
  children:[
    {
      title:'الكتب',
      link:'/pages/basicData/items/1'
    },
    {
      title:'عدادات',
      link:'/pages/basicData/items/2'
    },
    {
      title:'حقائب',
      link:'/pages/basicData/items/3'
    },
    {
      title:'تيشرتات',
      link:'/pages/basicData/items/4'
    },
    {
      title:'ميداليات',
      link:'/pages/basicData/items/5'
    },
    {
      title:'دروع',
      link:'/pages/basicData/items/6'
    },
    {
      title:'اخري',
      link:'/pages/basicData/items/7'
    }
  ]
  },

  {
    title:'المدربين',
    link:'/pages/basicData/trainers/1'
  },
  {
    title:'الموظفين',
    link:'/pages/basicData/trainers/2'
  },
  {
    title:'المشتركين للمدرب',
    link:'/pages/basicData/subscriber/1'
  }


]
},
{
title:"طلبات الاوردور",
icon:'shopping-cart-outline',
children:[
  {
    title:'طلب المدرب',
    link:'/pages/basicData/ordersForm'
  },
  {
    title:'اعتماد الاداره',
    link:'/pages/basicData/orderList'
  },
  {
    title:'مدفوعات المدرب',
    link:'/pages/basicData/trainerPayment'
  },
  {
    title:'حساب المدرب',
    link:'/pages/basicData/trainerAccountReports'
  }
]

},


  {
    title: 'الامان',
    icon: 'shopping-cart-outline',
 // hidden:!roleMatch(["UserRoles","Roles","RegisterNewUser"]),
    children: [
      {
title:"تغيير صلاحية المستخدمين",
link:'/pages/security/userRolesList',
//hidden:!roleMatch(["UserRoles"])

      },
      {
      title:'رتب الامان',
      link:'/pages/security/roles',
  //  hidden:!roleMatch(["Roles"])
      },
      {
        title:'اضافة مستخدم جديد',
        link:'/users/register',
//  hidden:!roleMatch(["RegisterNewUser"])
      }
    ],
  },



  
]; 


      

