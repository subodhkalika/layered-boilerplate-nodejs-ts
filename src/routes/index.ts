import { Router } from 'express';
import organisationRoutes from './organisation.routes';

const routes = Router();

routes.use('/organisation', organisationRoutes);

export default routes;
