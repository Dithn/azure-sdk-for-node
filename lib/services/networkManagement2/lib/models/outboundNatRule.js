/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the OutboundNatRule class.
 * @constructor
 * Outbound NAT pool of the load balancer.
 *
 * @member {number} [allocatedOutboundPorts] The number of outbound ports to be
 * used for NAT.
 *
 * @member {array} [frontendIPConfigurations] The Frontend IP addresses of the
 * load balancer.
 *
 * @member {object} backendAddressPool A reference to a pool of DIPs. Outbound
 * traffic is randomly load balanced across IPs in the backend IPs.
 *
 * @member {string} [backendAddressPool.id] Resource ID.
 *
 * @member {string} [provisioningState] Gets the provisioning state of the
 * PublicIP resource. Possible values are: 'Updating', 'Deleting', and
 * 'Failed'.
 *
 * @member {string} [name] The name of the resource that is unique within a
 * resource group. This name can be used to access the resource.
 *
 * @member {string} [etag] A unique read-only string that changes whenever the
 * resource is updated.
 *
 */
class OutboundNatRule extends models['SubResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OutboundNatRule
   *
   * @returns {object} metadata of OutboundNatRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OutboundNatRule',
      type: {
        name: 'Composite',
        className: 'OutboundNatRule',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          allocatedOutboundPorts: {
            required: false,
            serializedName: 'properties.allocatedOutboundPorts',
            type: {
              name: 'Number'
            }
          },
          frontendIPConfigurations: {
            required: false,
            serializedName: 'properties.frontendIPConfigurations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SubResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SubResource'
                  }
              }
            }
          },
          backendAddressPool: {
            required: true,
            serializedName: 'properties.backendAddressPool',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OutboundNatRule;