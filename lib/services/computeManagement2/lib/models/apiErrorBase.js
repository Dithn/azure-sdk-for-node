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
 * @class
 * Initializes a new instance of the ApiErrorBase class.
 * @constructor
 * Api error base.
 *
 * @member {string} [code] The error code.
 *
 * @member {string} [target] The target of the particular error.
 *
 * @member {string} [message] The error message.
 *
 */
class ApiErrorBase {
  constructor() {
  }

  /**
   * Defines the metadata of ApiErrorBase
   *
   * @returns {object} metadata of ApiErrorBase
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiErrorBase',
      type: {
        name: 'Composite',
        className: 'ApiErrorBase',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            serializedName: 'target',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
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

module.exports = ApiErrorBase;