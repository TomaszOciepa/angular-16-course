import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-signal';

  value: WritableSignal<number> = signal(1);

  valueArray = signal([{ title: 'test' }]);

  readonlyValue: Signal<number> = computed(() => this.value() + 10);

  constructor() {
    effect(() => {
      console.log('wartość sygnału: ', this.value());
      console.log('wartość sygnału readOnly: ', this.readonlyValue());
    });
  }

  ngOnInit(): void {
    // console.log('wartość sygnału: ', this.value());
    // console.log('wartość sygnału readOnly: ', this.readonlyValue());
    // this.value.set(3);
    // console.log('wartość sygnału: ', this.value());
    this.value.update((value) => value + 5);
    // console.log('wartość sygnału: ', this.value());
    // console.log('wartość sygnału Array: ', this.valueArray());
    // this.valueArray.mutate((value) => {
    //   value[0].title = 'mango';
    // });
    // console.log('wartość sygnału Array: ', this.valueArray());
    // console.log('wartość sygnału readOnly: ', this.readonlyValue());
  }
}
