import { mocks } from "./mock";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not Found");
    }
    resolve(mock);
  });
};
restaurantsRequest()
  .then((result) => console.log("Result", result))
  .catch((error) => console.log("Error", error));
