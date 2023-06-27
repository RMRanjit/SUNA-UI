export const simpleBlueprint = {
  nodes: [
    {
      id: '1',
      type: 'itemNode',
      position: {
        x: 127.29905123903313,
        y: 108.81106656597854
      },
      data: {
        Name: 'compute-1',
        id: '1',
        itemID: 1,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '2.82',
        icon: '../../Images/Compute.png',
        configuration: '1 vCPU, 1 GiB RAM',
        name: 'Small Compute',
        Destination: 'Azure',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 219,
      height: 72,
      selected: false,
      positionAbsolute: {
        x: 127.29905123903313,
        y: 108.81106656597854
      },
      dragging: false
    },
    {
      id: '2',
      type: 'itemNode',
      position: {
        x: 110,
        y: 203.25
      },
      data: {
        Name: 'compute-2 ',
        id: '2',
        itemID: 2,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '25.45',
        icon: '../../Images/Compute.png',
        configuration: '2 vCPU, 4 GiB RAM',
        name: 'Medium Compute',
        Destination: 'Azure',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 229,
      height: 72,
      selected: false,
      positionAbsolute: {
        x: 110,
        y: 203.25
      },
      dragging: false
    },
    {
      id: '3',
      type: 'itemNode',
      position: {
        x: 112,
        y: 295.25
      },
      data: {
        Name: 'compute-3 ',
        id: '3',
        itemID: 3,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '30.43',
        icon: '../../Images/Compute.png',
        configuration: '4 vCPU, 16 GiB RAM',
        name: 'Large Compute',
        Destination: 'Azure',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 235,
      height: 72,
      selected: false,
      positionAbsolute: {
        x: 112,
        y: 295.25
      },
      dragging: false
    },
    {
      id: '4',
      type: 'itemNode',
      position: {
        x: 467,
        y: 202.25
      },
      data: {
        Name: 'database-4 ',
        id: '4',
        itemID: 6,
        inputs: [],
        outputs: [],
        itemType: 'database',
        NodeType: 'itemNode',
        price: '100.82',
        icon: '../../Images/Database.png',
        configuration: 'DiskSize P30 Capacity 8192',
        name: 'Cassandra',
        Destination: 'Azure',
        scriptPath: '/storage/storage-share'
      },
      width: 285,
      height: 72,
      selected: false,
      positionAbsolute: {
        x: 467,
        y: 202.25
      },
      dragging: false
    }
  ],
  edges: [
    {
      source: '1',
      sourceHandle: null,
      target: '4',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-1-4'
    },
    {
      source: '2',
      sourceHandle: null,
      target: '4',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-2-4'
    },
    {
      source: '3',
      sourceHandle: null,
      target: '4',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-3-4'
    }
  ]
};

export const MicroServices = {
  nodes: [
    {
      id: '2000',
      type: 'containerNode',
      position: { x: 300, y: -120 },
      data: {
        Name: 'User Interface Facing Functions',
        name: 'UI Functions',
        width: 250,
        height: 300,
        price: '0',
        backgroundColor: '#6495ED'
      },

      selected: false,
      dragging: false
    },
    {
      id: '2001',
      type: 'containerNode',
      position: { x: 1300, y: -120 },
      data: {
        Name: 'Service Facing Functions',
        name: 'UI Functions',
        width: 300,
        height: 380,
        price: '0',
        backgroundColor: 'aliceblue'
      },

      selected: false,
      dragging: false
    },
    {
      id: '1',
      type: 'itemNode',
      position: { x: 10, y: 0 },
      data: {
        Name: 'API Gateway',
        id: '1',
        itemID: 1,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '2.82',
        icon: '../../Images/Compute.png',
        configuration: 'N/A',
        name: 'API Gateway',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        color: 'yellow',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 211,
      height: 72,
      selected: false,
      positionAbsolute: { x: -433.6561862918684, y: 84.4760102835242 },
      dragging: false
    },
    {
      id: '2',
      type: 'itemNode',
      position: { x: 15, y: 25 },
      data: {
        Name: 'App Function -3',
        id: '2',
        itemID: 3,
        inputs: [],
        outputs: [],
        itemType: 'function',
        NodeType: 'itemNode',
        price: '30.43',
        icon: '../../Images/AppFunctions.png',
        configuration: '',
        name: 'Driver API(s)',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        color: 'yellow',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 227,
      height: 72,
      selected: false,
      dragging: false,
      parentNode: '2000',
      extent: 'parent'
    },
    {
      id: '3',
      type: 'itemNode',
      position: { x: 15, y: 100 },
      data: {
        Name: 'App Function -2',
        id: '3',
        itemID: 2,
        inputs: [],
        outputs: [],
        itemType: 'function',
        NodeType: 'itemNode',
        price: '25.45',
        icon: '../../Images/AppFunctions.png',
        configuration: '',
        name: 'Trips API(s) ',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        color: 'yellow',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 221,
      height: 72,
      selected: false,
      dragging: false,
      parentNode: '2000',
      extent: 'parent'
    },
    {
      id: '4',
      type: 'itemNode',
      position: { x: 15, y: 185 },
      data: {
        Name: 'App Function -1',
        id: '4',
        itemID: 3,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '30.43',
        icon: '../../Images/AppFunctions.png',
        configuration: 'TBD',
        name: 'Passenger(s) API',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        color: 'yellow',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 221,
      height: 72,
      selected: false,
      dragging: false,
      parentNode: '2000',
      extent: 'parent'
    },
    {
      id: '6',
      type: 'itemNode',
      position: { x: 600, y: 0 },
      data: {
        Name: 'App Function 4 ',
        id: '6',
        itemID: 2,
        inputs: [],
        outputs: [],
        itemType: 'function',
        NodeType: 'itemNode',
        price: '25.45',
        icon: '../../Images/AppFunctions.png',
        configuration: '2 vCPU, 4 GiB RAM',
        name: 'Trip Manager & Monitoring',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        color: 'yellow',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 190,
      height: 72,
      selected: false,
      positionAbsolute: { x: 90.72628764560034, y: 84.79162760814779 },
      dragging: false
    },
    {
      id: '7',
      type: 'itemNode',
      position: { x: 900, y: 0 },
      data: {
        Name: 'Message Queue ',
        id: '7',
        itemID: 14,
        inputs: [],
        outputs: [],
        itemType: 'MessageQueue',
        NodeType: 'itemNode',
        price: '17.60',
        icon: '../../Images/Queue.png',
        configuration: '3 million sec, 1.5 million GB-s, ',
        name: 'Event Grid Topic',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/app-service/function-basic'
      },
      width: 278,
      height: 72,
      selected: false,
      positionAbsolute: { x: 394.29535096366806, y: 83.82255311977326 },
      dragging: false
    },
    {
      id: '9',
      type: 'itemNode',
      position: { x: 15, y: 40 },
      data: {
        Name: 'compute-9 ',
        id: '9',
        itemID: 1,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '2.82',
        icon: '../../Images/Compute.png',
        configuration: 'Not Applicable',
        name: 'Notification Trip Processor',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        color: 'yellow',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 211,
      height: 72,
      selected: false,
      dragging: false,
      parentNode: '2001',
      extends: 'parent'
    },
    {
      id: '10',
      type: 'itemNode',
      position: { x: 15, y: 120 },
      data: {
        Name: 'App Function -5 ',
        id: '10',
        itemID: 1,
        inputs: [],
        outputs: [],
        itemType: 'function',
        NodeType: 'itemNode',
        price: '2.82',
        icon: '../../Images/AppFunction.png',
        configuration: 'Not Applicable',
        name: 'SignalR Trip Processor',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        color: 'yellow',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 211,
      height: 72,
      selected: false,
      positionAbsolute: { x: 743.8474387642136, y: 22.646254554622885 },
      dragging: false,
      parentNode: '2001',
      extends: 'parent'
    },
    {
      id: '11',
      type: 'itemNode',
      position: { x: 15, y: 200 },
      data: {
        Name: 'App Function - 6 ',
        id: '11',
        itemID: 1,
        inputs: [],
        outputs: [],
        itemType: 'function',
        NodeType: 'itemNode',
        price: '2.82',
        icon: '../../Images/AppFunction.png',
        configuration: 'Not Applicable',
        name: 'PowerBI Processor',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        color: 'yellow',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 211,
      height: 72,
      selected: false,
      dragging: false,
      parentNode: '2001',
      extends: 'parent'
    },
    {
      id: '12',
      type: 'itemNode',
      position: { x: 15, y: 280 },
      data: {
        Name: 'compute-12 ',
        id: '12',
        itemID: 1,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '2.82',
        icon: '../../Images/Compute.png',
        configuration: '1 vCPU, 1 GiB RAM',
        name: 'Small Compute',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        color: 'yellow',
        scriptPath: '/virtual-machines/linux/basic-password'
      },
      width: 211,
      height: 72,
      selected: false,
      positionAbsolute: { x: 15, y: 221.9623542294795 },
      dragging: false,
      parentNode: '2001',
      extends: 'parent'
    }
  ],
  edges: [
    { source: '1', sourceHandle: null, target: '2', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-1-2' },
    { source: '1', sourceHandle: null, target: '4', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-1-4' },
    { source: '1', sourceHandle: null, target: '3', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-1-3' },
    { source: '3', sourceHandle: null, target: '6', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-3-6' },
    { source: '6', sourceHandle: null, target: '7', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-6-7' },
    { source: '7', sourceHandle: null, target: '9', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-7-9' },
    { source: '7', sourceHandle: null, target: '12', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-7-12' },
    { source: '7', sourceHandle: null, target: '10', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-7-10' },
    { source: '7', sourceHandle: null, target: '11', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-7-11' }
  ]
};

export const Datawarehouse = {
  nodes: [
    {
      id: '2000',
      type: 'containerNode',
      position: { x: 400, y: 0 },
      data: {
        Name: 'Azure Data Bricks - Process Layer',
        name: 'Azure Data Factory',
        width: 950,
        height: 150,
        price: '0',
        backgroundColor: '#6495ED'
      },
      width: 950,
      height: 150,
      selected: false,
      dragging: false
    },
    {
      id: '2001',
      type: 'containerNode',
      position: { x: 0, y: 50 },
      data: {
        Name: 'Ingest',
        name: 'Ingest Layer',
        width: 350,
        height: 280,
        price: '0',
        backgroundColor: '#1E90FF'
      },
      width: 950,
      height: 50,
      selected: false,
      dragging: false
    },
    {
      id: '2002',
      type: 'containerNode',
      position: { x: 400, y: 200 },
      data: {
        Name: 'Store',
        name: 'Store Layer',
        width: 1350,
        height: 150,
        price: '0',
        backgroundColor: 'aqua'
      },
      selected: false,
      dragging: false
    },
    {
      id: '2003',
      type: 'containerNode',
      position: { x: 1430, y: 0 },
      data: {
        Name: 'Serve',
        name: 'Serve capabilities Layer',
        width: 320,
        height: 190,
        price: '0',
        backgroundColor: 'aliceblue'
      },
      selected: false,
      dragging: false
    },
    {
      id: '1',
      type: 'itemNode',
      position: { x: 20, y: 35 },
      data: {
        Name: 'MessageQueue-1 ',
        id: '1',
        itemID: 12,
        inputs: [],
        outputs: [],
        itemType: 'MessageQueue',
        NodeType: 'itemNode',
        price: '5560.41',
        icon: '../../Images/Queue.png',
        configuration: '1.05 GB/sec - Ingress 250 TUs',
        name: 'Azure Event Hubs',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/storage/storage-share'
      },
      width: 299,
      height: 72,
      selected: false,
      dragging: false,
      parentNode: '2001',
      extent: 'parent'
    },
    {
      id: '2',
      type: 'itemNode',
      position: { x: 20, y: 180 },
      data: {
        Name: 'storage-2 ',
        id: '2',
        itemID: 5,
        inputs: [],
        outputs: [],
        itemType: 'storage',
        NodeType: 'itemNode',
        price: '119.82',
        icon: '../../Images/Storage.png',
        configuration: '',
        name: 'Azure Data Factory',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/storage/storage-share'
      },
      width: 277,
      height: 72,
      selected: false,
      positionAbsolute: { x: 289.42583313670934, y: -170.8997063423116 },
      dragging: false,
      parentNode: '2001',
      extent: 'parent'
    },

    {
      id: '6',
      type: 'itemNode',
      position: { x: 15, y: 35 },
      data: {
        Name: 'DataBricks-1 ',
        id: '6',
        itemID: 14,
        inputs: [],
        outputs: [],
        itemType: 'function',
        NodeType: 'itemNode',
        price: '17.60',
        icon: '../../Images/AppFunctions.png',
        configuration: 'Not specified',
        name: 'Apache Spark',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/app-service/function-basic'
      },
      width: 278,
      height: 72,
      selected: false,
      dragging: false,
      parentNode: '2000',
      extent: 'parent'
    },
    {
      id: '7',
      type: 'itemNode',
      position: { x: 350, y: 35 },
      data: {
        Name: 'Databricks-2',
        id: '7',
        itemID: 15,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Queue.png',
        configuration: 'Not sspecified',
        name: 'ML Flow',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/Container/Container'
      },
      width: 277,
      height: 72,
      selected: false,
      dragging: false,
      parentNode: '2000',
      extent: 'parent'
    },
    {
      id: '8',
      type: 'itemNode',
      position: { x: 700, y: 35 },
      data: {
        Name: 'Databricks-3',
        id: '8',
        itemID: 15,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Queue.png',
        configuration: 'Not specified',
        name: 'SQk Analytics',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/Container/Container'
      },
      width: 277,
      height: 72,
      selected: false,
      dragging: false,
      parentNode: '2000',
      extent: 'parent'
    },
    {
      id: '9',
      type: 'itemNode',
      position: { x: 15, y: 25 },
      data: {
        Name: 'Container ',
        id: '9',
        itemID: 15,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Queue.png',
        configuration: 'Not Available',
        name: 'Kubernetes Service',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/Container/Container'
      },
      width: 277,
      height: 72,
      selected: false,
      dragging: false,
      parentNode: '2003',
      extent: 'parent'
    },
    {
      id: '10',
      type: 'itemNode',
      position: { x: 15, y: 115 },
      data: {
        Name: 'function-10 ',
        id: '10',
        itemID: 14,
        inputs: [],
        outputs: [],
        itemType: 'function',
        NodeType: 'itemNode',
        price: '17.60',
        icon: '../../Images/AppFunctions.png',
        configuration: '3 million sec, 1.5 million GB-s, ',
        name: 'PowerBI',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/app-service/function-basic'
      },
      width: 278,
      height: 72,
      selected: false,
      positionAbsolute: { x: 1688.0868868824473, y: -288.03588185325685 },
      dragging: false,
      parentNode: '2003',
      extent: 'parent'
    },
    {
      id: '11',
      type: 'itemNode',
      position: { x: 1050, y: 25 },
      data: {
        Name: 'function-11 ',
        id: '11',
        itemID: 14,
        inputs: [],
        outputs: [],
        itemType: 'function',
        NodeType: 'itemNode',
        price: '17.60',
        icon: '../../Images/AppFunctions.png',
        configuration: '3 million sec, 1.5 million GB-s, ',
        name: 'Synpase Analytics',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/app-service/function-basic'
      },
      width: 278,
      height: 72,
      selected: true,
      positionAbsolute: { x: 1696.75202137015, y: -158.1543371151216 },
      dragging: false,
      parentNode: '2002',
      extent: 'parent'
    },
    {
      id: '12',
      type: 'itemNode',
      position: { x: 15, y: 25 },
      data: {
        Name: 'database-12 ',
        id: '12',
        itemID: 10,
        inputs: [],
        outputs: [],
        itemType: 'database',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Database.png',
        configuration: 'DiskSize P30 Capacity 8192',
        name: 'ADLS - Bronze Database',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/storage/storage-share'
      },
      width: 277,
      height: 72,
      selected: false,
      positionAbsolute: { x: 653.4216482397043, y: -153.5622790134967 },
      dragging: false,
      parentNode: '2002',
      extent: 'parent'
    },
    {
      id: '13',
      type: 'itemNode',
      position: { x: 350, y: 25 },
      data: {
        Name: 'database-13 ',
        id: '13',
        itemID: 9,
        inputs: [],
        outputs: [],
        itemType: 'database',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Database.png',
        configuration: 'DiskSize P30 Capacity 8192',
        name: 'ADLS - Silver Database',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/storage/storage-share'
      },
      width: 277,
      height: 72,
      selected: false,
      positionAbsolute: { x: 300, y: -153.9424489217798 },
      dragging: false,
      parentNode: '2002',
      extent: 'parent'
    },
    {
      id: '14',
      type: 'itemNode',
      position: { x: 700, y: 25 },
      data: {
        Name: 'database-14 ',
        id: '14',
        itemID: 9,
        inputs: [],
        outputs: [],
        itemType: 'database',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Database.png',
        configuration: 'DiskSize P30 Capacity 8192',
        name: 'ADLS - Gold Database',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/storage/storage-share'
      },
      width: 277,
      height: 72,
      selected: false,
      positionAbsolute: { x: 1329.4536615666375, y: -153.38174635147848 },
      dragging: false,
      parentNode: '2002',
      extent: 'parent'
    }
  ],
  edges: [
    { source: '8', sourceHandle: null, target: '10', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-8-10' },
    { source: '8', sourceHandle: null, target: '9', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-8-9' },
    { source: '1', sourceHandle: null, target: '6', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-1-6' },
    { source: '2', sourceHandle: null, target: '12', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-2-12' },
    { source: '6', sourceHandle: null, target: '12', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-6-12' },
    { source: '12', sourceHandle: null, target: '6', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-12-6' },
    { source: '13', sourceHandle: null, target: '7', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-13-7' },
    { source: '6', sourceHandle: null, target: '7', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-6-7' },
    {
      source: '12',
      sourceHandle: null,
      target: '13',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-12-13'
    },
    { source: '7', sourceHandle: null, target: '13', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-7-13' },
    { source: '8', sourceHandle: null, target: '14', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-8-14' },
    { source: '14', sourceHandle: null, target: '8', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-14-8' },
    { source: '7', sourceHandle: null, target: '8', targetHandle: null, type: 'smoothstep', animated: 'true', id: 'reactflow__edge-7-8' },
    {
      source: '13',
      sourceHandle: null,
      target: '14',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-13-14'
    },
    {
      source: '14',
      sourceHandle: null,
      target: '11',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-14-11'
    }
  ]
};

export const PreCDP = {
  nodes: [
    {
      width: 303,
      height: 72,
      id: '1',
      type: 'itemNode',
      position: {
        x: -245.39873035359642,
        y: -88.41432125168191
      },
      data: {
        Name: 'Event Hub',
        id: '1',
        itemID: 12,
        inputs: [],
        outputs: [],
        itemType: 'MessageQueue',
        NodeType: 'itemNode',
        price: '5560.41',
        icon: '../../Images/Queue.png',
        configuration: '1.05 GB/sec - Ingress 250 TUs',
        name: 'Premium Event Hub',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/storage/storage-share'
      },
      selected: false,
      positionAbsolute: {
        x: -245.39873035359642,
        y: -88.41432125168191
      },
      dragging: false
    },
    {
      width: 281,
      height: 72,
      id: '2',
      type: 'itemNode',
      position: {
        x: 181.0141344077581,
        y: 98.4862392948387
      },
      data: {
        Name: 'Landing Zone',
        id: '2',
        itemID: 5,
        inputs: [],
        outputs: [],
        itemType: 'storage',
        NodeType: 'itemNode',
        price: '119.82',
        icon: '../../Images/Storage.png',
        configuration: 'DiskSize P30 Capacity 8192',
        name: 'Azure Data Lake Storage',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/storage/storage-share'
      },
      selected: false,
      positionAbsolute: {
        x: 181.0141344077581,
        y: 98.4862392948387
      },
      dragging: false
    },
    {
      width: 281,
      height: 72,
      id: '3',
      type: 'itemNode',
      position: {
        x: -225.1151078047048,
        y: 178.4313408605675
      },
      data: {
        Name: 'Ingest Synapse Pipeline',
        id: '3',
        itemID: 15,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Queue.png',
        configuration: 'Copy Data to Dasta lake storage',
        name: 'Synapse Pipelines',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/Container/Container'
      },
      selected: false,
      positionAbsolute: {
        x: -225.1151078047048,
        y: 178.4313408605675
      },
      dragging: false
    },
    {
      width: 281,
      height: 72,
      id: '4',
      type: 'itemNode',
      position: {
        x: 612.3067709673943,
        y: 100.27610721173454
      },
      data: {
        Name: 'Process Data - Synapse Pipeline ',
        id: '4',
        itemID: 15,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Queue.png',
        configuration: 'Pipeline to use the data from landing zone and determine any anomalies',
        name: 'Synapse Pipeline',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/Container/Container'
      },
      selected: false,

      dragging: false
    },
    {
      width: 281,
      height: 72,
      id: '10',
      type: 'itemNode',
      position: {
        x: 986,
        y: 298.68859840951552
      },
      data: {
        Name: 'Anomaly Detector ',
        id: '10',
        itemID: 15,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Queue.png',
        configuration: 'Determine anomalies in the data',
        name: 'Cognitive Services',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/Container/Container'
      },
      selected: false,

      dragging: false
    },
    {
      width: 281,
      height: 72,
      id: '5',
      type: 'itemNode',
      position: {
        x: 986,
        y: 100
      },
      data: {
        Name: 'Validate Data',
        id: '5',
        itemID: 5,
        inputs: [],
        outputs: [],
        itemType: 'storage',
        NodeType: 'itemNode',
        price: '119.82',
        icon: '../../Images/Storage.png',
        configuration: 'Storage for Validated data',
        name: 'Azure DataLake Storage ',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/storage/storage-share'
      },
      selected: false,
      positionAbsolute: {
        x: 976.2689903593953,
        y: 98.68859840951552
      },
      dragging: false
    },
    {
      width: 281,
      height: 72,
      id: '6',
      type: 'itemNode',
      position: {
        x: 630.0144065612989,
        y: -96.47670233765285
      },
      data: {
        Name: 'Structured Stream processing',
        id: '6',
        itemID: 15,
        inputs: [],
        outputs: [],
        itemType: 'compute',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Queue.png',
        configuration: 'Processing for Structured data',
        name: 'Synapse Spark Pool',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/Container/Container'
      },
      selected: false,
      positionAbsolute: {
        x: 630.0144065612989,
        y: -96.47670233765285
      },
      dragging: false
    },
    {
      width: 281,
      height: 72,
      id: '7',
      type: 'itemNode',
      position: {
        x: 1400,
        y: 98
      },
      data: {
        Name: 'SQL Pool ',
        id: '7',
        itemID: 15,
        inputs: [],
        outputs: [],
        itemType: 'database',
        NodeType: 'itemNode',
        price: '201.64',
        icon: '../../Images/Queue.png',
        configuration: 'Serverless SQL Pool',
        name: 'Synapse',
        Destination: 'Azure',
        OwnerApplication: 'TBD',
        scriptPath: '/Container/Container'
      },
      selected: false,

      dragging: false
    }
  ],
  edges: [
    {
      source: '1',
      sourceHandle: null,
      target: '2',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-1-2'
    },
    {
      source: '3',
      sourceHandle: null,
      target: '2',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-3-2'
    },
    {
      source: '2',
      sourceHandle: null,
      target: '4',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-2-4'
    },
    {
      source: '4',
      sourceHandle: null,
      target: '5',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-4-5'
    },
    {
      source: '1',
      sourceHandle: null,
      target: '6',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-1-6'
    },
    {
      source: '6',
      sourceHandle: null,
      target: '5',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-6-5'
    },
    {
      source: '4',
      sourceHandle: null,
      target: '10',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-4-10',
      style: {
        strokeWidth: 2,
        stroke: '#FF0072'
      }
    },
    {
      source: '5',
      sourceHandle: null,
      target: '7',
      targetHandle: null,
      type: 'smoothstep',
      animated: 'true',
      id: 'reactflow__edge-5-7'
    }
  ],
  viewport: {
    x: 162.61324523335338,
    y: 116.91615378938587,
    zoom: 0.6625035085226039
  }
};
