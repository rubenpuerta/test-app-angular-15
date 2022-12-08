import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ApiInfo } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  @Input()
  public data: ApiInfo[] | null = [];
  @Input()
  public isLoading: boolean | null = false;

  @Output()
  public goToNextPage = new EventEmitter<void>()
}
