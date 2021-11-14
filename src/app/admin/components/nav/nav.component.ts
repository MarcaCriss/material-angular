import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @HostBinding('class') componentCssClass: any;
  theme = 'dark-theme';
  title = 'Mode Dark'


  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public overlayContainer: OverlayContainer
  ) {}

  public onSetTheme(e: string) {
    if(e === 'dark-theme'){
      this.overlayContainer.getContainerElement().classList.add(e);
      this.theme = 'light-theme';
      this.title = 'Mode Light'
    } else {
      this.overlayContainer.getContainerElement().classList.add('light-theme');
      this.theme = 'dark-theme';
      this.title = 'Mode Dark'
    }
    this.componentCssClass = e;
  }
}
