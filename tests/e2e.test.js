const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello CESI");
  });
});

describe("Test /contacts route", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/api/contacts");
    expect(response.statusCode).toBe(200);
  });
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/api/contacts");
    expect(response.body[0].prenom).toBe("Daniel");
  });
});
