import type { INodeProperties } from 'n8n-workflow';

export const optionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['options'],
			},
		},
		options: [
			{
				name: 'Create Options',
				value: 'createOptions',
				description: 'Create Options',
				routing: {
					request: {
						method: 'POST',
						url: '={{"/products/" + $parameter["productPid"]}}/options',
						body: '={{ JSON.parse($parameter["productDataJson4"]) }}',
						headers: {
						Accept: '*/*',
						'Content-Type': 'application/json',
					},
					}
				},
				action: 'Create Options',
			},
		],
		default: 'createOptions',
	},
]

export const optionsFields: INodeProperties[] = [

	{  //CREATE OPTIONS FIELD////
		displayName: 'Product Pid',
		name: 'productPid',
		type: 'string',
		required: true,
		default: '',
		description: 'Pid of the product',
		displayOptions: {
			show: {
				resource: ['options'],
				operation: ['createOptions'],
			},
		},
	},
	{   //CREATE OPTIONS FIELD JSON
		displayName: 'Product Data (JSON)',
		name: 'productDataJson4',
		type: 'json',
		default: JSON.stringify({
			"name": "",
			"options_lines": [
				{ "value": "" },
				{ "value": "" }

			]
		}
			 , null, 2),
		description: 'Product data in JSON format',
		displayOptions: {
			show: {
				resource: ['options'],
				operation: ['createOptions'],
			},
		},
	},

]
