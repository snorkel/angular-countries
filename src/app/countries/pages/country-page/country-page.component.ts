import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../interfaces/countries';
import { CountryService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})

export class CountryPageComponent implements OnInit {
  public country?: Country;
  constructor(
    private activetedRoute: ActivatedRoute,
    private countriesService: CountryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activetedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(
        (country) => {
          if (!country)
            return this.router.navigateByUrl('');
// return;
           return this.country = country;
        }
      );
  }


}
