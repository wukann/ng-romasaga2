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

    <table cdk-table [dataSource]="armors" matSort  class="ui celled table">

      <ng-container cdkColumnDef="name">
        <th cdk-header-cell *cdkHeaderCellDef>名称</th>
        <td cdk-cell *cdkCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container cdkColumnDef="kind">
        <th cdk-header-cell *cdkHeaderCellDef>種別</th>
        <td cdk-cell *cdkCellDef="let element"> {{armorKinds[element.kind].name}} </td>
      </ng-container>

      <ng-container cdkColumnDef="price">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>価格</th>
        <td cdk-cell *cdkCellDef="let element" class="right aligned"> {{element.price}} </td>
      </ng-container>

      <ng-container cdkColumnDef="zan">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>斬</th>
        <td cdk-cell *cdkCellDef="let element" class="right aligned"> {{element.zan}} </td>
      </ng-container>

      <ng-container cdkColumnDef="ou">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>殴</th>
        <td cdk-cell *cdkCellDef="let element" class="right aligned"> {{element.ou}} </td>
      </ng-container>

      <ng-container cdkColumnDef="totsu">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>突</th>
        <td cdk-cell *cdkCellDef="let element" class="right aligned"> {{element.totsu}} </td>
      </ng-container>

      <ng-container cdkColumnDef="sha">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>射</th>
        <td cdk-cell *cdkCellDef="let element" class="right aligned"> {{element.sha}} </td>
      </ng-container>

      <ng-container cdkColumnDef="netsu">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>熱</th>
        <td cdk-cell *cdkCellDef="let element" class="right aligned"> {{element.netsu}} </td>
      </ng-container>

      <ng-container cdkColumnDef="rei">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>冷</th>
        <td cdk-cell *cdkCellDef="let element" class="right aligned"> {{element.rei}} </td>
      </ng-container>

      <ng-container cdkColumnDef="rai">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>雷</th>
        <td cdk-cell *cdkCellDef="let element" class="right aligned"> {{element.rai}} </td>
      </ng-container>

      <ng-container cdkColumnDef="jou">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>状</th>
        <td cdk-cell *cdkCellDef="let element" class="right aligned"> {{element.jou}} </td>
      </ng-container>

      <ng-container cdkColumnDef="against">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>耐性</th>
        <td cdk-cell *cdkCellDef="let element"> {{element.jou}} </td>
      </ng-container>

      <ng-container cdkColumnDef="weight">
        <th cdk-header-cell *cdkHeaderCellDef mat-sort-header>重量</th>
        <td cdk-cell *cdkCellDef="let element" class="right aligned"> {{element.weight}} </td>
      </ng-container>

      <ng-container cdkColumnDef="remarks">
        <th cdk-header-cell *cdkHeaderCellDef>備考</th>
        <td cdk-cell *cdkCellDef="let element"> {{element.remarks.length === 0 ? '-' : element.remarks}} </td>
      </ng-container>

      <ng-container cdkColumnDef="whereToGet">
        <th cdk-header-cell *cdkHeaderCellDef>入手場所</th>
        <td cdk-cell *cdkCellDef="let element"> {{element.whereToGet}} </td>
      </ng-container>

      <tr cdk-header-row *cdkHeaderRowDef="displayedColumns; sticky: true;"></tr>
      <tr cdk-row *cdkRowDef="let row; columns: displayedColumns;"></tr>

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
