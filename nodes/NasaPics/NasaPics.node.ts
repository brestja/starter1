import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class NasaPics implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Sharpei',
		name: 'NasaPics',
		icon: 'file:sharpei_png_500.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Sharpei Api',
		defaults: {
			name: 'Sharpei',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'NasaPicsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.dev.gosharpei.com/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			// ----------------------------------
			//         Resources
			// ----------------------------------
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Product',
						value: 'all',
					},
					{
						name: 'Product',
						value: 'getProduct',
					},
					{
						name: 'Product',
						value: 'createProduct',
					},
					{
						name: 'Product',
						value: 'getSingleProduct',
					},
					{
						name: 'Variants',
						value: 'createVariant',
					},
					{
						name: 'Status',
						value: 'getStatus',
					},
				],
				default: 'all',
			},



			// ----------------------------------
			//         Operations
			// ----------------------------------

			   //GET ALL PRODUCTS
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['all'],
					},
				},
				options: [
					{
						name: 'Get all products',
						value: 'getAll',
						description: 'Get products',
						routing: {
							request: {
							  method: 'GET',
							  url: '/products'
							}
						},
						action: 'Get all products',
					},
				],
				default: 'getAll',
			},
			{   //GET PRODUCT BY REMOTE ID
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['getProduct'],
					},
				},
				options: [
					{
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
				],
				default: 'get',
			},
			{   //GET A SINGLE PRODUCT
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['getSingleProduct'],
					},
				},
				options: [
					{
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
				],
				default: 'getSingleProduct',
			},
			{    //CREATE A PRODUCT
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['createProduct'],
					},
				},
				options: [
					{
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
								'Accept-Encoding': 'gzip, deflate, br',
								'Connection': 'keep-alive',
								'authority': 'api.dev.gosharpei.com',
								'accept-language': 'es-ES,es;q=0.9',
								'origin': 'https://app.dev.gosharpei.com',
								'referer': 'https://app.dev.gosharpei.com/',
								'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
								'sec-ch-ua-mobile': '?0',
								'sec-ch-ua-platform': '"Windows"',
								'sec-fetch-dest': 'empty',
								'sec-fetch-mode': 'cors',
								'sec-fetch-site': 'same-site',
								'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
							},


							}
						},
						action: 'Create a product',
					},
				],
				default: 'createProduct',

			},
			{    //CREATE A VARIANT
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['createVariant'],
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
							  body: '={{ JSON.parse($parameter["productDataJson"]) }}',
							  headers: {
								Accept: '*/*',
								'Content-Type': 'application/json',
								'Accept-Encoding': 'gzip, deflate, br',
								'Connection': 'keep-alive',
								'authority': 'api.dev.gosharpei.com',
								'accept-language': 'es-ES,es;q=0.9',
								'origin': 'https://app.dev.gosharpei.com',
								'referer': 'https://app.dev.gosharpei.com/',
								'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
								'sec-ch-ua-mobile': '?0',
								'sec-ch-ua-platform': '"Windows"',
								'sec-fetch-dest': 'empty',
								'sec-fetch-mode': 'cors',
								'sec-fetch-site': 'same-site',
								'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
							},


							}
						},
						action: 'Create a variant',
					},
				],
				default: 'createVariant',

			},
			{  //GET STATUS
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['getStatus'],
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
			// ----------------------------------
			//         Fields
			// ----------------------------------
			{  //GET PRODUCT BY REMOTE ID FIELD////
				displayName: 'Remote ID',
				name: 'remoteId',
				type: 'string',
				required: true,
				default: '',
				description: 'The remote ID of the product to be returned',
				displayOptions: {
					show: {
						resource: ['getProduct'],
						operation: ['get'],
					},
				},
			},
			{  //GET SINGLE PRODUCT FIELD////
				displayName: 'PID',
				name: 'pid',
				type: 'string',
				required: true,
				default: '',
				description: 'Pid of the product',
				displayOptions: {
					show: {
						resource: ['getSingleProduct'],
						operation: ['getSingleProduct'],
					},
				},
			},
			{  //CREATE A VARIANT FIELD////
				displayName: 'Product Pid',
				name: 'productPid',
				type: 'string',
				required: true,
				default: '',
				description: 'Pid of the product',
				displayOptions: {
					show: {
						resource: ['createVariant'],
						operation: ['createVariant'],
					},
				},
			},
			/*{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				required: true,
				default: '',
				description: 'The Hacker News user to be returned',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['get'],
					},
				},
			},*/
			{   //GET ALL PRODUCTS FIELD
				displayName: 'Return All',
				name: 'returnAll',
				type: 'boolean',
				default: false,
				description: 'Whether to return all results or only up to a given limit',
				displayOptions: {
					show: {
						resource: ['all'],
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
						resource: ['all'],
						operation: ['getAll'],
						returnAll: [false],
					},
				},
			},
			/*{   //GET STATUS FIELD
				displayName: 'Get Status',
				name: 'getStatus',
				type: 'boolean',
				default: false,
				description: 'Whether to return all results or only up to a given limit',
				displayOptions: {
					show: {
						resource: ['getStatus'],

					},
				},
			},*/
			{   //CREATE A PRODUCT FIELD
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
						resource: ['createProduct'],
						operation: ['createProduct'],
					},
				},
			},
			{   //CREATE A VARIANT FIELD JSON
				displayName: 'Variant Data (JSON)',
				name: 'productDataJson',
				type: 'json',
				default: JSON.stringify([
					{
						"selling_price": "{{ $('WooCommerce').item.json.price}}",
						"title": "{{ $('WooCommerce').item.json.name }}",
						"SKU": "{{ $('WooCommerce').item.json.sku }}",
						"remote_id": "{{ $('WooCommerce').item.json.id }}",
						"barcode": "",
						"cost" : "0"

					}
				] , null, 2),
				description: 'Variant data in JSON format',
				displayOptions: {
					show: {
						resource: ['createVariant'],
						operation: ['createVariant'],
					},
				},
			},
			/*{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ['article'],
						operation: ['get'],
					},
				},
				options: [
					{
						displayName: 'Include Comments',
						name: 'includeComments',
						type: 'boolean',
						default: false,
						description: 'Whether to include all the comments in a Hacker News article',
					},
				],
			},
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ['all'],
						operation: ['getAll'],
					},
				},
				options: [
					{
						displayName: 'Keyword',
						name: 'keyword',
						type: 'string',
						default: '',
						description: 'The keyword for filtering the results of the query',
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'multiOptions',
						options: [
							{
								name: 'Ask HN',
								value: 'ask_hn', // snake case per HN tags
								description: 'Returns query results filtered by Ask HN tag',
							},
							{
								name: 'Comment',
								value: 'comment',
								description: 'Returns query results filtered by comment tag',
							},
							{
								name: 'Front Page',
								value: 'front_page', // snake case per HN tags
								description: 'Returns query results filtered by Front Page tag',
							},
							{
								name: 'Poll',
								value: 'poll',
								description: 'Returns query results filtered by poll tag',
							},
							{
								name: 'Show HN',
								value: 'show_hn', // snake case per HN tags
								description: 'Returns query results filtered by Show HN tag',
							},
							{
								name: 'Story',
								value: 'story',
								description: 'Returns query results filtered by story tag',
							},
						],
						default: [],
						description: 'Tags for filtering the results of the query',
					},
				],
			},*/
		],
	};
}



