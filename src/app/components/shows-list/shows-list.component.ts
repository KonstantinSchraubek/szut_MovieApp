import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Show } from '../../classes/show';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }

  get shows(): Show[] {
    return this.dataService.shows;
  }

  setClicked(show: Show) {
    this.dataService.detailShow = show;
  }

}
