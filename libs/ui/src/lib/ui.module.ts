import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [],
  declarations: [BannerComponent, SliderComponent],
  exports: [BannerComponent, SliderComponent],
})
export class UiModule {}
