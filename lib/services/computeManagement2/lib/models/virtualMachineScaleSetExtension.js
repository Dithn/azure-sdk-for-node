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
 * Initializes a new instance of the VirtualMachineScaleSetExtension class.
 * @constructor
 * Describes a Virtual Machine Scale Set Extension.
 *
 * @member {string} [name] The name of the extension.
 *
 * @member {string} [publisher] The name of the extension handler publisher.
 *
 * @member {string} [type] The type of the extension handler.
 *
 * @member {string} [typeHandlerVersion] The type version of the extension
 * handler.
 *
 * @member {boolean} [autoUpgradeMinorVersion] Whether the extension handler
 * should be automatically upgraded across minor versions.
 *
 * @member {object} [settings] Json formatted public settings for the
 * extension.
 *
 * @member {object} [protectedSettings] Json formatted protected settings for
 * the extension.
 *
 * @member {string} [provisioningState] The provisioning state, which only
 * appears in the response.
 *
 */
class VirtualMachineScaleSetExtension extends models['SubResourceReadOnly'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualMachineScaleSetExtension
   *
   * @returns {object} metadata of VirtualMachineScaleSetExtension
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineScaleSetExtension',
      type: {
        name: 'Composite',
        className: 'VirtualMachineScaleSetExtension',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
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
          publisher: {
            required: false,
            serializedName: 'properties.publisher',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'properties.type',
            type: {
              name: 'String'
            }
          },
          typeHandlerVersion: {
            required: false,
            serializedName: 'properties.typeHandlerVersion',
            type: {
              name: 'String'
            }
          },
          autoUpgradeMinorVersion: {
            required: false,
            serializedName: 'properties.autoUpgradeMinorVersion',
            type: {
              name: 'Boolean'
            }
          },
          settings: {
            required: false,
            serializedName: 'properties.settings',
            type: {
              name: 'Object'
            }
          },
          protectedSettings: {
            required: false,
            serializedName: 'properties.protectedSettings',
            type: {
              name: 'Object'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
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

module.exports = VirtualMachineScaleSetExtension;