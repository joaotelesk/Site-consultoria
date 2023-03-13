export interface Thumbnail {
  id: string;
  url: string;
}

export interface Post {
  author: string;
  title: string;
  description: string;
  content: string;
  postType: "dicas" | "italia" | "portugal";
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  thumbnail: Thumbnail;
  thumbnailDescription: string;
  banner: string;
  bannerAlt: string;
}

export interface FormValue {
  name: string;
  email: string;
  cellPhone: string;
  message: string;
}
