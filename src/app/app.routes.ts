import { Routes } from '@angular/router';
import { FormNormal} from './form-normal/form-normal';
import { FormRectivo } from './form-rectivo/form-rectivo';



export const routes: Routes = [
{path: 'form-normal',
    title: 'Fomulario Normal',
    component: FormNormal,
},
{path: 'form-rectivo',
    title: 'Super Fomulario (Reactivo)',
    component: FormRectivo,
},

];