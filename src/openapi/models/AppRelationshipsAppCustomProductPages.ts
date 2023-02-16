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
import type { AppCategoryRelationshipsSubcategoriesLinks } from './AppCategoryRelationshipsSubcategoriesLinks';
import {
    AppCategoryRelationshipsSubcategoriesLinksFromJSON,
    AppCategoryRelationshipsSubcategoriesLinksFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesLinksToJSON,
} from './AppCategoryRelationshipsSubcategoriesLinks';
import type { AppCustomProductPageVersionRelationshipsAppCustomProductPageData } from './AppCustomProductPageVersionRelationshipsAppCustomProductPageData';
import {
    AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSONTyped,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSON,
} from './AppCustomProductPageVersionRelationshipsAppCustomProductPageData';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppRelationshipsAppCustomProductPages
 */
export interface AppRelationshipsAppCustomProductPages {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof AppRelationshipsAppCustomProductPages
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppRelationshipsAppCustomProductPages
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppCustomProductPageVersionRelationshipsAppCustomProductPageData>}
     * @memberof AppRelationshipsAppCustomProductPages
     */
    data?: Array<AppCustomProductPageVersionRelationshipsAppCustomProductPageData>;
}

/**
 * Check if a given object implements the AppRelationshipsAppCustomProductPages interface.
 */
export function instanceOfAppRelationshipsAppCustomProductPages(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsAppCustomProductPagesFromJSON(json: any): AppRelationshipsAppCustomProductPages {
    return AppRelationshipsAppCustomProductPagesFromJSONTyped(json, false);
}

export function AppRelationshipsAppCustomProductPagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsAppCustomProductPages {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSON)),
    };
}

export function AppRelationshipsAppCustomProductPagesToJSON(value?: AppRelationshipsAppCustomProductPages | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSON)),
    };
}
