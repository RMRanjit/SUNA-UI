const Subscriptions = [
  { id: '001', name: 'PFNA-Subscription', subscription: '0000-0000-0000-0000', status: true },
  { id: '002', name: 'PBNA-Subscription', subscription: '0000-0000-0000-0000', status: true },
  { id: '003', name: 'AMESA-Subscription', subscription: '0000-0000-0000-0000', status: true },
  { id: '004', name: 'ESSA-Subscription', subscription: '0000-0000-0000-0000', status: true },
  { id: '005', name: 'CORP-IT-Subscription', subscription: '0000-0000-0000-0000', status: true }
];

const Organizations = [
  { id: '001', parentId: '001', name: 'PFNA', parent: 'PFNA-Subscription', Activated: true },
  { id: '002', parentId: '002', name: 'PBNA', parent: 'PBNA-Subscription', Activated: true },
  { id: '003', parentId: '003', name: 'AMESA', parent: 'AMESA-Subscription', Activated: true },
  { id: '004', parentId: '005', name: 'ESSA', parent: 'CORP-IT-Subscription', Activated: true },
  { id: '005', parentId: '005', name: 'CORP-IT', parent: 'CORP-IT-Subscription', Activated: true }
];

const BusinessUnits = [
  { id: '001', parentId: '001', name: 'Supply Chain', Organization: 'PFNA', region: 'Eastus2', Activated: true },
  { id: '001', parentId: '001', name: 'Supply Chain', Organization: 'PFNA', region: 'southcentralus', Activated: true },
  { id: '001', parentId: '001', name: 'Logistics', Organization: 'PFNA', region: 'Eastus2', Activated: true },
  { id: '001', parentId: '001', name: 'Human Resources', Organization: 'PFNA', region: 'Eastus2', Activated: false },
  { id: '001', parentId: '001', name: 'Finance', Organization: 'PFNA', region: 'Eastus2', Activated: false },
  { id: '001', parentId: '001', name: 'Planning', Organization: 'PFNA', region: 'Eastus2', Activated: false },
  { id: '001', parentId: '002', name: 'Supply Chain', Organization: 'PBNA', region: 'southcentralus', Activated: false },
  { id: '001', parentId: '002', name: 'Logistics', Organization: 'PBNA', region: 'southcentralus2', Activated: true },
  { id: '001', parentId: '002', name: 'Human Resources', Organization: 'PBNA', region: 'southcentralus', Activated: true },
  { id: '001', parentId: '002', name: 'Finance', Organization: 'PBNA', region: 'southcentralus', Activated: true },
  { id: '001', parentId: '002', name: 'Planning', Organization: 'PBNA', region: 'southcentralus', Activated: true },
  { id: '001', parentId: '003', name: 'Supply Chain', Organization: 'AMESA', region: 'westindia', Activated: true },
  { id: '001', parentId: '003', name: 'Logistics', Organization: 'AMESA', region: 'westindia', Active: true },
  { id: '001', parentId: '003', name: 'Human Resources', Organization: 'AMESA', region: 'southindia', Activated: false },
  { id: '001', parentId: '003', name: 'Finance', Organization: 'AMESA', region: 'southindia', Activated: true },
  { id: '001', parentId: '003', name: 'Planning', Organization: 'AMESA', region: 'southindia', Activated: true },
  { id: '001', parentId: '003', name: 'Planning', Organization: 'AMESA', region: 'westindia', Activated: true }
];

export const getSubscriptions = () => Subscriptions;
export const getOrganizations = () => Organizations;
