import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  NO_ERRORS_SCHEMA,
  output,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-site-button",
  standalone: true,
  imports: [],
  templateUrl: "./site-button.component.html",
  styleUrl: "./site-button.component.scss",
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteButtonComponent {
  #router = inject(Router);

  buttonClass = input("");
  label = input("");
  icon = input("");
  url = input("");

  onClick = output();

  btnClick() {
    if (this.url()) {
      // Navigate to the provided URL.
      this.#router.navigateByUrl(this.url());
    } else {
      // Emit an event if no URL is provided.
      this.onClick.emit();
    }
  }
}
