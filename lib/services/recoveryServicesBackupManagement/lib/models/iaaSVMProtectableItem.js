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
 * IaaS VM workload-specific backup item.
 *
 * @extends models['WorkloadProtectableItem']
 */
class IaaSVMProtectableItem extends models['WorkloadProtectableItem'] {
  /**
   * Create a IaaSVMProtectableItem.
   * @member {string} [virtualMachineId] Fully qualified ARM ID of the virtual
   * machine.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IaaSVMProtectableItem
   *
   * @returns {object} metadata of IaaSVMProtectableItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IaaSVMProtectableItem',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'protectableItemType',
          clientName: 'protectableItemType'
        },
        uberParent: 'WorkloadProtectableItem',
        className: 'IaaSVMProtectableItem',
        modelProperties: {
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          workloadType: {
            required: false,
            serializedName: 'workloadType',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          protectionState: {
            required: false,
            serializedName: 'protectionState',
            type: {
              name: 'String'
            }
          },
          protectableItemType: {
            required: true,
            serializedName: 'protectableItemType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          virtualMachineId: {
            required: false,
            serializedName: 'virtualMachineId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IaaSVMProtectableItem;
