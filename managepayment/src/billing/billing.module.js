import angular from 'angular';
import { BillingComponent } from './billing.component';

export const billingModule = angular
    .module('billing', [
    ])
    .component('billing', BillingComponent)
    .name;