import assert from "assert";
import { concatenator } from "../src/concatenator";

describe('concatenator positive tests', function() {

    it('concatenator should return concatenation of two strings', function() {
        assert.strictEqual(concatenator('aa','bb'),'aabb');
        assert.strictEqual(concatenator('aa',''),'aa');
        assert.strictEqual(concatenator('','bb'),'bb');
        assert.strictEqual(concatenator('3','90'),'390');
    });

});