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
 * Initializes a new instance of the ExpressRouteServiceProvider class.
 * @constructor
 * A ExpressRouteResourceProvider object.
 *
 * @member {array} [peeringLocations] Get a list of peering locations.
 *
 * @member {array} [bandwidthsOffered] Gets bandwidths offered.
 *
 * @member {string} [provisioningState] Gets the provisioning state of the
 * resource.
 *
 */
class ExpressRouteServiceProvider extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExpressRouteServiceProvider
   *
   * @returns {object} metadata of ExpressRouteServiceProvider
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRouteServiceProvider',
      type: {
        name: 'Composite',
        className: 'ExpressRouteServiceProvider',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          peeringLocations: {
            required: false,
            serializedName: 'properties.peeringLocations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          bandwidthsOffered: {
            required: false,
            serializedName: 'properties.bandwidthsOffered',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExpressRouteServiceProviderBandwidthsOfferedElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExpressRouteServiceProviderBandwidthsOffered'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExpressRouteServiceProvider;