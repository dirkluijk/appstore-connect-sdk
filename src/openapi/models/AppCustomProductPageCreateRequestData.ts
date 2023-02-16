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
import type { AppCustomProductPageCreateRequestDataAttributes } from './AppCustomProductPageCreateRequestDataAttributes';
import {
    AppCustomProductPageCreateRequestDataAttributesFromJSON,
    AppCustomProductPageCreateRequestDataAttributesFromJSONTyped,
    AppCustomProductPageCreateRequestDataAttributesToJSON,
} from './AppCustomProductPageCreateRequestDataAttributes';
import type { AppCustomProductPageCreateRequestDataRelationships } from './AppCustomProductPageCreateRequestDataRelationships';
import {
    AppCustomProductPageCreateRequestDataRelationshipsFromJSON,
    AppCustomProductPageCreateRequestDataRelationshipsFromJSONTyped,
    AppCustomProductPageCreateRequestDataRelationshipsToJSON,
} from './AppCustomProductPageCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppCustomProductPageCreateRequestData
 */
export interface AppCustomProductPageCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageCreateRequestData
     */
    type: AppCustomProductPageCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppCustomProductPageCreateRequestDataAttributes}
     * @memberof AppCustomProductPageCreateRequestData
     */
    attributes: AppCustomProductPageCreateRequestDataAttributes;
    /**
     * 
     * @type {AppCustomProductPageCreateRequestDataRelationships}
     * @memberof AppCustomProductPageCreateRequestData
     */
    relationships: AppCustomProductPageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppCustomProductPageCreateRequestDataTypeEnum = {
    AppCustomProductPages: 'appCustomProductPages'
} as const;
export type AppCustomProductPageCreateRequestDataTypeEnum = typeof AppCustomProductPageCreateRequestDataTypeEnum[keyof typeof AppCustomProductPageCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageCreateRequestData interface.
 */
export function instanceOfAppCustomProductPageCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppCustomProductPageCreateRequestDataFromJSON(json: any): AppCustomProductPageCreateRequestData {
    return AppCustomProductPageCreateRequestDataFromJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppCustomProductPageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppCustomProductPageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppCustomProductPageCreateRequestDataToJSON(value?: AppCustomProductPageCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppCustomProductPageCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppCustomProductPageCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
