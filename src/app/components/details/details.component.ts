import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Show } from '../../classes/show';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }

  get detailShow(): Show {
    return this.dataService.detailShow;
  }
}
