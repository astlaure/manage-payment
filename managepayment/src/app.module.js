import angular from 'angular';
import angularRoute from 'angular-route';
import { billingModule } from './billing/billing.module';

export const AppModule = angular
    .module('app', [
        angularRoute,
        billingModule
    ])
    .name;