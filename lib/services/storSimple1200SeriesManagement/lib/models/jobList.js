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
 * Collection of jobs
 */
class JobList extends Array {
  /**
   * Create a JobList.
   * @member {string} [nextLink] The NextLink.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobList
   *
   * @returns {object} metadata of JobList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobList',
      type: {
        name: 'Composite',
        className: 'JobList',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobElementType',
                  type: {
                    name: 'Composite',
                    className: 'Job'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobList;
