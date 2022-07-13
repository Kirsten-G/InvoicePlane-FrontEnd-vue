import { createRouter, createWebHistory } from 'vue-router';

import ClientsList from './pages/clients/ClientsList.vue';
import ClientForm from './pages/clients/ClientForm.vue';
import ClientDetails from './pages/clients/ClientDetails.vue';

import QuotesList from './pages/quotes/QuotesList.vue';
import QuoteForm from './pages/quotes/QuoteForm.vue';
import QuoteDetails from './pages/quotes/QuoteDetails.vue';

import InvoicesList from './pages/invoices/InvoicesList.vue';
import InvoiceForm from './pages/invoices/InvoiceForm.vue';
import InvoiceDetails from './pages/invoices/InvoiceDetails.vue';
import InvoiceRecurring from './pages/invoices/InvoicesRecurring.vue';

import PaymentsList from './pages/payments/PaymentsList.vue';
import PaymentEnter from './pages/payments/PaymentDetails.vue';
import PaymentLogs from './pages/payments/PaymentsLogs.vue';

import ProductsList from './pages/products/ProductsList.vue';
import ProductDetails from './pages/products/ProductDetails.vue';
import ProductForm from './pages/products/ProductForm.vue';
import ProductFamilies from './pages/products/ProductFamilies.vue';
import ProductFamily from './pages/products/ProductFamily.vue';
import ProductUnits from './pages/products/ProductUnits.vue';
import ProductUnit from './pages/products/ProductUnit.vue';

import ProjectsList from './pages/tasks/ProjectsList.vue';
import ProjectForm from './pages/tasks/ProjectForm.vue';
import ProjectDetails from './pages/tasks/ProjectDetails.vue';
import TasksList from './pages/tasks/TasksList.vue';
import TaskForm from './pages/tasks/TaskForm.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/clients', component: ClientsList },
    { path: '/clients/form', component: ClientForm },
    { path: '/clients/:id', component: ClientDetails },

    { path: '/quotes', component: QuotesList },
    { paths: '/quotes/form', component: QuoteForm },
    { path: '/quotes/:id', component: QuoteDetails },

    { path: '/invoices', component: InvoicesList },
    { path: '/invoices/form', component: InvoiceForm },
    { path: '/invoices/:id', component: InvoiceDetails },
    { path: '/invoices/recurring', component: InvoiceRecurring },

    { path: '/payments', component: PaymentsList },
    { path: '/payments/enter', component: PaymentEnter },
    { path: '/payments/logs', component: PaymentLogs },

    { path: '/products', component: ProductsList },
    { path: '/products/form', component: ProductForm },
    { path: '/products/:id', component: ProductDetails },
    { path: '/products/families', component: ProductFamilies },
    { path: '/products/families/:id', component: ProductFamily },
    { path: '/products/units', component: ProductUnits },
    { path: '/products/units/:id', component: ProductUnit },

    { path: '/tasks/tasks', component: TasksList },
    { path: '/tasks/tasks/form', component: TaskForm },
    { path: '/tasks/projects', component: ProjectsList },
    { path: '/tasks/projects/form', component: ProjectForm },
    { path: '/tasks/projects/:id', component: ProjectDetails },
  ],
});

export default router;
