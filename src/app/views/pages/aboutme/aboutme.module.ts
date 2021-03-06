import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { RouterModule } from '@angular/router';
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from '../../../core/core.module';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutmeComponent],
  imports: [
  		FormsModule, ReactiveFormsModule,
        CommonModule,PartialsModule,CoreModule,RichTextEditorAllModule,
		RouterModule.forChild([
			{
				path: '',
				component: AboutmeComponent
			},
		]),
  ]
})
export class AboutmeModule { }
