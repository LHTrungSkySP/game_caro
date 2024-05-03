import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
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
        path: 'caro',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4500/remoteEntry.js',
            exposedModule: './Module'
        }).then(m => m.AppModule)
    }
];
