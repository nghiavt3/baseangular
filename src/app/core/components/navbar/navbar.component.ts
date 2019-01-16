import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  
    title:any = 'Menu';
    admin:any = {login:false,name:'User Name',avatar:'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg',isAdmin:true,count:45,list:
    [
      {link:'/admin/user/new',name:'Tạo Tai Khoan'},
      {link:'/admin/user/list',name:'Quản Lý TK'}
    ]}
  
    menu: any = [
      {
        dropdown: false, name: 'Trang Chủ', Link: '/',active:true
      },
      {
        dropdown: true, name: 'Nhân Viên', list: [
          { link: '/machanics/presenter/new/0', name: 'Tạo Mới' },
          { link: '/machanics/presenter/list/0', name: 'Danh Sách Nhân Viên' }
        ]
      },
      {
        dropdown: true, name: 'Nhà Cung Cấp', list: [
          { link: '/machanics/presenter/new/3', name: 'Tạo Mới' },
          { link: '/machanics/presenter/list/3', name: 'Danh Sách Nhà Cung Cấp' }
        ]
      },
      {
        dropdown: true, name: 'Khách Hàng', list: [
          { link: '/machanics/presenter/new/2', name: 'Tạo Mới' },
          { link: '/machanics/presenter/list/2', name: 'Danh Sách Khách Hàng' }
        ]
      },
  
      {
        dropdown: true, name: 'Nguyên Liệu', list: [
          { link: '/machanics/product/new/0', name: 'Tạo Mới' },
          { link: '/machanics/product/list/0', name: 'Danh Sách Nguyên Liệu' },
          { link: '/machanics/product/limit/0', name: 'Nguyên Liệu Sắp Hết' },
          { link: '/machanics/order/new/0', name: 'Nhập Nguyên Liệu' },
          { link: '/machanics/order/new/1', name: 'Xuất Nguyên Liệu' },
          { link: '/machanics/order/list/0', name: 'Danh Sách Nhập Nguyên Liệu' },
          { link: '/machanics/order/list/1', name: 'Danh Sách Xuất Nguyên Liệu' }
        ]
      },
      {
        dropdown: true, name: 'Sản Phẩm', list: [
          { link: '/machanics/product/new/1', name: 'Tạo Mới' },
          { link: '/machanics/product/list/1', name: 'Danh Sách Sản Phẩm' },
          { link: '/machanics/product/limit/1', name: 'Sản Phẩm Sắp Hết' },
          { link: '/machanics/order/new/2', name: 'Nhập Sản Phẩm' },
          { link: '/machanics/order/new/3', name: 'Bán Sản Phẩm' },
          { link: '/machanics/order/list/2', name: 'Danh Sách Nhập Sản Phẩm' },
          { link: '/machanics/order/list/3', name: 'Danh Sách Bán Sản Phẩm' }
        ]
      },
  
    ]
    constructor( private router: Router,private authService: AuthService) { }
  
    ngOnInit() {
      this.authService.user.subscribe(
        (user) => {
          if (user) {
            this.admin.login = true;
            this.admin.name = user.displayName || user.email;
            this.admin.avatar =  user.photoURL || 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg';
          }
          else {
            this.admin.login = false;
          }
        }
      );
    }
  
    logout() {
      this.authService.logout();
    }
  
    notificate(){
      this.router.navigate(['/']);
    }
  
}
