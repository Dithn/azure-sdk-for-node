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

/**
 * Subscription keys.
 *
 */
class SubscriptionKeysContract {
  /**
   * Create a SubscriptionKeysContract.
   * @property {string} [primaryKey] Subscription primary key.
   * @property {string} [secondaryKey] Subscription secondary key.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SubscriptionKeysContract
   *
   * @returns {object} metadata of SubscriptionKeysContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SubscriptionKeysContract',
      type: {
        name: 'Composite',
        className: 'SubscriptionKeysContract',
        modelProperties: {
          primaryKey: {
            required: false,
            serializedName: 'primaryKey',
            constraints: {
              MaxLength: 256,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          secondaryKey: {
            required: false,
            serializedName: 'secondaryKey',
            constraints: {
              MaxLength: 256,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SubscriptionKeysContract;