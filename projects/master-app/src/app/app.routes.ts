import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

export const routes: Routes = [
    
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'admin',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:5300/remoteEntry.js',
            exposedModule: './Module'
        }).then(m => m.RemoteEntryModule)
    },
    {
        path: 'game',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:5400/remoteEntry.js',
            exposedModule: './Module'
        }).then(m => m.RemoteEntryModule)
    },
    {
        path: '',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4500/remoteEntry.js',
            exposedModule: './Module'
        }).then(m => m.AppModule)
    },

];
