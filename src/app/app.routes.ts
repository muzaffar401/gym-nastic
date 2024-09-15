import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VideoComponent } from './video/video.component';
import { PictureComponent } from './picture/picture.component';


export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'video',component:VideoComponent},
    {path:'picture',component:PictureComponent},
    
];


