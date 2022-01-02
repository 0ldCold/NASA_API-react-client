import * as _chai from "chai";
import chai, { expect } from "chai";

import jsonSchema from "chai-json-schema";
import { getPhotosEndPoint } from "../src/api/photosEndPoint";
import { getManifest } from "../src/api/missionManifests";

import manifestScheme from "../src/api/scheme/Manifest.scheme.json";
import photosScheme from "../src/api/scheme/Photos.scheme.json";

chai.use(jsonSchema);

describe("API", () => {
  describe("is getting", () => {
    it("should getting Mission Manifests for Curiosity", async () => {
      const missionManifest = await getManifest("Curiosity");
      expect(missionManifest).to.be.jsonSchema(manifestScheme);
    });
    it("should getting Photos for Curiosity on 2015.06.03", async () => {
      const photos = await getPhotosEndPoint("Curiosity", undefined, "2015-06-03");
      expect(photos).to.be.jsonSchema(photosScheme);
    });
  });
});
