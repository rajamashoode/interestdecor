declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"4th-of-july-decor-ideas.md": {
	id: "4th-of-july-decor-ideas.md";
  slug: "4th-of-july-decor-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"7-minimalist-living-room-ideas-that-feel-warm-not-cold.md": {
	id: "7-minimalist-living-room-ideas-that-feel-warm-not-cold.md";
  slug: "7-minimalist-living-room-ideas-that-feel-warm-not-cold";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"air-dry-clay-home-decor.md": {
	id: "air-dry-clay-home-decor.md";
  slug: "air-dry-clay-home-decor";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"apartment-herb-garden-windowsill-gardening.md": {
	id: "apartment-herb-garden-windowsill-gardening.md";
  slug: "apartment-herb-garden-windowsill-gardening";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"best-houseplants-for-living-room.md": {
	id: "best-houseplants-for-living-room.md";
  slug: "best-houseplants-for-living-room";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"bright-small-living-room-feel-bigger.md": {
	id: "bright-small-living-room-feel-bigger.md";
  slug: "bright-small-living-room-feel-bigger";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"butter-yellow-bedroom-ideas.md": {
	id: "butter-yellow-bedroom-ideas.md";
  slug: "butter-yellow-bedroom-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"decorative-plate-wall-ideas.md": {
	id: "decorative-plate-wall-ideas.md";
  slug: "decorative-plate-wall-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"deep-plum-kitchen-ideas.md": {
	id: "deep-plum-kitchen-ideas.md";
  slug: "deep-plum-kitchen-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"diy-dried-flower-arrangement-beginners-guide.md": {
	id: "diy-dried-flower-arrangement-beginners-guide.md";
  slug: "diy-dried-flower-arrangement-beginners-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"diy-home-decor-under-20-budget-craft-ideas.md": {
	id: "diy-home-decor-under-20-budget-craft-ideas.md";
  slug: "diy-home-decor-under-20-budget-craft-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"eucalyptus-home-decor-ideas.md": {
	id: "eucalyptus-home-decor-ideas.md";
  slug: "eucalyptus-home-decor-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-grow-basil-at-home-beginners-guide.md": {
	id: "how-to-grow-basil-at-home-beginners-guide.md";
  slug: "how-to-grow-basil-at-home-beginners-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"navy-blue-kitchen-ideas.md": {
	id: "navy-blue-kitchen-ideas.md";
  slug: "navy-blue-kitchen-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"olive-green-kitchen-ideas.md": {
	id: "olive-green-kitchen-ideas.md";
  slug: "olive-green-kitchen-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"olive-green-living-room-ideas.md": {
	id: "olive-green-living-room-ideas.md";
  slug: "olive-green-living-room-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"room-decoration-ideas-small-spaces.md": {
	id: "room-decoration-ideas-small-spaces.md";
  slug: "room-decoration-ideas-small-spaces";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sage-green-bathroom-ideas.md": {
	id: "sage-green-bathroom-ideas.md";
  slug: "sage-green-bathroom-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sage-green-bedroom-ideas.md": {
	id: "sage-green-bedroom-ideas.md";
  slug: "sage-green-bedroom-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"small-bathroom-ideas.md": {
	id: "small-bathroom-ideas.md";
  slug: "small-bathroom-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"small-kitchen-ideas-2026.md": {
	id: "small-kitchen-ideas-2026.md";
  slug: "small-kitchen-ideas-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"small-living-room-ideas-renters-under-200.md": {
	id: "small-living-room-ideas-renters-under-200.md";
  slug: "small-living-room-ideas-renters-under-200";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"white-terracotta-bedroom-ideas.md": {
	id: "white-terracotta-bedroom-ideas.md";
  slug: "white-terracotta-bedroom-ideas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
