// export default class Post{
//     constructor(
//         public id:string,
//         public userId:string,
//         public title:string,
//         public body:string
//     ){
        
//     }
// }

export default class Post {
    constructor(
      public id: string,
      public userId: string,
      public title: string,
      public body: string
    ) {
    }
    toObject(): any {
      return {
        // Return the properties of the Post object as key-value pairs
        // For example, if your Post class has properties like 'title', 'content', 'author', etc.
        id: this.id,
        userId: this.userId,
        title: this.title,
        body:this.body
        // Add more properties as needed
      };
    }
  }