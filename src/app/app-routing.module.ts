import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerComponent} from "./player/player.component";
import {InformationComponent} from "./information/information.component";
import {CharactersComponent} from "./characters/characters.component";
import {SessionComponent} from "./session/session.component";
import {CampaignComponent} from "./campaign/campaign.component";
import {AccountComponent} from "./account/account.component";


const routes: Routes = [
  {'path': '', component: InformationComponent},
  {'path': 'player', component: PlayerComponent},
  {'path': 'character', component: CharactersComponent},
  {'path': 'session', component: SessionComponent},
  {'path': 'campaign', component: CampaignComponent},
  {'path': 'account', component: AccountComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
