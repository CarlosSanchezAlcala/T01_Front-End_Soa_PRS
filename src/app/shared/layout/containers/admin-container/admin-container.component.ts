import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styles: [],
})
export class AdminContainerComponent {
  //@ts-ignore
  @ViewChild('drawer') drawer: MatDrawer;
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  handleClickToggleDrawer() {
    this.drawer.toggle();
  }

  closeDrawerWhenMobileQueryMatches() {
    if (this.mobileQuery.matches) {
      this.drawer.close();
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
}
