import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

/*const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

*/
const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const SignIn = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));


const routes = [
    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    //{ path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    //{ path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    //{ path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
   //{ path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    //{ path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    //{ path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/malades/ajouter', exact: true, name: 'Ajouter Malade', component: FormsElements },
    { path: '/malades/tables', exact: true, name: 'Listes des cas', component: BootstrapTable },
    { path: '/login', exact: true, name: 'Login', component: SignIn },
    { path: '/malades/modifier', exact: true, name: 'Modifier Malade', component: FormsElements },
    //{ path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    //{ path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    //{ path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    //{ path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
];

export default routes;