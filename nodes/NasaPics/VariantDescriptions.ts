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
	{  //ADD IMAGE TO A PRODUCT VARIANT FIELD
		displayName: 'Product Pid',
		name: 'productPid',
		type: 'string',
		required: true,
		default: '',
		description: 'Pid of the product',
		displayOptions: {
			show: {
				resource: ['variants'],
				operation: ['addImageToVariant'],
			},
		},
	},
	{  //ADD IMAGE TO A PRODUCT VARIANT FIELD 2
		displayName: 'Variant Pid',
		name: 'variantPid',
		type: 'string',
		required: true,
		default: '',
		description: 'Pid of the Variant',
		displayOptions: {
			show: {
				resource: ['variants'],
				operation: ['addImageToVariant'],
			},
		},
	},
	{//ADD IMAGE TO A PRODUCT VARIANT FORM
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
						resource: ['variants'],
						operation: ['addImageToVariant'],
				},
		},
	},
	{  //DELETE A VARIANT FIELD 1
		displayName: 'Product Pid',
		name: 'productPid',
		type: 'string',
		required: true,
		default: '',
		description: 'Pid of the product',
		displayOptions: {
			show: {
				resource: ['variants'],
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
				resource: ['variants'],
				operation: ['deleteVariant'],
			},
		},
	},
	{  //DELETE AN IMAGE FIELD////
		displayName: 'Image PID',
		name: 'imagePid',
		type: 'string',
		required: true,
		default: '',
		description: 'Image Pid',
		displayOptions: {
			show: {
				resource: ['variants'],
				operation: ['deleteImage'],
			},
		},
	},

]
