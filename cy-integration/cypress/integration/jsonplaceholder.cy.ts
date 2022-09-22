/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from "../support/types/types";
import * as getPostsSchema from "../support/schema/get-posts.schema.json";
import * as getAPostSchema from "../support/schema/get-a-post.schema.json"
import { validateSchema } from "../support/helpers";

const POSTS_QUANTITY = 100;
const USERS_QUANTITY = 10;

const postCreated: Post = {
  title: 'Marilyn Manson',
  body: 'Sweet dreams are made of this',
  userId: Math.floor(Math.random() * USERS_QUANTITY) + 1
}
const postNo = Math.floor(Math.random() * POSTS_QUANTITY) + 1;

describe("Test HTTP methods", () => {
  describe("GET method", () => {
    it("Should correctly get all posts", () => {
      cy.request({ url: "/posts", method: "GET" }).then(response => {
        expect(response.status).to.equal(200);
        validateSchema(getPostsSchema, response.body);
        expect(response.body.length).to.equal(POSTS_QUANTITY);
      });
    });

    it(`Should correctly get post No ${postNo}`, () => {
      cy.request({ url: `/posts/${postNo}`, method: "GET" }).then(response => {
        expect(response.status).to.equal(200);
        validateSchema(getAPostSchema, response.body);
        expect(response.body.id).to.equal(postNo);
      });
    });

    it("Should correctly get results filtered by userId", () => {
      const { userId } = postCreated;
      cy.request({ url: `/posts?userId=${userId}`, method: "GET" }).then(response => {
        expect(response.status).to.equal(200);
        validateSchema(getPostsSchema, response.body);

        response.body.forEach((post: any) => {
          expect(post.userId).to.equal(userId);
        });
      });
    });

    it("Should correctly handle non-existing post", () => {
      cy.request({ url: `/posts/${POSTS_QUANTITY + 1}`, method: "GET", failOnStatusCode: false }).then(response => {
        expect(response.status).to.equal(404);
      });
    })
  })

  it("Should create a new post with POST method", () => {
    cy.request({ url: "/posts", method: "POST", headers: { "Content-Type": "application/json" }, body: postCreated }).then(response => {
      expect(response.status).to.equal(201);
      for (const key in postCreated) {
        expect(postCreated[key]).to.equal(response.body[key]);
      }
    });
  });

  it(`Should update a post No ${postNo} with PUT method`, () => {
    const postUpdated = { ...postCreated };
    cy.request({ url: `/posts/${postNo}`, method: "PUT", headers: { "Content-Type": "application/json" }, body: postUpdated }).then(response => {
      expect(response.status).to.equal(200);
      for (const key in postUpdated) {
        expect(postUpdated[key]).to.equal(response.body[key]);
      }
    });
  });


  describe("PATCH method", () => {
    for (const prop in postCreated) {
      it(`Should patch a ${prop} property of the post No ${postNo}`, () => {
        cy.request({
          url: `/posts/${postNo}`, method: "PATCH", headers: { "Content-Type": "application/json" }, body: { [prop]: postCreated[prop] }
        }).then(response => {
          expect(response.status).to.equal(200);
          expect(response.body).to.haveOwnProperty(prop, postCreated[prop]);
        });
      });
    }
  });

  it(`Should DELETE a post No ${postNo}`, async () => {
    cy.request({
      url: `/posts/${postNo}`, method: "DELETE"
    }).then(response => {
      expect(response.status).to.equal(200);
    });
  });
})