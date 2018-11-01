import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  searchString: string;

  ngOnInit() {
  }

  triggerSearch() {
    console.log(this.searchString);
    this.dataService.searchWithAPI(this.searchString);
  }

}
