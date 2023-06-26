// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconBrandCodepen, IconApi } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBrandCodepen,
  IconApi
};

// ==============================|| SETUP MENU ITEMS ||============================== //

const setup = {
  id: 'setup',
  title: 'Setup',
  type: 'group',
  children: [
    {
      id: 'setup-Subscription',
      title: 'Subscription',
      type: 'item',
      url: '/setup/subscription',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'setup-Organization',
      title: 'Organization',
      type: 'item',
      url: '/setup/organization',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'setup-BusinessUnits',
      title: 'Business Units',
      type: 'item',
      url: '/setup/business-units',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'setup-Program',
      title: 'Program',
      type: 'item',
      url: '/setup/program',
      icon: icons.IconWindmill,
      breadcrumbs: false
    },
    {
      id: 'setup-Project',
      title: 'Project',
      type: 'item',
      url: '/setup/project',
      icon: icons.IconBrandCodepen,
      breadcrumbs: false
    },
    {
      id: 'setup-Application',
      title: 'Application',
      type: 'item',
      url: '/setup/application',
      icon: icons.IconApi,
      breadcrumbs: false
    }
  ]
};

export default setup;
