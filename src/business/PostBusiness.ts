import { PostDatabase } from "../data/PostDatabase";

export class PostBusiness {
  private postDatabase = new PostDatabase();

  public async createPost(
    id: string,
    photo: string,
    description: string,
    createdAt: Date,
    type: string,
    createdBy: string
  ) {
    await this.postDatabase.createPost(
      id,
      photo,
      description,
      createdAt,
      type,
      createdBy
    );
  }

  public async getPosts(id: string) {
    return await this.postDatabase.getPosts(id);
  }

  public async getPostByType(id: string, postType: string) {
    return await this.postDatabase.getPostByType(id, postType);
  }

  public async searchPost(postId: string) {
    return await this.postDatabase.searchPost(postId)
  }

  public async isLiked(postId: string, userId: string) {
    return await this.postDatabase.isLiked(postId, userId)
  }

  public async likePost(postId: string, userId: string) {
    await this.postDatabase.likePost(postId, userId)
  }

  public async dislikePost(postId: string, userId: string) {
    await this.postDatabase.dislikePost(postId, userId)

  }
  public async createComment(
    postId: string,
    comment: string,
    authorId: string
    ) {
    await this.postDatabase.createComment(
      postId, 
      comment,
      authorId
      )
    }
}
