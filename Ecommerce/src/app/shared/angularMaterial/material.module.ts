import {NgModule} from '@angular/core';
import {MatButtonModule, MatRadioModule} from '@angular/material';

@NgModule({
  imports:[MatButtonModule, MatRadioModule],
  declarations:[],
  providers:[],
  exports:[MatButtonModule, MatRadioModule]
})
export class MaterialModule {
}
