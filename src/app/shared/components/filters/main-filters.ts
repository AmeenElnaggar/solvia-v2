import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdvancedFiltersComponent } from '../advanced-filters/advanced-filters';
import { ContactFormComponent } from '../contact-form/contact-form';

@Component({
  selector: 'app-main-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectModule, ButtonModule],
  providers: [DialogService],
  templateUrl: './main-filters.html',
  styleUrl: './main-filters.scss',
})
export class MainFilterComponent {
  private fb = inject(FormBuilder);
  private dialogService = inject(DialogService);

  ref: DynamicDialogRef | undefined;

  filterForm: FormGroup = this.fb.group({
    area: [null],
    type: [null],
    bedrooms: [null],
  });

  areas = [
    { label: 'New Cairo', value: 'new-cairo' },
    { label: '6th October', value: 'october' },
    { label: 'Sheikh Zayed', value: 'zayed' },
    { label: 'North Coast', value: 'north-coast' },
  ];

  types = [
    { label: 'Apartment', value: 'apartment' },
    { label: 'Villa', value: 'villa' },
    { label: 'Studio', value: 'studio' },
    { label: 'Twin House', value: 'twin-house' },
  ];

  bedrooms = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5+', value: 5 },
  ];

  openAdvancedFilters() {
    this.ref = this.dialogService.open(ContactFormComponent, {
      width: '90vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });
  }

  search() {
    const formValues = this.filterForm.value;

    console.log('Applied Filters:', formValues);
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
