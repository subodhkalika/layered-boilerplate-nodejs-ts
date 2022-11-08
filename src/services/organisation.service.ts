import { OrganisationRepository } from "../repositories/organisation.repository";

export class OrganisationService {
    private organisationRepository: OrganisationRepository;

    constructor(organisationRepository: OrganisationRepository) {
        this.organisationRepository = organisationRepository;
    }

    handle() {
        const organisationInformation = this.organisationRepository.get();
        return `${organisationInformation.id} - ${organisationInformation.name}`;
    }
}
