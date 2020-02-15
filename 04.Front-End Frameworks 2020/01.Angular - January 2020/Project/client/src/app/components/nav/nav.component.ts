import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  get isLoggedIn() {
    return this.userService.isLogged
  }

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
  }
}
