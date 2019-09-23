import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { platformBrowserDynamic } from 'angular-ts-decorators';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
