// assets
import {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBrandCodepen,
  IconApi,
  IconComponents,
  IconAffiliate,
  IconHome
} from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBrandCodepen,
  IconAffiliate,
  IconComponents,
  IconApi,
  IconHome
};

// ==============================|| SETUP MENU ITEMS ||============================== //

const setup = {
  id: 'Admin',
  title: 'Adminstrative',
  caption: 'Setup your Organization, Projects and Assets here',
  type: 'group',
  // url: '/setup',
  children: [
    {
      id: 'setup',
      title: 'Setup',
      type: 'collapse',
      icon: icons.IconPalette,
      breadcrumbs: false,
      url: '/setup',
      children: [
        {
          id: 'setup-Home',
          title: 'Home',
          type: 'item',
          url: '/setup',
          icon: icons.IconHome,
          breadcrumbs: false
        },
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
          url: 'setup/organization',
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
        },
        {
          id: 'setup-Components',
          title: 'Components',
          type: 'item',
          url: '/setup/components',
          icon: icons.IconComponents,
          breadcrumbs: false
        },
        {
          id: 'setup-Integration',
          title: 'Integration',
          type: 'item',
          url: '/setup/integration',
          icon: icons.IconAffiliate,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default setup;
