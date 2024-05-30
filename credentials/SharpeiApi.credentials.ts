import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SharpeiApi implements ICredentialType {
	name = 'SharpeiApi';
	displayName = 'Sharpei';
	documentationUrl = 'https://help.gosharpei.com/en/articles/9200905-where-do-i-find-my-api_keys';
	properties: INodeProperties[] = [
		{
			displayName: 'Private API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			placeholder:'Private API key from your Sharpei account.'
		},
	];
	authenticate = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '={{$credentials.apiKey}}'
			}
		},
	} as IAuthenticateGeneric;
}
