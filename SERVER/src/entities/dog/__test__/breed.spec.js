const breedControllers = require("../breed.controllers");
const db = require("../../../db");

("use strict");
beforeAll(async () => {
  await db.connect();
});

afterAll(async () => {
  //await breedControllers.deleteOne({name:"SALCHICA2"});
  await db.disconnect();
});

describe("DOG Api tests", () => {
  test("Get Breeds", async () => {
    expect.assertions(3);
    const req = {};
    const res = {
      status(code) {
        expect(code).toBe(200);
        return this;
      },
      json(docs) {
        //console.log(`Get Breeds ${JSON.stringify(docs)}`);
        expect(typeof docs).toBe("object");
        expect(Array.isArray(docs)).toBe(false);
      },
    };
    await breedControllers.getMany(req, res);
  });

  xtest("Get One Breed", async () => {
    expect.assertions(5);
    const req = { params: { breed: "60d64131c19553bfbb26f1ba" } };

    const res = {
      status(code) {
        expect(code).toBe(201);
        return this;
      },
      json(doc) {
        //console.log(`el res en Get One Breed es ${JSON.stringify(doc)}`);
        expect(typeof doc).toBe("object");
        expect(doc).toHaveProperty("results.name", "PINSCHER");
        expect(doc).toHaveProperty("results.size", "SMALL");
        expect(doc).toHaveProperty("results.adultWeight", 5);
      },
    };
    await breedControllers.getOne(req, res);
  });

  xtest("Create One Breed", async () => {
    expect.assertions(4);

    const newBreed = {
      name: "SALCHICA",
      size: "BIG",
      adultWeight: 54,
    };
    const req = { body: newBreed };
    //console.log(`request ${JSON.stringify(req)}`);
    const res = {
      status(code) {
        expect(code).toBe(201);
        return this;
      },
      json(doc) {
        //console.log(`doc ${doc.JSON}`);
        expect(doc).toHaveProperty("results.name", "SALCHICA");
        expect(doc).toHaveProperty("results.size", "BIG");
        expect(doc).toHaveProperty("results.adultWeight", 54);
      },
    };
    await breedControllers.createOne(req, res);
  });

  test("Update One Breed", async () => {
    expect.assertions(4);

    const req = {
      params: { breed: "60d641b7eba107c12511f9bc" },
      body: {
        name: "SALCHICA25",
      },
    };
    console.log(`request ${JSON.stringify(req)}`);
    const res = {
      status(code) {
        expect(code).toBe(200);
        return this;
      },
      json(doc) {
        console.log(`doc ${doc.JSON}`);
        expect(doc).toHaveProperty("results.name", "SALCHICA25");
        expect(doc).toHaveProperty("results.size", "BIG");
        expect(doc).toHaveProperty("results.adultWeight", 54);
      },
    };
    await breedControllers.updateOne(req, res);
  });
});
