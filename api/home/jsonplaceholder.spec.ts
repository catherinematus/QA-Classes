/* eslint-disable @typescript-eslint/no-explicit-any */
import superagent, { Response } from "superagent";
import { Post } from "./types";
import * as getPostsSchema from "./schema/get-posts.schema.json";
import * as getAPostSchema from "./schema/get-a-post.schema.json"
import { validateSchema } from "./helpers";

const baseUrl = "https://jsonplaceholder.typicode.com";
const POSTS_QUANTITY = 100;
const USERS_QUANTITY = 10;

const postCreated: Post = {
  title: 'Marilyn Manson',
  body: 'Sweet dreams are made of this',
  userId: Math.floor(Math.random() * USERS_QUANTITY)
}
const postNo = Math.floor(Math.random() * POSTS_QUANTITY);

let response: Response;

describe("Test HTTP methods", () => {
  describe("GET method", () => {
    test("Should correctly get all posts", async () => {
      try {
        response = await superagent.get(`${baseUrl}/posts`);
      } catch (err: any) {
        throw new Error(err.message);
      }

      expect(response.status).toBe(200);
      validateSchema(getPostsSchema, response.body);
      expect(response.body.length).toBe(100);
    });

    test(`Should correctly get post No ${postNo}`, async () => {
      try {
        response = await superagent.get(`${baseUrl}/posts/${postNo}`);
      } catch (err: any) {
        throw new Error(err.message);
      }

      expect(response.status).toBe(200);
      validateSchema(getAPostSchema, response.body);
      expect(response.body.id).toStrictEqual(postNo);
    });

    test("Should correctly get results filtered by userId", async () => {
      const { userId } = postCreated;
      try {
        response = await superagent.get(`${baseUrl}/posts?userId=${userId}`);
      } catch (err: any) {
        throw new Error(err.message);
      }

      expect(response.status).toBe(200);
      validateSchema(getPostsSchema, response.body);
      response.body.forEach((post: any) => {
        expect(post.userId).toStrictEqual(userId);
      });
    });

    test("Should correctly handle non-existing post", async () => {
      try {
        response = await superagent.get(`${baseUrl}/posts/${POSTS_QUANTITY + 1}`);
      } catch (err: any) {
        expect(err.status).toBe(404);
      }
    });
  })

  test("Should create a new post with POST method", async () => {
    try {
      response = await superagent.post(`${baseUrl}/posts`)
        .set("Content-Type", "application/json")
        .send(postCreated);
    } catch (err: any) {
      throw new Error(err.message);
    }

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(postCreated);
  });

  test(`Should update a post No ${postNo} with PUT method`, async () => {
    const postUpdated = { ...postCreated };
    try {
      response = await superagent.put(`${baseUrl}/posts/${postNo}`)
        .set("Content-Type", "application/json")
        .send(postUpdated);
    } catch (err: any) {
      throw new Error(err.message);
    }

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(postUpdated);
  });


  describe("PATCH method", () => {
    for (const prop in postCreated) {
      test(`Should patch a ${prop} property of the post No ${postNo}`, async () => {
        try {
          response = await superagent.patch(`${baseUrl}/posts/${postNo}`)
            .set("Content-Type", "application/json")
            .send({ [prop]: postCreated[prop] });
        } catch (err: any) {
          throw new Error(err.message);
        }

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty(prop, postCreated[prop]);
      });
    }
  });

  test(`Should DELETE a post No ${postNo}`, async () => {
    try {
      response = await superagent.delete(`${baseUrl}/posts/${postNo}`)
    } catch (err: any) {
      throw new Error(err.message);
    }

    expect(response.status).toBe(200);
  });
})
