export interface IPosts {
    data: (IPost)[] | []  ;
    total: number;
    page: number;
    limit: number;
  }
  export interface IPost {
    id: string;
    image: string;
    likes: number;
    tags?: (string)[] | null;
    text: string;
    publishDate: string;
    owner: Owner;
  }
  export interface Owner {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  }
  