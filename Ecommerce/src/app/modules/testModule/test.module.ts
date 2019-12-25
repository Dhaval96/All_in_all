import {NgModule} from '@angular/core';
import {TestRoutingModule} from './test-routing.module';
import {TestComponent} from './test/test.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule],
  providers: [],
  exports: []
})

export class TestModule {
}
