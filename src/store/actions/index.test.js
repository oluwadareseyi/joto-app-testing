import moxios from "moxios";
import { storeFactory } from "../../../test/testUtils";
import { getSecretWord } from "./";

describe("get secret word", () => {
  // Before the test is run, install Moxios to take over from the normal call to the server the action will make, in this case, the `getSecretWord` action.
  beforeEach(() => {
    moxios.install();
  });
  // uninstall Moxios after the test is run.
  afterEach(() => {
    moxios.uninstall();
  });

  test("adds response word to state", async () => {
    const secretWord = "party";

    // we create an instance of the store from the utils File and return the store.
    const store = storeFactory();

    // we call moxios wait to make an async request to the most recent call i.e. the action we'll be dispatching. We then respond with what our normal server should respond with on success.
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // we dispatch the getSecretWord action asynchronously, and this will be the action that moxios will take as the most recent.
    await store.dispatch(getSecretWord());

    // we get a piece of our state after the action has been called, and see if the secret word reducer is updated.
    const newState = store.getState();

    // We test to expect the secretWord part of our global store to be the secret word gotten from the server response.
    expect(newState.secretWord).toBe(secretWord);
  });
});
