import { storeFactory } from "../test/testUtils";

import { guessWord } from "./store/actions";

/*  This test is for the reducers and actions to see if the correct state is 
    returned after an action is dispatched. We set up a store wth the store 
    factory function and pass it an initial state if there is no default one set.
*/

describe("guessedWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";

  // test if the state updates correctly if there have been no guessed words before a new guess is made.
  describe("no guessed words", () => {
    const initialState = { secretWord };
    let store;
    beforeEach(() => {
      // pass the initial state to the store to override any default state in the reducers.
      store = storeFactory(initialState);
    });
    test("updates state correcly for unsuccessful guess", () => {
      // dispatch a `guessWord` action with an unsuccesful guess to see if it returns the correct state.
      store.dispatch(guessWord(unsuccessfulGuess));
      // get the state after the action is dispatched.
      const newState = store.getState();
      // create a portion of rhe state you expect to be updated.
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      // check if the expected state is part of the newState after an action is dis;atched.
      expect(newState).toEqual(expect.objectContaining(expectedState));
    });

    test("updates state correcly for successful guess", () => {
      // dispatch the action again , this time with the correct guess to see if the state updates correctly.
      store.dispatch(guessWord(secretWord));
      // get state after action is dispatched.
      const newState = store.getState();

      // create the state you expect to get.
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };

      // match to see if the expected state is contained in the new state.
      expect(newState).toEqual(expect.objectContaining(expectedState));
    });
  });

  // Test if the state updates corectly when there are previosu guessed words.
  describe("some guessed words", () => {
    // initialize prior guessed words and pass it as State.
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correcly for unsuccessful guess", () => {
      const newGuess = { guessedWord: unsuccessfulGuess, letterMatchCount: 3 };
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [...guessedWords, newGuess],
      };
      expect(newState).toEqual(expect.objectContaining(expectedState));
    });

    test("updates state correcly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expect.objectContaining(expectedState));
    });
  });
});
