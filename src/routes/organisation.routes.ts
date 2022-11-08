import { Router } from 'express';
import { OrganisationFactory } from '../factories/organisation.factory';

const organisationRoutes = Router();
const organisationFactory = new OrganisationFactory();

organisationRoutes.get('/', (req, res) => {
    return organisationFactory.getOrganisationController().handle(req, res);
});

export default organisationRoutes;
