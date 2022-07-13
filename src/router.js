import { createRouter, createWebHistory } from 'vue-router';

import DashBoard from './pages/Dashboard/DashBoard.vue';

import ClientsList from './pages/Clients/ClientsList.vue';
import ClientForm from './pages/Clients/ClientForm.vue';
import ClientDetails from './pages/Clients/ClientDetails.vue';

import QuotesList from './pages/Quotes/QuotesList.vue';
import QuoteForm from './pages/Quotes/QuoteForm.vue';
import QuoteDetails from './pages/Quotes/QuoteDetails.vue';

import InvoicesList from './pages/Invoices/InvoicesList.vue';
import InvoiceForm from './pages/Invoices/InvoiceForm.vue';
import InvoiceDetails from './pages/Invoices/InvoiceDetails.vue';
import InvoiceRecurring from './pages/Invoices/InvoicesRecurring.vue';

import PaymentsList from './pages/Payments/PaymentsList.vue';
import PaymentEnter from './pages/Payments/PaymentDetails.vue';
import PaymentLogs from './pages/Payments/PaymentsLogs.vue';

import ProductsList from './pages/Products/ProductsList.vue';
import ProductDetails from './pages/Products/ProductDetails.vue';
import ProductForm from './pages/Products/ProductForm.vue';
import ProductFamilies from './pages/Products/ProductFamilies.vue';
import ProductFamily from './pages/Products/ProductFamily.vue';
import ProductUnits from './pages/Products/ProductUnits.vue';
import ProductUnit from './pages/Products/ProductUnit.vue';

import ProjectsList from './pages/Tasks/ProjectsList.vue';
import ProjectForm from './pages/Tasks/ProjectForm.vue';
import ProjectDetails from './pages/Tasks/ProjectDetails.vue';
import TasksList from './pages/Tasks/TasksList.vue';
import TaskForm from './pages/Tasks/TaskForm.vue';

import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/dashboard' },

    { path: '/dashboard', component: DashBoard },

    { path: '/clients', component: ClientsList },
    { path: '/clients/form', component: ClientForm },
    { path: '/clients/:id', component: ClientDetails },

    { path: '/quotes', component: QuotesList },
    { path: '/quotes/form', component: QuoteForm },
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

    { path: '/:notFound(.*)', component: NotFoundPage },
  ],
});

export default router;
