import * as express from 'express';
import * as controller from './testing.controller';

const router = express.Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getOne);

router.post('/', controller.create);


router.delete('/:id', controller.remove);

export = router;
