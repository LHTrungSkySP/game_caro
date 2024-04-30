// import { bootstrapApplication } from '@angular/platform-browser';
// import { GameHallComponent } from './app/components/game-hall/game-hall.component';

// bootstrapApplication(GameHallComponent)
//   .catch((err) => console.error(err));


import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RemoteEntryModule } from "./app/remote-entry/remote-entry.module";

platformBrowserDynamic().bootstrapModule(RemoteEntryModule).catch(err => console.error(err));
