import { Component, Input, OnInit } from '@angular/core';
import { PackService } from '../services/pack.service';

@Component({
  selector: 'packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit { 
  @Input() ownerUser: any;

  title = 'Bot Packs';
  description = 'View a range of preselected bots in specific categories.';

  page = 1;
  size = 8;
  
  initialized = false;
  
  get lastPage() { return Math.ceil(this.service.packs.length / this.size); }

  constructor(
    public service: PackService) {}  
  
  async ngOnInit() {
    await this.service.init();
    if (this.ownerUser)
      this.title = `${this.ownerUser.username}'s Bot Packs`;

    this.initialized = true;
  }

  ngAfterViewInit() {
    this.resetPaginator();
  }

  private resetPaginator(page = 1) {
    this.page = page;
  }

  previousPage() {
    this.page = Math.max(this.page - 1, 1);
  }
  nextPage() {
    this.page = Math.min(this.page + 1, this.lastPage);
  }
  
  paginate(array: any[]) {
    return array.slice((this.page - 1) * this.size, this.page * this.size);
  }
}
