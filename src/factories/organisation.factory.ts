import { OrganisationController } from "../controllers/organisation.controller";
import { OrganisationRepository } from "../repositories/organisation.repository";
import { OrganisationService } from "../services/organisation.service";

export class OrganisationFactory {
    getOrganisationController() {
        const organisationRepository = new OrganisationRepository();
        const organisationService = new OrganisationService(organisationRepository);
        return new OrganisationController(organisationService);
    }
}