import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})

export class ByRegionPageComponent  implements OnInit{
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'America', 'Europ', 'Oceania', 'Asia'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountryService) { }

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }

  searchRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe(data => {
      this.countries = data;
    });
  }

}
