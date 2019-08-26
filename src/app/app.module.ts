import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { CharactersComponent } from './characters/characters.component';
import { SessionComponent } from './session/session.component';
import { CampaignComponent } from './campaign/campaign.component';
import { AccountComponent } from './account/account.component';
import { InformationComponent } from './information/information.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { MenuBlockDirective } from './menu-block.directive';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuRowComponent } from './menu-list/menu-row/menu-row.component';
import { HomebrewComponent } from './public/homebrew/homebrew.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CharactersComponent,
    SessionComponent,
    CampaignComponent,
    AccountComponent,
    InformationComponent,
    MenuBlockDirective,
    MenuListComponent,
    MenuRowComponent,
    HomebrewComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
