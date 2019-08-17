
import {verifyQuery} from './fetchTweetsService.js';

test('verifyQuery should fail', () => {
    expect(verifyQuery(null)).toBeFalsy();
    expect(verifyQuery(123)).toBeFalsy();
    expect(verifyQuery([])).toBeFalsy();
    expect(verifyQuery("")).toBeFalsy();
    expect(verifyQuery("abc~")).toBeFalsy();
    expect(verifyQuery("abc~dec")).toBeFalsy();
    expect(verifyQuery("~?:{")).toBeFalsy();
    expect(verifyQuery("  :   ")).toBeFalsy();
});

test('verifyQuery should pass', () => {
    expect(verifyQuery("a")).toBeTruthy();
    expect(verifyQuery("A")).toBeTruthy();
    expect(verifyQuery("Adam Eve")).toBeTruthy();
});