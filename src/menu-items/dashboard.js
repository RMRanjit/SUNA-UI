// assets
import { IconDashboard, IconTemplate } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconTemplate };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
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
      id: 'blueprint',
      title: 'Blueprints',
      type: 'item',
      url: '/build/blueprints',
      icon: icons.IconTemplate,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
