import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-reportdetails',
  templateUrl: './reportdetails.component.html',
  styleUrls: ['./reportdetails.component.scss']
})
export class ReportdetailsComponent implements OnInit, OnDestroy {
  tabs = [{ name: 'Drivers', route: './' }, { name: 'Vehicles', route: './vehicles' }];
  tabIndex = 0;
  activeLink: string;
  
  private readonly destroyed$ = new Subject<boolean>();

  constructor(private readonly router: Router) {
    this.router.events.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.tabs.forEach(data => {
        const Url = data.route.replace('.', '');
        if ((JSON.stringify(this.router.url).toLowerCase().indexOf(Url) > -1)) {
          this.activeLink = data.route;
        }
      });
    });
  }

  ngOnInit() {
  }
  onButtonClick(index) {
    this.tabIndex = index;
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
