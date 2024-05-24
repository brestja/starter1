import type { INodeProperties } from 'n8n-workflow';

export const variantOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['variants'],
			},
		},
		options: [
			{
				name: 'Create a variant',
				value: 'createVariant',
				description: 'Create a variant',
				routing: {
					request: {
						method: 'POST',
						url: '={{"/products/" + $parameter["productPid"]}}/variants/multiple',
						body: '={{ JSON.parse($parameter["productDataJson1"]) }}',
						headers: {
						Accept: '*/*',
						'Content-Type': 'application/json',
					},


					}
				},
				action: 'Create a variant',
			},

		],
		default: 'createVariant',
	},
]

export const variantFields: INodeProperties[] = [

	{  //CREATE A VARIANT FIELD////
		displayName: 'Product Pid',
		name: 'productPid',
		type: 'string',
		required: true,
		default: '',
		description: 'Pid of the product',
		displayOptions: {
			show: {
				resource: ['variants'],
				operation: ['createVariant'],
			},
		},
	},

]
