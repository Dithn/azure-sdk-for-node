// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/does-not-exist/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2017-05-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'does-not-exist' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0d3ad1cb-f2cc-416c-8bf1-8c658b472258',
  'x-ms-correlation-request-id': '0d3ad1cb-f2cc-416c-8bf1-8c658b472258',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160329Z:0d3ad1cb-f2cc-416c-8bf1-8c658b472258',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 26 May 2017 16:03:28 GMT',
  connection: 'close',
  'content-length': '106' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/does-not-exist/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2017-05-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'does-not-exist' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0d3ad1cb-f2cc-416c-8bf1-8c658b472258',
  'x-ms-correlation-request-id': '0d3ad1cb-f2cc-416c-8bf1-8c658b472258',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160329Z:0d3ad1cb-f2cc-416c-8bf1-8c658b472258',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 26 May 2017 16:03:28 GMT',
  connection: 'close',
  'content-length': '106' });
 return result; }]];