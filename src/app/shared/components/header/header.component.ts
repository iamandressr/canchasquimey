import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  isHomePage = false;
  

  @Input() title!: string;
  @Input() backButton!: string;


  constructor(private router: Router) { // Inyección del servicio Router
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
      }
    });
  }

  ngOnInit() {}

}
