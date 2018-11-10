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

    <mat-table [dataSource]="armors" matSort class="mat-elevation-z8">

      <ng-container matColumnDef="name">
        <mat-header-cell *matHeaderCellDef>名称</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="kind">
        <mat-header-cell *matHeaderCellDef>種別</mat-header-cell>
        <mat-cell *matCellDef="let element" class="kind-cell"> {{armorKinds[element.kind].name}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="price">
        <mat-header-cell *matHeaderCellDef mat-sort-header>価格</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.price}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="zan">
        <mat-header-cell *matHeaderCellDef mat-sort-header>斬</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.zan}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="ou">
        <mat-header-cell *matHeaderCellDef mat-sort-header>殴</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.ou}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="totsu">
        <mat-header-cell *matHeaderCellDef mat-sort-header>突</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.totsu}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="sha">
        <mat-header-cell *matHeaderCellDef mat-sort-header>射</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.sha}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="netsu">
        <mat-header-cell *matHeaderCellDef mat-sort-header>熱</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.netsu}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="rei">
        <mat-header-cell *matHeaderCellDef mat-sort-header>冷</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.rei}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="rai">
        <mat-header-cell *matHeaderCellDef mat-sort-header>雷</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.rai}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="jou">
        <mat-header-cell *matHeaderCellDef mat-sort-header>状</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.jou}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="against">
        <mat-header-cell *matHeaderCellDef mat-sort-header>耐性</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.jou}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="weight">
        <mat-header-cell *matHeaderCellDef mat-sort-header>重量</mat-header-cell>
        <mat-cell *matCellDef="let element" class="numeric-cell"> {{element.weight}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="remarks">
        <mat-header-cell *matHeaderCellDef>備考</mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.remarks.length === 0 ? '-' : element.remarks}} </mat-cell>
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
    .numeric-cell {
      justify-content: flex-end;
    }
    .kind-cell {
      justify-content: center;
    }
    .mat-header-cell {
      justify-content: center;
    }
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
