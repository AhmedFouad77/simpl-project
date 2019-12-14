import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Event,
  Router
} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'users Management';
  constructor(private _loadingBar : SlimLoadingBarService , private _router : Router) {
    this._router.events.subscribe((event : Event) => {
      this.navigationConstructor(event);
    });
  }
  navigationConstructor(event: Event): void {
    if ( event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    else if ( event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    else if ( event instanceof NavigationError) {
      this._loadingBar.stop();
    }
    else if ( event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
  }
}
