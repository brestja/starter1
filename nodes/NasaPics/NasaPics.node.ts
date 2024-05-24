import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { productFields, productOperations } from './ProductDescription';
import { variantFields, variantOperations } from './VariantDescriptions';
import { statusOperations } from './StatusDescription';
import { optionsFields, optionsOperations } from './OptionsDescriptions';

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


		]
	}
}
