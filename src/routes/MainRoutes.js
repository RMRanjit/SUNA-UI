import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

//setup routes
const SetupSubscription = Loadable(lazy(() => import('views/setup/subscription')));
const SetupOrganization = Loadable(lazy(() => import('views/setup/Organization')));
const SetupBusinessUnit = Loadable(lazy(() => import('views/setup/businessUnit')));
const SetupProgram = Loadable(lazy(() => import('views/setup/Program')));
const SetupProject = Loadable(lazy(() => import('views/setup/Project')));
const SetupApplication = Loadable(lazy(() => import('views/setup/Application')));
const SetupAppComponents = Loadable(lazy(() => import('views/setup/AppComponent')));
const SetupIntegration = Loadable(lazy(() => import('views/setup/AppIntegrations')));
const BuildBlueprint = Loadable(lazy(() => import('views/build/BlueprintPage')));

//designer routings
const DesignerPage = Loadable(lazy(() => import('views/designer/DesignerPage')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'build',
      children: [
        {
          path: '/build/blueprints',
          element: <BuildBlueprint />
        }
      ]
    },
    {
      path: 'designer',
      children: [
        {
          path: '/designer',
          element: <DesignerPage />
        },
        {
          path: '/designer/:Name',
          element: <DesignerPage />
        }
      ]
    },
    {
      path: 'setup',
      children: [
        {
          path: '/setup/subscription',
          element: <SetupSubscription />
        },
        {
          path: '/setup/organization',
          element: <SetupOrganization />
        },
        {
          path: '/setup/business-units',
          element: <SetupBusinessUnit />
        },
        {
          path: '/setup/program',
          element: <SetupProgram />
        },
        {
          path: '/setup/project',
          element: <SetupProject />
        },
        {
          path: '/setup/application',
          element: <SetupApplication />
        },
        {
          path: '/setup/components',
          element: <SetupAppComponents />
        },
        {
          path: '/setup/integration',
          element: <SetupIntegration />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
