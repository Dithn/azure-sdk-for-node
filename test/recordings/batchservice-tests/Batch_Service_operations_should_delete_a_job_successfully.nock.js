// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .delete('/jobs/HelloWorldJobNodeSDKTest?api-version=2017-05-01.5.0')
  .reply(503, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"ServerBusy\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The server is busy.\\nRequestId:76fca56f-152a-4825-9679-a101c8202410\\nTime:2017-05-26T16:59:46.3702823Z\"\r\n  }\r\n}", { 'content-length': '323',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '76fca56f-152a-4825-9679-a101c8202410',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:59:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .delete('/jobs/HelloWorldJobNodeSDKTest?api-version=2017-05-01.5.0')
  .reply(503, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"ServerBusy\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The server is busy.\\nRequestId:76fca56f-152a-4825-9679-a101c8202410\\nTime:2017-05-26T16:59:46.3702823Z\"\r\n  }\r\n}", { 'content-length': '323',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '76fca56f-152a-4825-9679-a101c8202410',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:59:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .delete('/jobs/HelloWorldJobNodeSDKTest?api-version=2017-05-01.5.0')
  .reply(503, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"ServerBusy\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The server is busy.\\nRequestId:6f71c4eb-b88c-49db-9c84-dafedccba16f\\nTime:2017-05-26T17:00:23.4878092Z\"\r\n  }\r\n}", { 'content-length': '323',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6f71c4eb-b88c-49db-9c84-dafedccba16f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 17:00:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .delete('/jobs/HelloWorldJobNodeSDKTest?api-version=2017-05-01.5.0')
  .reply(503, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"ServerBusy\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The server is busy.\\nRequestId:6f71c4eb-b88c-49db-9c84-dafedccba16f\\nTime:2017-05-26T17:00:23.4878092Z\"\r\n  }\r\n}", { 'content-length': '323',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6f71c4eb-b88c-49db-9c84-dafedccba16f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 17:00:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .delete('/jobs/HelloWorldJobNodeSDKTest?api-version=2017-05-01.5.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '18931994-490e-41fd-9040-14a38be30853',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 17:01:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .delete('/jobs/HelloWorldJobNodeSDKTest?api-version=2017-05-01.5.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '18931994-490e-41fd-9040-14a38be30853',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 17:01:36 GMT',
  connection: 'close' });
 return result; }]];