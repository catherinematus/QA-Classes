import superagent from "superagent";

const baseUrl = "https://reqres.in/api";
let response: any;

describe("Test HTTP methods", () => {
  test("Should correctly read GET response", async () => {
    try {
      response = await superagent.get(`${baseUrl}/users`);
    } catch(err: any) {
      throw new Error(err.message);
    }

    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(6);
  });

  test("Should correctly read GET response with queries", async () => {
    try {
      response = await superagent.get(`${baseUrl}/users`).query({ page: 2 });
    } catch(err: any) {
      throw new Error(err.message);
    }

    expect(response.status).toBe(200);
  });

  test("Should correctly read POST response with a body", async () => {
    try {
    response = await superagent.get(`${baseUrl}/users`)
    .set("Content-Type", "application/json")
    .send({ name: "Vlad", job: "teacher"});
    } catch(err: any) {
      throw new Error(err.message);
    }

    expect(response.status).toBe(200);
  });

  test("Should correctly read POST response with 400 status code", async () => {
    try {
    response = await superagent.post(`${baseUrl}/register`)
    .set("Content-Type", "application/json")
    .send({ email: "sydney@fife" });
    } catch(err: any) {
      expect(JSON.parse(err.response.text)).toEqual({ error : "Missing password" });
      expect(err.status).toBe(400);
    }
  });
})
