import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DataService } from '../../core/services/data.service';
import { Workshop } from '../../core/models/workshop.model';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  workshops: Workshop[] = [];
  selectedWorkshop?: Workshop;

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataService.getWorkshops().subscribe(list => {
      this.workshops = list;
    });
  }

  openDetails(workshop: Workshop, templateRef: TemplateRef<any>): void {
    this.selectedWorkshop = workshop;
    this.dialog.open(templateRef, {
      width: '90%',
      maxWidth: '650px',
      panelClass: 'premium-dialog-panel'
    });
  }
}
