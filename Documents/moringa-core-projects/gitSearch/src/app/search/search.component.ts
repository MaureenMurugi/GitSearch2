import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username: any;
  profile: any;
  repos: any;

  

  findProfile() {
    this.searchComponent.updateSearch(this.username);
    this.searchComponent.getSearchInfo().subscribe((profile: any) => {
      console.log(profile);
      this.profile = profile;
    });

    this.searchComponent.getSearchRepos().subscribe((repos: any) => {
      console.log(repos);
      this.repos = repos;
    }) 
   }

  constructor(private searchComponent: SearchService) {
    
   }


  ngOnInit(): void {
  }

}
