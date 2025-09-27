import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-advanced-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SliderModule, ButtonModule],
  template: `
    <div class="advanced-filters">
      <form [formGroup]="advancedForm" class="filters-form">
        <!-- Price Range Slider -->
        <div class="filter-group">
          <label class="filter-label">Price Range</label>
          <p-slider
            formControlName="priceRange"
            [range]="true"
            [min]="10000"
            [max]="500000"
            class="price-slider"
          />
          <div class="range-display">
            <span class="range-value">{{
              advancedForm.get('priceRange')?.value[0] | currency : 'EGP' : 'symbol' : '1.0-0'
            }}</span>
            <span class="range-value">{{
              advancedForm.get('priceRange')?.value[1] | currency : 'EGP' : 'symbol' : '1.0-0'
            }}</span>
          </div>
        </div>

        <!-- Unit Area Slider -->
        <div class="filter-group">
          <label class="filter-label">Unit Area (m²)</label>
          <p-slider
            formControlName="areaRange"
            [range]="true"
            [min]="50"
            [max]="500"
            class="area-slider"
          />
          <div class="range-display">
            <span class="range-value">{{ advancedForm.get('areaRange')?.value[0] }} m²</span>
            <span class="range-value">{{ advancedForm.get('areaRange')?.value[1] }} m²</span>
          </div>
        </div>

        <!-- Dialog Actions -->
        <div class="dialog-actions">
          <p-button
            type="button"
            label="Reset"
            severity="secondary"
            class="reset-btn"
            (onClick)="reset()"
          />
          <p-button
            type="button"
            label="Apply Filters"
            class="apply-btn"
            (onClick)="applyFilters()"
          />
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./advanced-filters.scss'],
})
export class AdvancedFiltersComponent implements OnInit {
  private fb = inject(FormBuilder);
  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);

  advancedForm: FormGroup = this.fb.group({
    priceRange: [[10000, 500000]],
    areaRange: [[50, 500]],
  });

  ngOnInit() {
    // Set initial values from dialog data if available
    if (this.config.data) {
      this.advancedForm.patchValue({
        priceRange: this.config.data.priceRange || [10000, 500000],
        areaRange: this.config.data.areaRange || [50, 500],
      });
    }
  }

  reset() {
    this.advancedForm.patchValue({
      priceRange: [10000, 500000],
      areaRange: [50, 500],
    });
  }

  applyFilters() {
    const formValues = this.advancedForm.value;
    this.ref.close(formValues);
  }

  closeDialog() {
    this.ref.close();
  }
}
