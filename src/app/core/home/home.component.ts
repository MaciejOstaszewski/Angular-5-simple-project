import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }


  ngOnInit() {
    if (this.authService.isAuthenticated())
      this.dataStorageService.getRecipes();
  }

}
