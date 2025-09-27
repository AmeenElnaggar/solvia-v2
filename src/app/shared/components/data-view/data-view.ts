import {
  Component,
  contentChild,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  input,
  model,
  TemplateRef,
} from '@angular/core';
import { DataView } from 'primeng/dataview';
import { Project } from '../../model/project.model';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'app-data-view',
  imports: [DataView, NgTemplateOutlet, CommonModule],
  templateUrl: './data-view.html',
  styleUrl: './data-view.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DataViewComponent {
  records = model<Project[]>([]);

  viewBodyTemplate = contentChild.required<TemplateRef<any>>('viewBodyTemplate');

  // constructor() {
  //   effect(() => {
  //     console.log(this.records());
  //   });
  // }
}
