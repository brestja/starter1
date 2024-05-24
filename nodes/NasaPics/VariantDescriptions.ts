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
			{
				name: 'Update a Variant',
				value: 'updateVariant',
				description: 'Update a Variant',
				routing: {
					request: {
						method: 'PUT',
						url: '={{"/products/" + $parameter["productPid"] + "/variants/" + $parameter["variantPid"] }}',
						body: '={{ JSON.parse($parameter["productDataJson3"]) }}',
						headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					}
				},
				action: 'Update a Variant',
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
	{  //UPDATE A VARIANT FIELD 1
		displayName: 'Product Pid',
		name: 'productPid',
		type: 'string',
		required: true,
		default: '',
		description: 'Pid of the product',
		displayOptions: {
			show: {
				resource: ['variants'],
				operation: ['updateVariant'],
			},
		},
	},
	{  //UPDATE A VARIANT FIELD 2 ////
		displayName: 'Variant Pid',
		name: 'variantPid',
		type: 'string',
		required: true,
		default: '',
		description: 'Pid of the Variant',
		displayOptions: {
			show: {
				resource: ['variants'],
				operation: ['updateVariant'],
			},
		},
	},
	{   //UPDATE A VARIANT FIELD JSON
		displayName: 'Variant Data (JSON)',
		name: 'productDataJson3',
		type: 'json',
		default: JSON.stringify({
			"pid": "",
			"title": "",
			"SKU": "",
			"barcode": "",
			"cost": "",
			"selling_price": ""
		}, null, 2),
		description: 'Variant data in JSON format',
		displayOptions: {
			show: {
				resource: ['variants'],
				operation: ['updateVariant'],
			},
		},
	},

]
