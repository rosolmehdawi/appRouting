export interface PostCreate{

text: string
image: string
likes: number
tags?: Array<string>
owner: string
}
export interface PostPreview

{
id: string,
text: string,
image: string,
likes: number,
tags:any,
publishDate: string,
owner?: object
}
export interface Post

{
id: string,
text: string,
image: string,
likes: number,
link: string,
tags: any,
publishDate: string,
owner: object,
}
export interface CommentCreate

{
message: string,
owner: string,
post: string,
}
export interface Comment
{
id: string,
message: string,
owner: object,
post: string,
publishDate: string,
}