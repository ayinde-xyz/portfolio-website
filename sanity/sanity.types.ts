/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Experience = {
  _id: string;
  _type: "experience";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  company?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
};

export type Certifications = {
  _id: string;
  _type: "certifications";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  organization?: string;
  description?: string;
  date?: string;
  certificationId?: string;
  url?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Projects = {
  _id: string;
  _type: "projects";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  bio?: string;
  description?: string;
  url?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Intro = {
  _id: string;
  _type: "intro";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  description?: string;
  role?: Array<string>;
  socials?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    github?: string;
  };
  seo?: Seo;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Seo = {
  _type: "seo";
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  noIndex?: boolean;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  publishedAt?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Experience | Certifications | Projects | Intro | Seo | Post | Author | Category | Slug | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: INTRO_QUERY
// Query: *[_type == "intro"][0] {        name,        slug,        description,        role,        socials,        image,        "seo": {          "title": coalesce(seo.title, name),          "description": seo.description,          "image": seo.image,          "noIndex": seo.noIndex == true        }    }
export type INTRO_QUERYResult = {
  name: string | null;
  slug: Slug | null;
  description: string | null;
  role: Array<string> | null;
  socials: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    github?: string;
  } | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  seo: {
    title: string | null;
    description: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    noIndex: boolean | false;
  };
} | null;
// Variable: PROJECTS_QUERY
// Query: *[_type == "projects"] {        _id,        title,        slug,        bio,        description,        url,        image,}
export type PROJECTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  bio: string | null;
  description: string | null;
  url: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
}>;
// Variable: CERTIFICATIONS_QUERY
// Query: *[_type == "certifications"] {        _id,        title,        organization,        description,        date,        certificationId,        url,        image,}
export type CERTIFICATIONS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  organization: string | null;
  description: string | null;
  date: string | null;
  certificationId: string | null;
  url: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
}>;
// Variable: EXPERIENCE_QUERY
// Query: *[_type == "experience"] {        _id,        title,        company,        description,        startDate,        endDate,       }
export type EXPERIENCE_QUERYResult = Array<{
  _id: string;
  title: string | null;
  company: string | null;
  description: string | null;
  startDate: string | null;
  endDate: string | null;
}>;
// Variable: HERO_QUERY
// Query: *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {    content,      _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  body,  mainImage {    asset->{      url,      metadata    },    alt  },  "categories": coalesce(    categories[]->{      _id,      slug,      title    },    []  ),  "date": coalesce(publishedAt, _updatedAt),  "author": author->{"name": coalesce(name, "Anonymous"), image},  }
export type HERO_QUERYResult = {
  content: null;
  _id: string;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset: {
      url: string | null;
      metadata: SanityImageMetadata | null;
    } | null;
    alt: string | null;
  } | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  date: string;
  author: {
    name: string | "Anonymous";
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
} | null;
// Variable: MORESTORIES_QUERY
// Query: *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {      _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  body,  mainImage {    asset->{      url,      metadata    },    alt  },  "categories": coalesce(    categories[]->{      _id,      slug,      title    },    []  ),  "date": coalesce(publishedAt, _updatedAt),  "author": author->{"name": coalesce(name, "Anonymous"), image},  }
export type MORESTORIES_QUERYResult = Array<{
  _id: string;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset: {
      url: string | null;
      metadata: SanityImageMetadata | null;
    } | null;
    alt: string | null;
  } | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  date: string;
  author: {
    name: string | "Anonymous";
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
}>;
// Variable: POSTS_QUERY
// Query: *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {      _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  body,  mainImage {    asset->{      url,      metadata    },    alt  },  "categories": coalesce(    categories[]->{      _id,      slug,      title    },    []  ),  "date": coalesce(publishedAt, _updatedAt),  "author": author->{"name": coalesce(name, "Anonymous"), image},  }
export type POSTS_QUERYResult = Array<{
  _id: string;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset: {
      url: string | null;
      metadata: SanityImageMetadata | null;
    } | null;
    alt: string | null;
  } | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  date: string;
  author: {
    name: string | "Anonymous";
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
}>;
// Variable: POST_QUERY
// Query: *[_type == "post" && slug.current == $slug] [0] {      _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  body,  mainImage {    asset->{      url,      metadata    },    alt  },  "categories": coalesce(    categories[]->{      _id,      slug,      title    },    []  ),  "date": coalesce(publishedAt, _updatedAt),  "author": author->{"name": coalesce(name, "Anonymous"), image},  }
export type POST_QUERYResult = {
  _id: string;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset: {
      url: string | null;
      metadata: SanityImageMetadata | null;
    } | null;
    alt: string | null;
  } | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  date: string;
  author: {
    name: string | "Anonymous";
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
} | null;
// Variable: SITEMAP_QUERY
// Query: *[_type in ["intro", "post"] && defined(slug.current)] {      "href": select(        _type == "intro" => "/" ,        _type == "post" => "/blogs/" + slug.current,        slug.current      ),      _updatedAt  }
export type SITEMAP_QUERYResult = Array<{
  href: "/";
  _updatedAt: string;
} | {
  href: string | null;
  _updatedAt: string;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"intro\"][0] {\n        name,\n        slug,\n        description,\n        role,\n        socials,\n        image,\n        \"seo\": {\n          \"title\": coalesce(seo.title, name),\n          \"description\": seo.description,\n          \"image\": seo.image,\n          \"noIndex\": seo.noIndex == true\n        }\n    }": INTRO_QUERYResult;
    "*[_type == \"projects\"] {\n        _id,\n        title,\n        slug,\n        bio,\n        description,\n        url,\n        image,\n}": PROJECTS_QUERYResult;
    "*[_type == \"certifications\"] {\n        _id,\n        title,\n        organization,\n        description,\n        date,\n        certificationId,\n        url,\n        image,\n}": CERTIFICATIONS_QUERYResult;
    "*[_type == \"experience\"] {\n        _id,\n        title,\n        company,\n        description,\n        startDate,\n        endDate,\n       \n}": EXPERIENCE_QUERYResult;
    "\n  *[_type == \"post\" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {\n    content,\n    \n  _id,\n  \"status\": select(_originalId in path(\"drafts.**\") => \"draft\", \"published\"),\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  body,\n  mainImage {\n    asset->{\n      url,\n      metadata\n    },\n    alt\n  },\n  \"categories\": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  \"date\": coalesce(publishedAt, _updatedAt),\n  \"author\": author->{\"name\": coalesce(name, \"Anonymous\"), image},\n\n  }\n": HERO_QUERYResult;
    "\n  *[_type == \"post\" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {\n    \n  _id,\n  \"status\": select(_originalId in path(\"drafts.**\") => \"draft\", \"published\"),\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  body,\n  mainImage {\n    asset->{\n      url,\n      metadata\n    },\n    alt\n  },\n  \"categories\": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  \"date\": coalesce(publishedAt, _updatedAt),\n  \"author\": author->{\"name\": coalesce(name, \"Anonymous\"), image},\n\n  }\n": MORESTORIES_QUERYResult;
    "\n  *[_type == \"post\" && defined(slug.current)] | order(date desc, _updatedAt desc) {\n    \n  _id,\n  \"status\": select(_originalId in path(\"drafts.**\") => \"draft\", \"published\"),\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  body,\n  mainImage {\n    asset->{\n      url,\n      metadata\n    },\n    alt\n  },\n  \"categories\": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  \"date\": coalesce(publishedAt, _updatedAt),\n  \"author\": author->{\"name\": coalesce(name, \"Anonymous\"), image},\n\n  }\n": POSTS_QUERYResult;
    "\n  *[_type == \"post\" && slug.current == $slug] [0] {\n    \n  _id,\n  \"status\": select(_originalId in path(\"drafts.**\") => \"draft\", \"published\"),\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  body,\n  mainImage {\n    asset->{\n      url,\n      metadata\n    },\n    alt\n  },\n  \"categories\": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  \"date\": coalesce(publishedAt, _updatedAt),\n  \"author\": author->{\"name\": coalesce(name, \"Anonymous\"), image},\n\n  }\n": POST_QUERYResult;
    "\n  *[_type in [\"intro\", \"post\"] && defined(slug.current)] {\n      \"href\": select(\n        _type == \"intro\" => \"/\" ,\n        _type == \"post\" => \"/blogs/\" + slug.current,\n        slug.current\n      ),\n      _updatedAt\n  }\n  ": SITEMAP_QUERYResult;
  }
}
