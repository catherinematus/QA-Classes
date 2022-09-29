/* eslint-disable @typescript-eslint/no-explicit-any */
import { METHODS, Post } from "../support/types";
import * as getPostsSchema from "../support/schema/get-posts.schema.json";
import * as getAPostSchema from "../support/schema/get-a-post.schema.json"
import { validateSchema } from "../support/helpers";
import { client } from "../support/https-client";
import { expect } from "chai";

const POSTS_QUANTITY = 100;
const USERS_QUANTITY = 10;

const postCreated: Post = {
  title: 'Marilyn Manson',
  body: 'Sweet dreams are made of this',
  userId: Math.floor(Math.random() * USERS_QUANTITY) + 1
}
const postNo = Math.floor(Math.random() * POSTS_QUANTITY) + 1;

let response: any;

describe("Test HTTP methods", () => {
  describe(`${METHODS.GET} method`, () => {
    it("Should correctly get all posts", async () => {
      try {
        response = await client.request(METHODS.GET, { url: "/posts" });
      } catch (err: any) {
        throw new Error(err.message);
      }

      expect(response.status).to.equal(200);
      validateSchema(getPostsSchema, response.data);
      expect(response.data).to.have.length(POSTS_QUANTITY);
    });

    it(`Should correctly get post No ${postNo}`, async () => {
      try {
        response = await client.request(METHODS.GET, { url: `/posts/${postNo}` });
      } catch (err: any) {
        throw new Error(err.message);
      }

      expect(response.status).to.equal(200);
      validateSchema(getAPostSchema, response.data);
      expect(response.data.id).to.equal(postNo);
    });

    it("Should correctly get results filtered by userId", async () => {
      const { userId } = postCreated;
      try {
        response = await client.request(METHODS.GET, { url: `/posts?userId=${userId}` });
      } catch (err: any) {
        throw new Error(err.message);
      }

      expect(response.status).to.equal(200);
      validateSchema(getPostsSchema, response.data);
      response.data.forEach((post: any) => {
        expect(post.userId).to.equal(userId);
      });
    });

    it("Should correctly handle non-existing post", async () => {
      try {
        response = await client.request(METHODS.GET, { url: `/posts/${POSTS_QUANTITY + 1}` });
      } catch (err: any) {
        expect(err.response.status).to.equal(404);
      }
    });
  })

  it(`Should create a new post with ${METHODS.POST} method`, async () => {
    try {
      response = await client.request(METHODS.POST, { url: "/posts", body: postCreated, headers: { "Content-Type": "application/json" } })
    } catch (err: any) {
      throw new Error(err.message);
    }

    expect(response.status).to.equal(201);
    for (const key in postCreated) {
      expect(postCreated[key]).to.equal(response.data[key]);
    }
  });

  it(`Should update a post No ${postNo} with ${METHODS.PUT} method`, async () => {
    const postUpdated = { ...postCreated };
    try {
      response = await client.request(METHODS.PUT, { url: `/posts/${postNo}`, body: postUpdated, headers: { "Content-Type": "application/json" } })
    } catch (err: any) {
      throw new Error(err.message);
    }

    expect(response.status).to.equal(200);
    for (const key in postUpdated) {
      expect(postUpdated[key]).to.equal(response.data[key]);
    }
  });


  describe(`${METHODS.PATCH} method`, () => {
    for (const prop in postCreated) {
      it(`Should patch a ${prop} property of the post No ${postNo}`, async () => {
        try {
          response = await client.request(METHODS.PATCH, { url: `/posts/${postNo}`, body: { [prop]: postCreated[prop] }, headers: { "Content-Type": "application/json" } });
        } catch (err: any) {
          throw new Error(err.message);
        }

        expect(response.status).to.equal(200);
        expect(response.data).to.haveOwnProperty(prop, postCreated[prop]);
      });
    }
  });

  it(`Should ${METHODS.DELETE} a post No ${postNo}`, async () => {
    try {
      response = await client.request(METHODS.DELETE, { url: `/posts/${postNo}` })
    } catch (err: any) {
      throw new Error(err.message);
    }

    expect(response.status).to.equal(200);
  });
})
