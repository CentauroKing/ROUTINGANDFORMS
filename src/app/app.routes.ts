import { Routes } from '@angular/router';
import { FormNormal} from './form-normal/form-normal';
import { FormRectivo } from './form-rectivo/form-rectivo';



export const routes: Routes = [
{path: '',
    title: 'Fomulario Normal',
    component: FormNormal,
},
{path: 'form-reactive',
    title: 'Fomulario Reactivo',
    component: FormRectivo,
},

];
