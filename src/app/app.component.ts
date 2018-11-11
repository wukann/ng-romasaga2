import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container class="example-container">
      <mat-sidenav mode="side" opened>
        <mat-card>
          <mat-list>
            <h3 mat-subheader>一覧</h3>
            <mat-list-item>
              <a mat-line routerLink="/armor">防具</a>
            </mat-list-item>
            <mat-list-item>
              <a mat-line routerLink="/">その他</a>
            </mat-list-item>
          </mat-list>
        </mat-card>
      </mat-sidenav>
      <mat-sidenav-content>
        <div style="text-align:center">
          <h1>
            Welcome to {{title}}!
          </h1>
        </div>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>

  `,
  styles: [`
    .example-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #eee;
    }`]
})
export class AppComponent {
  title = 'romaSaga2';
}
