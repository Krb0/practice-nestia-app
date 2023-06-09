/**
 * @packageDocumentation
 * @module api.functional.bbs.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { IBbsArticle } from "./../../../structures/bbs/IBbsArticle";
import type { IPage } from "./../../../structures/common/IPage";

/**
 * List up entire articles, but paginated and summarized.
 * 
 * @param section Target section
 * @param input Pagination request info with searching and sorting options
 * @returns Paged articles witb summarization
 * 
 * @controller BbsArticlesController.index()
 * @path PATCH /bbs/articles/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function index
    (
        connection: IConnection,
        section: string,
        input: IBbsArticle.IRequest
    ): Promise<index.Output>
{
    return Fetcher.fetch
    (
        connection,
        index.ENCRYPTED,
        index.METHOD,
        index.path(section),
        input
    );
}
export namespace index
{
    export type Input = IBbsArticle.IRequest;
    export type Output = IPage<IBbsArticle.ISummary>;

    export const METHOD = "PATCH" as const;
    export const PATH: string = "/bbs/articles/:section";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string): string
    {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}`;
    }
}

/**
 * Get an article with detailed info.
 * 
 * @param section Target section
 * @param id Target articles id
 * @returns Detailed article info
 * 
 * @controller BbsArticlesController.at()
 * @path GET /bbs/articles/:section/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function at
    (
        connection: IConnection,
        section: string,
        id: string
    ): Promise<at.Output>
{
    return Fetcher.fetch
    (
        connection,
        at.ENCRYPTED,
        at.METHOD,
        at.path(section, id)
    );
}
export namespace at
{
    export type Output = IBbsArticle;

    export const METHOD = "GET" as const;
    export const PATH: string = "/bbs/articles/:section/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string, id: string): string
    {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}/${encodeURIComponent(id ?? "null")}`;
    }
}

/**
 * Store a new article.
 * 
 * @param section Target section
 * @param input New article info
 * @returns Newly created article info
 * 
 * @controller BbsArticlesController.store()
 * @path POST /bbs/articles/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function store
    (
        connection: IConnection,
        section: string,
        input: IBbsArticle.IStore
    ): Promise<store.Output>
{
    return Fetcher.fetch
    (
        connection,
        store.ENCRYPTED,
        store.METHOD,
        store.path(section),
        input
    );
}
export namespace store
{
    export type Input = IBbsArticle.IStore;
    export type Output = IBbsArticle;

    export const METHOD = "POST" as const;
    export const PATH: string = "/bbs/articles/:section";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string): string
    {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}`;
    }
}

/**
 * Update article.
 * 
 * When updating, this BBS system does not overwrite the content, but accumulate it.
 * Therefore, whenever an article being updated, length of {@link IBbsArticle.snapshots}
 * would be increased and accumulated.
 * 
 * @param section Target section
 * @param id Target articles id
 * @param input Content to update
 * @returns Newly created content info
 * 
 * @controller BbsArticlesController.update()
 * @path PUT /bbs/articles/:section/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function update
    (
        connection: IConnection,
        section: string,
        id: string,
        input: IBbsArticle.IUpdate
    ): Promise<update.Output>
{
    return Fetcher.fetch
    (
        connection,
        update.ENCRYPTED,
        update.METHOD,
        update.path(section, id),
        input
    );
}
export namespace update
{
    export type Input = IBbsArticle.IUpdate;
    export type Output = IBbsArticle.ISnapshot;

    export const METHOD = "PUT" as const;
    export const PATH: string = "/bbs/articles/:section/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string, id: string): string
    {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}/${encodeURIComponent(id ?? "null")}`;
    }
}