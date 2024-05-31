import type { INodeProperties } from 'n8n-workflow';

export const productOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['product'],
			},
		},
		options: [
			{//GET ALL PRODUCTS
				name: 'List products',
				value: 'getAll',
				description: 'Get products',
				routing: {
					request: {
						method: 'GET',
						url: '/products'
					}
				},
				action: 'List products',
			},
			{//GET PRODUCT BY REMOTE ID
				name: 'Get product by remote Id',
				value: 'get',
				description: 'Get a single product',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/products/" + $parameter["remoteId"]}}'
					}
				},
				action: 'Get product by remote Id',
			},
			{//GET A SINGLE PRODUCT
				name: 'Get a single product',
				value: 'getSingleProduct',
				description: 'Get a single product',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/products/" + $parameter["pid"]}}'
					}
				},
				action: 'Get a single product',
			},
			{//CREATE A PRODUCT
				name: 'Create a product',
				value: 'createProduct',
				description: 'Create a product',
				routing: {
					request: {
						method: 'POST',
						url: '/products',
						body: '={{ JSON.parse($parameter["productDataJson"]) }}',
						headers: {
						Accept: '*/*',
						'Content-Type': 'application/json',
					},
					}
				},
				action: 'Create a product',
			},
			{//UPDATE A PRODUCT
				name: 'Update a Product',
				value: 'updateProduct',
				description: 'Update a Product',
				routing: {
					request: {
						method: 'PUT',
						url: '={{"/products/" + $parameter["productPid"]}}',
						body: '={{ JSON.parse($parameter["productDataJson2"]) }}',
						headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					}
				},
				action: 'Update a Product',
			},
			{//DELETE A PRODUCT
				name: 'Delete a product',
				value: 'deleteProduct',
				description: 'Delete a product',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{"/products/" + $parameter["pid"]}}'
					}
				},
				action: 'Delete a Product',
			},
		],
		default: 'getAll',
	},

]

export const productFields: INodeProperties[] = [

	{   //GET ALL PRODUCTS FIELD
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getAll'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 100,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
	},
	{  //GET PRODUCT BY REMOTE ID FIELD////
		displayName: 'Remote ID',
		name: 'remoteId',
		type: 'string',
		required: true,
		default: '',
		description: 'The remote ID of the product to be returned',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['get'],
			},
		},
	},
	{  //GET SINGLE PRODUCT FIELD////
		displayName: 'Product PID',
		name: 'pid',
		type: 'string',
		required: true,
		default: '',
		description: 'Pid of the product',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getSingleProduct'],
			},
		},
	},
	{   //CREATE A PRODUCT FIELD JSON
		displayName: 'Product Data (JSON)',
		name: 'productDataJson',
		type: 'json',
		default: JSON.stringify({
			body: "Description of the product. (Data type: string)",
			status_pid: "Identifier of the product's status. (Data type: string)",
			title: "Title of the product. (Data type: string)",
			slug: "TSlug of the product. (Data type: string)",
			remote_id: "Remote identifier of the product. (Data type: number)",
			value: "Price of the product. (Data type: string)",
			tags: "List of product tags. (Data type: array)"
		}, null, 2),
		description: 'Product data in JSON format',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct'],
			},
		},
	},
	{  //UPDATE A PRODUCT FIELD////
		displayName: 'Product Pid',
		name: 'productPid',
		type: 'string',
		required: true,
		default: '',
		description: 'Pid of the product',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['updateProduct'],
			},
		},
	},
	{   //UPDATE A PRODUCT FIELD JSON
		displayName: 'Product Data (JSON)',
		name: 'productDataJson2',
		type: 'json',
		default: JSON.stringify(
			{
				"title": "",
				"body": "",
				"status_pid": ""
			}
		, null, 2),
		description: 'Product data in JSON format',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['updateProduct'],
			},
		},
	},
	{  //DELETE A PRODUCT FIELD////
		displayName: 'Product PID',
		name: 'pid',
		type: 'string',
		required: true,
		default: '',
		description: 'Pid of the product',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['deleteProduct'],
			},
		},
	},
]
