// assets
import {
  IconDashboard,
  IconTemplate,
  IconBrush,
  IconListNumbers,
  IconTimelineEvent,
  IconArtboard,
  IconPlayerPlay,
  IconApps,
  IconHeartRateMonitor,
  IconActivityHeartbeat,
  IconAffiliate,
  IconPigMoney
} from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconTemplate,
  IconBrush,
  IconListNumbers,
  IconTimelineEvent,
  IconArtboard,
  IconPlayerPlay,
  IconApps,
  IconHeartRateMonitor,
  IconActivityHeartbeat,
  IconAffiliate,
  IconPigMoney
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'Home',
  title: 'S.U.N.A',
  caption: 'Simple Unified Network Access... to plan, build and monitor your Applications',
  type: 'group',
  // url: '/setup',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'plan',
      title: 'Plan',
      type: 'collapse',
      caption: 'Create Blueprints. Design Applications and Browse Catalogs',
      icon: icons.IconArtboard,
      breadcrumbs: false,
      children: [
        {
          id: 'plan-blueprints',
          title: 'Blueprints',
          type: 'item',
          url: '/blueprint',
          icon: icons.IconTemplate,
          breadcrumbs: false
        },
        {
          id: 'plan-Design',
          title: 'Design',
          type: 'item',
          url: '/designer',
          icon: icons.IconBrush,
          breadcrumbs: false
        },
        {
          id: 'plan-Catalog',
          title: 'Catalog',
          type: 'item',
          url: '/catalog',
          icon: icons.IconListNumbers,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'build',
      title: 'Build',
      caption: 'Deploy Blueprints and Application Designs',
      type: 'collapse',
      icon: icons.IconPlayerPlay,
      breadcrumbs: false,
      children: [
        {
          id: 'build-application',
          title: 'Applications',
          type: 'item',
          url: '/setup/application',
          icon: icons.IconApps,
          breadcrumbs: false
        },
        {
          id: 'build-Deploy',
          title: 'Deploy',
          type: 'item',
          url: '/setup/application',
          icon: icons.IconTimelineEvent,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'monitor',
      title: 'Monitor',
      caption: 'Monitor your deployed Applications',
      type: 'collapse',
      icon: icons.IconHeartRateMonitor,
      breadcrumbs: false,
      children: [
        {
          id: 'monitor-application',
          title: 'Applications',
          type: 'item',
          url: '/setup/application',
          icon: icons.IconApps,
          breadcrumbs: false
        },
        {
          id: 'monitor-Instances',
          title: 'Instances',
          type: 'item',
          url: '/setup/components',
          icon: icons.IconActivityHeartbeat,
          breadcrumbs: false
        },
        {
          id: 'monitor-Interfaces',
          title: 'Integrations',
          type: 'item',
          url: '/setup/integration',
          icon: icons.IconAffiliate,
          breadcrumbs: false
        },
        {
          id: 'monitor-Cost',
          title: 'Cost',
          type: 'item',
          url: '/Design',
          icon: icons.IconPigMoney,
          breadcrumbs: false
        }
      ]
    }
  ]
};

// const dashboard = {
//   id: 'dashboard',
//   title: 'Dashboard',
//   caption: ' Caption goes here',
//   chip: { label: 'new', color: 'red' },
//   type: 'group',
//   children: [
//     {
//       id: 'default',
//       title: 'Dashboard',
//       type: 'item',
//       url: '/dashboard/default',
//       icon: icons.IconDashboard,
//       breadcrumbs: false
//     },
//     {
//       id: 'blueprint',
//       title: 'Blueprints',
//       type: 'item',
//       url: '/build/blueprints',
//       icon: icons.IconTemplate,
//       breadcrumbs: false
//     }
//   ]
// };

export default dashboard;
