import { Component, Output, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})

export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoaded: boolean = false;
  public initialValue: string = '';

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string) {
    this.isLoaded = true;
    this.countryService.searchCapital(term).subscribe(data => {
      this.countries = data;
      this.isLoaded = false;
    });
  }
}
