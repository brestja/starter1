import { INodeType, INodeTypeDescription } from 'n8n-workflow';
export class NasaPics implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Sharpei',
		name: 'NasaPics',
		icon: 'file:sharpei_png_120.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Sahrpei Api',
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
						name: 'All',
						value: 'all',
					},
					{
						name: 'Get product by remote Id',
						value: 'getProduct',
					},
					{
						name: 'Create a Product',
						value: 'createProduct',
					},
					{
						name: 'Update a Product',
						value: 'updateProduct',
					},
					{
						name: 'Create a Variant',
						value: 'createVariant',
					},
					{
						name: 'Update a Variant',
						value: 'updateVariant',
					},
				],
				default: 'all',
			},

			// ----------------------------------
			//         Operations
			// ----------------------------------

			   //Get all products
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
						name: 'Get Products',
						value: 'getAll',
						description: 'Get many items',
						action: 'Get many items',
					},
				],
				default: 'getAll',
			},
			{   //Get product by remote Id
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
						name: 'Get',
						value: 'get',
						description: 'Get a single product',
						action: 'Get product',
					},
				],
				default: 'get',
			},
			{    //Create a product
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
						value: 'post',
						description: 'Create a product',
						action: 'Create a product',
					},
				],
				default: 'post',
			},
			{    //Update a product
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['updateProduct'],
					},
				},
				options: [
					{
						name: 'Update a product',
						value: 'update',
						description: 'Update a product',
						action: 'Update a product',
					},
				],
				default: 'update',
			},
			{    //Create a Variant
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
						name: 'Create a Variant',
						value: 'create',
						description: 'Create a Variant',
						action: 'Create a Variant',
					},
				],
				default: 'create',
			},
			{    //Update a Variant
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['updateVariant'],
					},
				},
				options: [
					{
						name: 'Update a Variant',
						value: 'update',
						description: 'Update a Variant',
						action: 'Update a Variant',
					},
				],
				default: 'update',
			},
			// ----------------------------------
			//         Fields
			// ----------------------------------
			{
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
			{
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
			},
			{
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
			{
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
			},
		],
	};
}



