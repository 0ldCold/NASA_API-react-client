import chai, { expect } from "chai";
import jsonSchema from "chai-json-schema";

import { getPhotosEndPoint } from "../src/utils/api/photosEndPoint";
import { getManifest } from "../src/utils/api/missionManifests";
import { getArrayOfRandomUniqueInt } from "../src/utils/utils";

import manifestScheme from "../src/utils/api/scheme/Manifest.scheme.json";
import photosScheme from "../src/utils/api/scheme/Photos.scheme.json";

chai.use(jsonSchema);

describe("API", () => {
  it("should getting Mission Manifests for Curiosity", async () => {
    const missionManifest = await getManifest("Curiosity");
    expect(missionManifest).to.be.jsonSchema(manifestScheme);
  });
  it("should getting Photos for Curiosity on 2015.06.03", async () => {
    const photos = await getPhotosEndPoint("Curiosity", undefined, "2015-06-03");
    expect(photos).to.be.jsonSchema(photosScheme);
  });
});
const isUnique = (arr: number[]): boolean => {
  const set = new Set(arr);
  if (set.size === arr.length) {
    return true;
  }
  return false;
};
describe("utils", () => {
  it("should return an array of random unique numbers", () => {
    const arrNub = getArrayOfRandomUniqueInt(1, 10, 5);
    expect(isUnique(arrNub)).to.be.equal(true);
  });
});
