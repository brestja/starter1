import type { INodeProperties } from 'n8n-workflow';

export const statusOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['status'],
			},
		},
		options: [
			{
				name: 'Get Status',
				value: 'getStatus',
				description: 'Get Status',
				routing: {
					request: {
						method: 'GET',
						url: '/status'
					}
				},
				action: 'Get Status',
			},
		],
		default: 'getStatus',
	},

]
