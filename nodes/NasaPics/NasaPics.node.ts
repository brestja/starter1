import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { productFields, productOperations } from './ProductDescription';
import { variantFields, variantOperations } from './VariantDescriptions';

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
				/*	{
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
					},*/
					{
						name: 'Product',
						value: 'product',
					},
				/*	{
						name: 'Variants',
						value: 'createVariant',
					},
					{
						name: 'Variants',
						value: 'updateVariant',
					},
					{
						name: 'Variants',
						value: 'deleteVariant',
					},
					{
						name: 'Variants',
						value: 'deleteImage',
					},
					{
						name: 'Variants',
						value: 'addImageToVariant',
					},*/
					{
						name: 'Variants',
						value: 'variants',
					},
					{
						name: 'Status',
						value: 'getStatus',
					},
					{
						name: 'Options',
						value: 'createOptions',
					},
				],
				default: 'all',
			},

			...productOperations,
			...productFields,
			...variantOperations,
			...variantFields,



			// ----------------------------------
			//         Operations
			// ----------------------------------

			   //GET ALL PRODUCTS
		/*	{
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
								Accept: 'application/json',
								'Content-Type': 'application/json',
							},
							}
						},
						action: 'Create a product',
					},
				],
				default: 'createProduct',

			},
			{    //UPDATE A PRODUCT
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
				],
				default: 'updateProduct',

			},*/
		/*	{    //CREATE A VARIANT
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
							  body: '={{ JSON.parse($parameter["productDataJson1"]) }}',
							  headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json',
							},


							}
						},
						action: 'Create a variant',
					},
				],
				default: 'createVariant',

			},*/
			{    //CREATE OPTIONS
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['createOptions'],
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
		/*	{    //UPDATE A VARIANT
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
						value: 'updateVariant',
						description: 'Update a Variant',
						routing: {
							request: {
							  method: 'PUT',
							  url: '={{"/products/" + $parameter["productPid"] + "/variants/" + $parameter["variantPid"] + "/images" }}',
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
				default: 'updateVariant',

			},*/
		/*	{    //ADD IMAGE TO A PRODUCT VARIANT
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['addImageToVariant'],
					},
				},
				options: [
					{
						name: 'Add image to a Product Variant',
						value: 'addImageToVariant',
						description: 'Add image to a Product Variant',
						routing: {
							request: {
							  method: 'POST',
							  url: '={{"/products/" + $parameter["productPid"] + "/variants/" + $parameter["variantPid"] + "/images" }}',
							  body: '={{ JSON.parse($parameter["productDataJson3"]) }}',
							  headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json',
							},
							}
						},
						action: 'Add image to a Product Variant',
					},
				],
				default: 'addImageToVariant',

			},*/
		/*	{    //DELETE A VARIANT
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['deleteVariant'],
					},
				},
				options: [
					{
						name: 'Delete a Variant',
						value: 'deleteVariant',
						description: 'Delete a Variant',
						routing: {
							request: {
							  method: 'DELETE',
							  url: '={{"/products/" + $parameter["productPid"] + "/variants/" + $parameter["variantPid"] }}',
							  headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json',
							},
							}
						},
						action: 'Delete a Variant',
					},
				],
				default: 'deleteVariant',

			},*/
			{    //DELETE AN IMAGE
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['deleteImage'],
					},
				},
				options: [
					{
						name: 'Delete an Image',
						value: 'deleteImage',
						description: 'Delete an Image',
						routing: {
							request: {
							  method: 'DELETE',
							  url: '={{"/images/" + $parameter["imagePid"] }}',
							  headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json',
							},
							}
						},
						action: 'Delete an Image',
					},
				],
				default: 'deleteImage',

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
			/*{  //GET PRODUCT BY REMOTE ID FIELD////
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
			},*/
			{  //CREATE OPTIONS FIELD////
				displayName: 'Product Pid',
				name: 'productPid',
				type: 'string',
				required: true,
				default: '',
				description: 'Pid of the product',
				displayOptions: {
					show: {
						resource: ['createOptions'],
						operation: ['createOptions'],
					},
				},
			},
			/*{  //GET SINGLE PRODUCT FIELD////
				displayName: 'Product PID',
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
			},*/
			{  //DELETE AN IMAGE FIELD////
				displayName: 'Image PID',
				name: 'imagePid',
				type: 'string',
				required: true,
				default: '',
				description: 'Image Pid',
				displayOptions: {
					show: {
						resource: ['deleteImage'],
						operation: ['deleteImage'],
					},
				},
			},
		/*	{  //CREATE A VARIANT FIELD////
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
			},*/
		/*	{  //UPDATE A VARIANT FIELD 1
				displayName: 'Product Pid',
				name: 'productPid',
				type: 'string',
				required: true,
				default: '',
				description: 'Pid of the product',
				displayOptions: {
					show: {
						resource: ['updateVariant'],
						operation: ['updateVariant'],
					},
				},
			},*/
		/*	{  //ADD IMAGE TO A PRODUCT VARIANT FIELD
				displayName: 'Product Pid',
				name: 'productPid',
				type: 'string',
				required: true,
				default: '',
				description: 'Pid of the product',
				displayOptions: {
					show: {
						resource: ['addImageToVariant'],
						operation: ['addImageToVariant'],
					},
				},
			},*/
		/*	{  //UPDATE A VARIANT FIELD 2 ////
				displayName: 'Variant Pid',
				name: 'variantPid',
				type: 'string',
				required: true,
				default: '',
				description: 'Pid of the Variant',
				displayOptions: {
					show: {
						resource: ['updateVariant'],
						operation: ['updateVariant'],
					},
				},
			},*/
		/*	{  //ADD IMAGE TO A PRODUCT VARIANT FIELD 2
				displayName: 'Variant Pid',
				name: 'variantPid',
				type: 'string',
				required: true,
				default: '',
				description: 'Pid of the Variant',
				displayOptions: {
					show: {
						resource: ['addImageToVariant'],
						operation: ['addImageToVariant'],
					},
				},
			},*/
		/*	{  //DELETE A VARIANT FIELD 1
				displayName: 'Product Pid',
				name: 'productPid',
				type: 'string',
				required: true,
				default: '',
				description: 'Pid of the product',
				displayOptions: {
					show: {
						resource: ['deleteVariant'],
						operation: ['deleteVariant'],
					},
				},
			},
			{  //DELETE A VARIANT FIELD 2 ////
				displayName: 'Variant Pid',
				name: 'variantPid',
				type: 'string',
				required: true,
				default: '',
				description: 'Pid of the Variant',
				displayOptions: {
					show: {
						resource: ['deleteVariant'],
						operation: ['deleteVariant'],
					},
				},
			},*/
		/*	{   //UPDATE A VARIANT FIELD JSON
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
						resource: ['updateVariant'],
						operation: ['updateVariant'],
					},
				},
			},*/
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
						resource: ['createOptions'],
						operation: ['createOptions'],
					},
				},
			},
		/*	{//ADD IMAGE TO A PRODUCT VARIANT FORM
        displayName: 'Attachment',
        name: 'attachment',
        type: 'string',
        required: true,
        default: '',
        description: 'The file to upload as an attachment',
        typeOptions: {
            multipleValues: false,
            multipleValueButtonText: 'Add Attachment',
        },
        displayOptions: {
            show: {
                resource: ['addImageToVariant'],
                operation: ['addImageToVariant'],
            },
        },
    },*/
		/*	{   //GET ALL PRODUCTS FIELD
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
			},*/
		/*	{   //CREATE A PRODUCT FIELD JSON
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
			},*/
			{   //CREATE A VARIANT FIELD JSON
				displayName: 'Variant Data (JSON)',
				name: 'productDataJson1',
				type: 'json',
				default: JSON.stringify([
					{
						"selling_price": "",
						"title": "",
						"SKU": "",
						"remote_id": "",
						"barcode": "",
						"cost" : ""

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
		/*	{  //UPDATE A PRODUCT FIELD////
				displayName: 'Product Pid',
				name: 'productPid',
				type: 'string',
				required: true,
				default: '',
				description: 'Pid of the product',
				displayOptions: {
					show: {
						resource: ['updateProduct'],
						operation: ['updateProduct'],
					},
				},
			},*/
		/*	{   //UPDATE A PRODUCT FIELD JSON
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
						resource: ['updateProduct'],
						operation: ['updateProduct'],
					},
				},
			},*/
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



