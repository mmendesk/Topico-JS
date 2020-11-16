
import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Class from '../models/Movie';
import MovieRepository from '../repositories/MovieRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
    try {
        const repo = getRepository(Class);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
    } catch (err) {
        console.log('err.message :>> ', err.message);
    }
});

classRouter.get('/', async (request, response) => {
    response.json(await getRepository(Class).find());
});

classRouter.get('/:name', async (request, response) => {
    const repository = getCustomRepository(MovieRepository);
    const res = await repository.findByName(request.params.name);
    response.json(res);
});

export default classRouter;