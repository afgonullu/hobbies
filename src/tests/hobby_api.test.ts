import supertest from 'supertest';

import app from '../app';
import { initialHobbies } from './test_helpers';
import Hobby from '../models/Hobby';
import { IHobby } from '../interfaces/IHobby';

const api = supertest(app);

beforeEach(async () => {
  await Hobby.deleteMany({});

  const hobbiesObjects = initialHobbies.map((hobby) => new Hobby(hobby));
  const promiseArray = hobbiesObjects.map((hobby) => hobby.save());
  await Promise.all(promiseArray);
});

describe('when there is initially some hobbies', () => {
  test('hobbies are returned as json', async () => {
    await api
      .get('/hobbies')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all notes are returned', async () => {
    const response = await api.get('/hobbies');

    expect(response.body).toHaveLength(initialHobbies.length);
  });

  test('a specific hobby is within the returned hobbies', async () => {
    const response = await api.get('/hobbies');

    const contents = response.body.map((h: IHobby) => h.name);

    expect(contents).toContain('Jogging');
  });
});
