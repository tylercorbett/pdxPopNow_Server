require('dotenv').config();
require('../../lib/utils/connect')();
const mongoose = require('mongoose');
const Artist = require('../../lib/models/Artist');
const { Types, connection } = require('mongoose');

describe('validates good artist model', () => {
  
  beforeEach(done => {
    return connection.dropDatabase(() => {
      done();
    });
  });

  afterAll ((done) => {
    connection.close(done);
  });

  it('can validate artist model', () => {
    const artist = new Artist({
      artistName: 'Taylor Swift',
      facebook: 'www.facebook.com/taylor_swift',
      bandcamp: 'www.bandcamp.com/taylor_swift',
      twitter: 'www.twitter.com/taylor_swift',
      email: 'taylor@tswift.com',
      genre: []
    });

    expect(artist.toJSON())
      .toEqual({
        artistName: 'Taylor Swift',
        facebook: 'www.facebook.com/taylor_swift',
        bandcamp: 'www.bandcamp.com/taylor_swift',
        twitter: 'www.twitter.com/taylor_swift',
        email: 'taylor@tswift.com',
        genre: [],
        _id: expect.any(Types.ObjectId)
      });
  });
});
