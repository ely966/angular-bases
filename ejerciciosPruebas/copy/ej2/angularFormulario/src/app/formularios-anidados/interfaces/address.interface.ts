import { FormControl } from '@angular/forms';

export interface Address {
  address: FormControl<string | null>;
  city: FormControl<string | null>;
  code: FormControl<number | null>;
}
