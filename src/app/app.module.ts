import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { TestThreeComponent } from './test-three/test-three.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  declarations: [TestOneComponent, TestTwoComponent, TestThreeComponent],
  bootstrap: [],
  entryComponents: [TestOneComponent, TestTwoComponent, TestThreeComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const TestOneElement = createCustomElement(TestOneComponent, {
      injector: this.injector
    });
    customElements.define('app-test-one', TestOneElement);
    const TestTwoElement = createCustomElement(TestTwoComponent, {
      injector: this.injector
    });
    customElements.define('app-test-two', TestTwoElement);
    const TestThreeElement = createCustomElement(TestThreeComponent, {
      injector: this.injector
    });
    customElements.define('app-test-three', TestThreeElement);
  }
}
