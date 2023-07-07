// assets
import { IconDashboard, IconBrush } from '@tabler/icons';

// constant
const icons = { IconBrush };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const plan = {
  id: 'plan',
  title: 'Plan',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Design',
      type: 'item',
      url: '/designer',
      icon: icons.IconBrush,
      breadcrumbs: false
    },
    {
      id: 'createBlueprint',
      title: 'Create Blueprint',
      type: 'item',
      url: '/designer',
      icon: icons.IconBrush,
      breadcrumbs: false
    }
  ]
};

export default plan;
