export interface Thumbnail {
  id: string;
  url: string;
}

export interface Post {
  author: string;
  title: string;
  description: string;
  content: {
    markdown: string;
    html: string;
  };
  postType: "dicas" | "italia" | "portugal";
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  thumbnail: Thumbnail;
  thumbnailDescription: string;
}
