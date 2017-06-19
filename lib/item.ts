import {ItemJSON, LinkJSON} from 'collection-json.ts/dist/interfaces';
import {ItemBase, LinkStore} from 'collection-json.ts/dist/models';
import {AngularLink} from './link';

export class AngularItem extends ItemBase {

    constructor(item: ItemJSON) {
        super(item);
    }

    protected parseLinks(links: LinkJSON[]): void {

        this.links = new LinkStore();

        for (const link of links)
            this.links.add(new AngularLink(link));
    }

}
