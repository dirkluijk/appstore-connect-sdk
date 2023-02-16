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
import type { RoutingAppCoverageCreateRequestData } from './RoutingAppCoverageCreateRequestData';
import {
    RoutingAppCoverageCreateRequestDataFromJSON,
    RoutingAppCoverageCreateRequestDataFromJSONTyped,
    RoutingAppCoverageCreateRequestDataToJSON,
} from './RoutingAppCoverageCreateRequestData';

/**
 * 
 * @export
 * @interface RoutingAppCoverageCreateRequest
 */
export interface RoutingAppCoverageCreateRequest {
    /**
     * 
     * @type {RoutingAppCoverageCreateRequestData}
     * @memberof RoutingAppCoverageCreateRequest
     */
    data: RoutingAppCoverageCreateRequestData;
}

/**
 * Check if a given object implements the RoutingAppCoverageCreateRequest interface.
 */
export function instanceOfRoutingAppCoverageCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function RoutingAppCoverageCreateRequestFromJSON(json: any): RoutingAppCoverageCreateRequest {
    return RoutingAppCoverageCreateRequestFromJSONTyped(json, false);
}

export function RoutingAppCoverageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': RoutingAppCoverageCreateRequestDataFromJSON(json['data']),
    };
}

export function RoutingAppCoverageCreateRequestToJSON(value?: RoutingAppCoverageCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': RoutingAppCoverageCreateRequestDataToJSON(value.data),
    };
}
