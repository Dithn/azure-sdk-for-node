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
 * Output of custom domain validation.
 *
 */
class ValidateCustomDomainOutput {
  /**
   * Create a ValidateCustomDomainOutput.
   * @member {boolean} [customDomainValidated] Indicates whether the custom
   * domain is valid or not.
   * @member {string} [reason] The reason why the custom domain is not valid.
   * @member {string} [message] Error message describing why the custom domain
   * is not valid.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ValidateCustomDomainOutput
   *
   * @returns {object} metadata of ValidateCustomDomainOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ValidateCustomDomainOutput',
      type: {
        name: 'Composite',
        className: 'ValidateCustomDomainOutput',
        modelProperties: {
          customDomainValidated: {
            required: false,
            readOnly: true,
            serializedName: 'customDomainValidated',
            type: {
              name: 'Boolean'
            }
          },
          reason: {
            required: false,
            readOnly: true,
            serializedName: 'reason',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ValidateCustomDomainOutput;