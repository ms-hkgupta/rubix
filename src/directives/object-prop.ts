import { html, noChange, nothing } from 'lit';
import { AttributePart, Directive, directive, Part, PartType, PropertyPart } from 'lit/directive.js';
export class ObjectPropConverter extends Directive{

    private firstUpdate = true;
    
    render(...props: unknown[]): unknown {
        return noChange;
    }

    update(_part: Part, props:Record<string,string>[]) {
        if(_part.type == PartType.PROPERTY && this._$isConnected && this.firstUpdate){
            const propObj = props[0];
            for(let key of Object.keys(propObj ?? {})){
                _part.element[key] = propObj[key];
            }
            return noChange;
        }
        this.firstUpdate = false;
        return noChange;
    }



}

export const objectPropConverter = directive(ObjectPropConverter);