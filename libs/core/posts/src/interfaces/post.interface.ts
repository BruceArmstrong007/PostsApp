export interface Post {
  id: string;
  name: string;
  content: string;
}
export type PostId = Pick<Post, "id">;
