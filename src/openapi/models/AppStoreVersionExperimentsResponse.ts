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
import type { AppStoreVersionExperiment } from './AppStoreVersionExperiment';
import {
    AppStoreVersionExperimentFromJSON,
    AppStoreVersionExperimentFromJSONTyped,
    AppStoreVersionExperimentToJSON,
} from './AppStoreVersionExperiment';
import type { AppStoreVersionExperimentsResponseIncludedInner } from './AppStoreVersionExperimentsResponseIncludedInner';
import {
    AppStoreVersionExperimentsResponseIncludedInnerFromJSON,
    AppStoreVersionExperimentsResponseIncludedInnerFromJSONTyped,
    AppStoreVersionExperimentsResponseIncludedInnerToJSON,
} from './AppStoreVersionExperimentsResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentsResponse
 */
export interface AppStoreVersionExperimentsResponse {
    /**
     * 
     * @type {Array<AppStoreVersionExperiment>}
     * @memberof AppStoreVersionExperimentsResponse
     */
    data: Array<AppStoreVersionExperiment>;
    /**
     * 
     * @type {Array<AppStoreVersionExperimentsResponseIncludedInner>}
     * @memberof AppStoreVersionExperimentsResponse
     */
    included?: Array<AppStoreVersionExperimentsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppStoreVersionExperimentsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppStoreVersionExperimentsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentsResponse interface.
 */
export function instanceOfAppStoreVersionExperimentsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreVersionExperimentsResponseFromJSON(json: any): AppStoreVersionExperimentsResponse {
    return AppStoreVersionExperimentsResponseFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppStoreVersionExperimentFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppStoreVersionExperimentsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppStoreVersionExperimentsResponseToJSON(value?: AppStoreVersionExperimentsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppStoreVersionExperimentToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppStoreVersionExperimentsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
