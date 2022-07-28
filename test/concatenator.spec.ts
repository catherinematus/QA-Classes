import { default as assert } from "assert";
import { concatenator } from "../src/concatenator";

describe('concatenator positive tests', function() {

    it('concatenateStrings should return concatenation of two strings', function() {
        assert.strictEqual(concatenator('aa','bb'),'aabb');
        assert.strictEqual(concatenator('aa',''),'aa');
        assert.strictEqual(concatenator('','bb'),'bb');
    });

});