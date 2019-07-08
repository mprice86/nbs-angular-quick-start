import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { NbsColoursComponent } from './examples/nbs-colours/nbs-colours.component';
import { NbsTypographyComponent } from './examples/nbs-typography/nbs-typography.component';
import { NbsFormsComponent } from './examples/nbs-forms/nbs-forms.component';
import { NbsButtonsComponent } from './examples/nbs-buttons/nbs-buttons.component';
import { NbsChipsComponent } from './examples/nbs-chips/nbs-chips.component';
import { NbsCardsComponent } from './examples/nbs-cards/nbs-cards.component';
import { NbsMenusComponent } from './examples/nbs-menus/nbs-menus.component';
import { NbsModalsComponent } from './examples/nbs-modals/nbs-modals.component';
import { NbsTooltipsComponent } from './examples/nbs-tooltips/nbs-tooltips.component';
import { NbsToastsComponent } from './examples/nbs-toasts/nbs-toasts.component';
import { NbsToolbarComponent } from './examples/nbs-toolbar/nbs-toolbar.component';
import { NbsSidebarComponent } from './examples/nbs-sidebar/nbs-sidebar.component';
import { NbsLayoutsComponent } from './examples/nbs-layouts/nbs-layouts.component';
import { NbsAnimationsComponent } from './examples/nbs-animations/nbs-animations.component';
import { NbsExampleDialogComponent } from './examples/nbs-modals/nbs-example-dialog/nbs-example-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    NbsColoursComponent,
    NbsTypographyComponent,
    NbsFormsComponent,
    NbsButtonsComponent,
    NbsChipsComponent,
    NbsCardsComponent,
    NbsMenusComponent,
    NbsModalsComponent,
    NbsTooltipsComponent,
    NbsToastsComponent,
    NbsToolbarComponent,
    NbsSidebarComponent,
    NbsLayoutsComponent,
    NbsAnimationsComponent,
    NbsExampleDialogComponent,
  ],
  entryComponents: [
    NbsExampleDialogComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
