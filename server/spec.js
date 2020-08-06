const request = require('supertest');


describe("loading express", function () {
  beforeEach(function () {
    server = require("./index");
  });

  afterEach(function () {
    server.close();
  });

  it("responds to /", function(done) {
    request(server).get("/").expect(200, done);
  });

  it("responds to /popular", function(done) {
    request(server)
      .get("/popular")
      .expect(200, done);
  });

  it("responds to /movie/1", function(done) {
    request(server)
      .get("/movie/1")
      .expect(200, done);
  });

  it("responds to /movie/1/credits", function(done) {
    request(server)
      .get("/movie/1/credits")
      .expect(200, done);
  });

  it("responds to /movie/1/similar", function(done) {
    request(server)
      .get("/movie/1/similar")
      .expect(200, done);
  });

  it("responds to /search_movies/the%20avengers", function(done) {
    request(server)
      .get("/search_movies/the%20avengers")
      .expect(200, done);
  });

  it("responds to /check_in", function(done) {
    request(server)
      .get("/check_in")
      .expect(200)
      .expect('true', done);
  });

  it("responds to /person/1", function(done) {
    request(server)
      .get("/person/1")
      .expect(200, done);
  });

  it("404 everything else", function testPath(done) {
    request(server).get("/foo/bar").expect(404, done);
  });
});
