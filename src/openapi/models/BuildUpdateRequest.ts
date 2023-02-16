/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BuildUpdateRequestData } from './BuildUpdateRequestData';
import {
    BuildUpdateRequestDataFromJSON,
    BuildUpdateRequestDataFromJSONTyped,
    BuildUpdateRequestDataToJSON,
} from './BuildUpdateRequestData';

/**
 * 
 * @export
 * @interface BuildUpdateRequest
 */
export interface BuildUpdateRequest {
    /**
     * 
     * @type {BuildUpdateRequestData}
     * @memberof BuildUpdateRequest
     */
    data: BuildUpdateRequestData;
}

/**
 * Check if a given object implements the BuildUpdateRequest interface.
 */
export function instanceOfBuildUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BuildUpdateRequestFromJSON(json: any): BuildUpdateRequest {
    return BuildUpdateRequestFromJSONTyped(json, false);
}

export function BuildUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BuildUpdateRequestDataFromJSON(json['data']),
    };
}

export function BuildUpdateRequestToJSON(value?: BuildUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BuildUpdateRequestDataToJSON(value.data),
    };
}
