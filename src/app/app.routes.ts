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
import { Etape3Component } from './pages/questions/etape3/etape3.component';
import { Etape4Component } from './pages/questions/etape4/etape4.component';
import { Etape5Component } from './pages/questions/etape5/etape5.component';
import { Etape6Component } from './pages/questions/etape6/etape6.component';
import { Etape7Component } from './pages/questions/etape7/etape7.component';
import { Etape8Component } from './pages/questions/etape8/etape8.component';
import { Etape9Component } from './pages/questions/etape9/etape9.component';
import { Etape10Component } from './pages/questions/etape10/etape10.component';
import { Etape11Component } from './pages/questions/etape11/etape11.component';
import { Etape12Component } from './pages/questions/etape12/etape12.component';
import { Etape13Component } from './pages/questions/etape13/etape13.component';
import { Etape14Component } from './pages/questions/etape14/etape14.component';
import { Etape15Component } from './pages/questions/etape15/etape15.component';
import { Etape16Component } from './pages/questions/etape16/etape16.component';
import { Etape17Component } from './pages/questions/etape17/etape17.component';
import { Etape18Component } from './pages/questions/etape18/etape18.component';
import { Etape19Component } from './pages/questions/etape19/etape19.component';
import { Etape20Component } from './pages/questions/etape20/etape20.component';
import { Etape21Component } from './pages/questions/etape21/etape21.component';

export const routes: Routes = [

    {path: '', component:AccueilComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'resultat', component:ResultatComponent},
    {path: 'favoris', component:FavorisComponent},
    {path: 'etape1', component:Etape1Component},
    {path: 'etape2', component:Etape2Component},
    {path: 'etape3', component:Etape3Component},
    {path: 'etape4', component:Etape4Component},
    {path: 'etape5', component:Etape5Component},
    {path: 'etape6', component:Etape6Component},
    {path: 'etape7', component:Etape7Component},
    {path: 'etape8', component:Etape8Component},
    {path: 'etape9', component:Etape9Component},
    {path: 'etape10', component:Etape10Component},
    {path: 'etape11', component:Etape11Component},
    {path: 'etape12', component:Etape12Component},
    {path: 'etape13', component:Etape13Component},
    {path: 'etape14', component:Etape14Component},
    {path: 'etape15', component:Etape15Component},
    {path: 'etape16', component:Etape16Component},
    {path: 'etape17', component:Etape17Component},
    {path: 'etape18', component:Etape18Component},
    {path: 'etape19', component:Etape19Component},
    {path: 'etape20', component:Etape20Component},
    {path: 'etape21', component:Etape21Component},
    {path: 'ordre', component:MenuCatalogueComponent},
    {path: 'ordre/:ordreID', component:CatalogueComponent},
    {path: 'insecte/:insecteID', component:InsecteComponent},
    {path: 'parametres', component:SettingsComponent},
    {path: '**', component:AccueilComponent},

];

