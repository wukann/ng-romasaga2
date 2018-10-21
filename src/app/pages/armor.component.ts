import { Component, OnInit } from '@angular/core';
import { Armor, ARMORS } from '../models/armor';

@Component({
  selector: 'app-armor',
  template: `
    <h1>防具</h1>

    <table mat-table [dataSource]="armors" class="mat-elevation-z8">

      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef>名称</th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container matColumnDef="kind">
        <th mat-header-cell *matHeaderCellDef>種別</th>
        <td mat-cell *matCellDef="let element"> {{element.kind}} </td>
      </ng-container>

      <ng-container matColumnDef="price">
        <th mat-header-cell *matHeaderCellDef>価格</th>
        <td mat-cell *matCellDef="let element"> {{element.price}} </td>
      </ng-container>

      <ng-container matColumnDef="zan">
        <th mat-header-cell *matHeaderCellDef>斬</th>
        <td mat-cell *matCellDef="let element"> {{element.zan}} </td>
      </ng-container>

      <ng-container matColumnDef="ou">
        <th mat-header-cell *matHeaderCellDef>殴</th>
        <td mat-cell *matCellDef="let element"> {{element.ou}} </td>
      </ng-container>

      <ng-container matColumnDef="totsu">
        <th mat-header-cell *matHeaderCellDef>突</th>
        <td mat-cell *matCellDef="let element"> {{element.totsu}} </td>
      </ng-container>

      <ng-container matColumnDef="sha">
        <th mat-header-cell *matHeaderCellDef>射</th>
        <td mat-cell *matCellDef="let element"> {{element.sha}} </td>
      </ng-container>

      <ng-container matColumnDef="netsu">
        <th mat-header-cell *matHeaderCellDef>熱</th>
        <td mat-cell *matCellDef="let element"> {{element.netsu}} </td>
      </ng-container>

      <ng-container matColumnDef="rei">
        <th mat-header-cell *matHeaderCellDef>冷</th>
        <td mat-cell *matCellDef="let element"> {{element.rei}} </td>
      </ng-container>

      <ng-container matColumnDef="rai">
        <th mat-header-cell *matHeaderCellDef>雷</th>
        <td mat-cell *matCellDef="let element"> {{element.rai}} </td>
      </ng-container>

      <ng-container matColumnDef="jou">
        <th mat-header-cell *matHeaderCellDef>状</th>
        <td mat-cell *matCellDef="let element"> {{element.jou}} </td>
      </ng-container>

      <ng-container matColumnDef="against">
        <th mat-header-cell *matHeaderCellDef>耐性</th>
        <td mat-cell *matCellDef="let element"> {{element.jou}} </td>
      </ng-container>

      <ng-container matColumnDef="weight">
        <th mat-header-cell *matHeaderCellDef>重量</th>
        <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
      </ng-container>

      <ng-container matColumnDef="remarks">
        <th mat-header-cell *matHeaderCellDef>備考</th>
        <td mat-cell *matCellDef="let element"> {{element.remarks}} </td>
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
    table {
      width: 100%;
    }
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
