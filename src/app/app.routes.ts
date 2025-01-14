import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DescriptionComponent } from './pages/description/description.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuCatalogueComponent } from './pages/menu-catalogue/menu-catalogue.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResultatComponent } from './pages/resultat/resultat.component';
import { InsecteComponent } from './Queti/insecte/insecte.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FavorisComponent } from './pages/favoris/favoris.component';
import { Etape1Component } from './pages/questions/etape1/etape1.component';
import { Etape2Component } from './pages/questions/etape2/etape2.component';

export const routes: Routes = [

    {path: '', component:AccueilComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'resultat', component:ResultatComponent},
    {path: 'favoris', component:FavorisComponent},
    {path: 'etape1', component:Etape1Component},
    {path: 'etape2', component:Etape2Component},
    {path: 'ordre', component:MenuCatalogueComponent},
    {path: 'ordre/:ordreID', component:CatalogueComponent},
    {path: 'insecte/:insecteID', component:InsecteComponent},
    {path: 'parametres', component:SettingsComponent},
    {path: '**', component:AccueilComponent},

];

