import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ARMORS } from '../models/armor';
import { ARMOR_KINDS, ArmorKind } from '../models/armor-kind';

@Component({
  selector: 'app-armor',
  template: `
    <h1>防具</h1>

    <mat-form-field>
      <mat-select placeholder="防具種別" #select (selectionChange)="applyFilter(select.value)">
        <mat-option>すべて</mat-option>
        <mat-option *ngFor="let kind of armorKinds" [value]="kind">
          {{kind.name}}
        </mat-option>
      </mat-select>
    </mat-form-field>

    <table mat-table [dataSource]="armors" matSort class="mat-elevation-z8">

      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef>名称</th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container matColumnDef="kind">
        <th mat-header-cell *matHeaderCellDef>種別</th>
        <td mat-cell *matCellDef="let element"> {{armorKinds[element.kind].name}} </td>
      </ng-container>

      <ng-container matColumnDef="price">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>価格</th>
        <td mat-cell *matCellDef="let element"> {{element.price}} </td>
      </ng-container>

      <ng-container matColumnDef="zan">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>斬</th>
        <td mat-cell *matCellDef="let element"> {{element.zan}} </td>
      </ng-container>

      <ng-container matColumnDef="ou">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>殴</th>
        <td mat-cell *matCellDef="let element"> {{element.ou}} </td>
      </ng-container>

      <ng-container matColumnDef="totsu">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>突</th>
        <td mat-cell *matCellDef="let element"> {{element.totsu}} </td>
      </ng-container>

      <ng-container matColumnDef="sha">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>射</th>
        <td mat-cell *matCellDef="let element"> {{element.sha}} </td>
      </ng-container>

      <ng-container matColumnDef="netsu">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>熱</th>
        <td mat-cell *matCellDef="let element"> {{element.netsu}} </td>
      </ng-container>

      <ng-container matColumnDef="rei">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>冷</th>
        <td mat-cell *matCellDef="let element"> {{element.rei}} </td>
      </ng-container>

      <ng-container matColumnDef="rai">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>雷</th>
        <td mat-cell *matCellDef="let element"> {{element.rai}} </td>
      </ng-container>

      <ng-container matColumnDef="jou">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>状</th>
        <td mat-cell *matCellDef="let element"> {{element.jou}} </td>
      </ng-container>

      <ng-container matColumnDef="against">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>耐性</th>
        <td mat-cell *matCellDef="let element"> {{element.jou}} </td>
      </ng-container>

      <ng-container matColumnDef="weight">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>重量</th>
        <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
      </ng-container>

      <ng-container matColumnDef="remarks">
        <th mat-header-cell *matHeaderCellDef>備考</th>
        <td mat-cell *matCellDef="let element"> {{element.remarks.length === 0 ? '-' : element.remarks}} </td>
      </ng-container>

      <ng-container matColumnDef="whereToGet">
        <th mat-header-cell *matHeaderCellDef>入手場所</th>
        <td mat-cell *matCellDef="let element"> {{element.whereToGet}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true;"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

    </table>
  `,
  styles: [`
  `]
})
export class ArmorComponent implements OnInit {

  displayedColumns: string[] = [
    'name', 'kind',
    'zan', 'ou', 'totsu', 'sha',
    'netsu', 'rei', 'rai', 'jou',
    'weight', 'remarks'
  ];

  armors = new MatTableDataSource(ARMORS);
  armorKinds = ARMOR_KINDS;

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.armors.sort = this.sort;
    this.armors.filterPredicate = (data, filter) => {
      return data.kind === Number.parseInt(filter, 10);
    };
  }

  applyFilter(value: ArmorKind) {
    this.armors.filter = value ? value.id.toString() : '';
  }

}
