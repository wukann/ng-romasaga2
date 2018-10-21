import { Component, OnInit } from '@angular/core';
import { Armor, ARMORS } from '../models/armor';

@Component({
  selector: 'app-armor',
  template: `
    <h1>防具</h1>

    <mat-table [dataSource]="armors" class="mat-elevation-z8">

      <ng-container matColumnDef="name">
        <mat-header-cell *matHeaderCellDef>名称</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="kind">
        <mat-header-cell *matHeaderCellDef>種別</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.kind}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="price">
        <mat-header-cell *matHeaderCellDef>価格</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.price}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="zan">
        <mat-header-cell *matHeaderCellDef>斬</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.zan}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="ou">
        <mat-header-cell *matHeaderCellDef>殴</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.ou}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="totsu">
        <mat-header-cell *matHeaderCellDef>突</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.totsu}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="sha">
        <mat-header-cell *matHeaderCellDef>射</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.sha}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="netsu">
        <mat-header-cell *matHeaderCellDef>熱</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.netsu}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="rei">
        <mat-header-cell *matHeaderCellDef>冷</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.rei}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="rai">
        <mat-header-cell *matHeaderCellDef>雷</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.rai}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="jou">
        <mat-header-cell *matHeaderCellDef>状</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.jou}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="against">
        <mat-header-cell *matHeaderCellDef>耐性</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.jou}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="weight">
        <mat-header-cell *matHeaderCellDef>重量</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="remarks">
        <mat-header-cell *matHeaderCellDef>備考</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.remarks}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="whereToGet">
        <mat-header-cell *matHeaderCellDef>入手場所</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.whereToGet}} </mat-cell>
      </ng-container>

      <mat-header-row *matHeaderRowDef="displayedColumns; sticky: true;"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>

    </mat-table>
  `,
  styles: [`

  `]
})
export class ArmorComponent implements OnInit {

  displayedColumns: string[] = [
    'name', 'kind', 'price',
    'zan', 'ou', 'totsu', 'sha',
    'netsu', 'rei', 'rai', 'jou',
    'weight', 'remarks', 'whereToGet'
  ];
  armors: Armor[] = ARMORS;

  constructor() { }

  ngOnInit() {
  }

}
