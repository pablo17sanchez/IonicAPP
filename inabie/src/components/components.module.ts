import { NgModule } from '@angular/core';
import { PagesTerminosComponent } from './pages-terminos/pages-terminos';
import { ComponentsFooterComponent } from './components-footer/components-footer';
import { PagesFooterComponent } from './pages-footer/pages-footer';
@NgModule({
	declarations: [PagesTerminosComponent,
    ComponentsFooterComponent,
    PagesFooterComponent,
    PagesFooterComponent],
	imports: [],
	exports: [PagesTerminosComponent,
    ComponentsFooterComponent,
    PagesFooterComponent,
    PagesFooterComponent]
})
export class ComponentsModule {}
