"use strict";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");

const URL = process.env.NODE_ENV;
const pet_id = 4
const timeout = 5000;
const PATH_ID = `/v2/pet/${pet_id}`;

describe("PET", function () {
    it("Hello world", function (done) {
        this.timeout(timeout);
        request(URL)
            .get(PATH_ID)
            .expect("Content-Type", /json/)
            .end(function (err, res) {
                console.log(res.body)
                expect(res.status).to.be.eql(200);
                // joiAssert(res.body);
                done(err);
            });
    });
});