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
 * Connection string for the Cosmos DB account
 *
 */
class DatabaseAccountConnectionString {
  /**
   * Create a DatabaseAccountConnectionString.
   * @member {string} [connectionString] Value of the connection string
   * @member {string} [description] Description of the connection string
   */
  constructor() {
  }

  /**
   * Defines the metadata of DatabaseAccountConnectionString
   *
   * @returns {object} metadata of DatabaseAccountConnectionString
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseAccountConnectionString',
      type: {
        name: 'Composite',
        className: 'DatabaseAccountConnectionString',
        modelProperties: {
          connectionString: {
            required: false,
            readOnly: true,
            serializedName: 'connectionString',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DatabaseAccountConnectionString;