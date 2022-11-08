import { OrganisationService } from "../services/organisation.service";

export class OrganisationController {
    private organisationService: OrganisationService;

    constructor(organisationService: OrganisationService) {
        this.organisationService = organisationService;
    }

    handle(req: any, res: any) {
        const data = this.getOrganisationInformation();
        res.send(data);
    }

    private getOrganisationInformation() {
        return this.organisationService.handle();
    }
}