import type { INodeProperties } from 'n8n-workflow';

export const ordersOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['orders'],
			},
		},
		options: [
			{ //GET ORDERS
				name: 'Get orders',
				value: 'getOrders',
				description: 'Get orders',
				routing: {
					request: {
						method: 'GET',
						url: '/orders',
						headers: {
							Authorization: '={{$credentials.apiKey}}',
						},
				  }
				},
				action: 'Get orders',
			},
    ],
		default: 'getOrders',
	},
]


