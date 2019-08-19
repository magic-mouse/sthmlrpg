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

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CharactersComponent,
    SessionComponent,
    CampaignComponent,
    AccountComponent,
    InformationComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
