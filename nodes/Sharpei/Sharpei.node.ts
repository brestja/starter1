import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { productFields, productOperations } from './ProductDescription';
import { variantFields, variantOperations } from './VariantDescriptions';
import { statusOperations } from './StatusDescription';
import { optionsFields, optionsOperations } from './OptionsDescriptions';
import { ordersFields, ordersOperations } from './OrdersDescription';

export class Sharpei implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Sharpei',
		name: 'Sharpei',
		icon: 'file:logo.png',
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
				name: 'SharpeiApi',
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
						value: 'product',
					},
					{
						name: 'Variants',
						value: 'variants',
					},
					{
						name: 'Status',
						value: 'status',
					},
					{
						name: 'Options',
						value: 'options',
					},
					{
						name: 'Orders',
						value: 'orders',
					},
				],
				default: 'product',
			},

			...productOperations,
			...productFields,
			...variantOperations,
			...variantFields,
			...statusOperations,
			...optionsOperations,
			...optionsFields,
			...ordersOperations,
			...ordersFields,
    ]
	}
}
