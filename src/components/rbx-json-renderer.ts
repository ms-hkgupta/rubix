import { css, LitElement } from "lit";
import {html, literal , unsafeStatic} from "lit/static-html.js";
import { property } from "lit/decorators.js";
import { styleMap } from 'lit/directives/style-map.js';
import { JsonChildElement, JsonModel } from "../models/json-model.js";
import { objectPropConverter } from "../directives/object-prop.js";
import { getTypeMap } from "../utils/mapper.js";


export class RubixJsonWebRenderer extends LitElement{
    static styles = css`
        :host{
            --card-height: auto;
            --card-width: auto;
            font-family: 'Segoe UI'
        }
        
    `

    @property({ type: Object})
    public json!:JsonModel;

    connectedCallback(){
        super.connectedCallback();

    }

    renderChild(child: JsonChildElement){
        let childrenHtml = [html``];
        const tag = literal`${unsafeStatic(getTypeMap(child.type))}`;
        const styles = {
            margin: '5px'
        }

        if(child.children?.length > 0){
            childrenHtml = child.children.map(c => this.renderChild(c));
            return html`<${tag} .properties=${objectPropConverter(child.props)} style=${styleMap(styles)}>
            ${childrenHtml}
            </${tag}>`;   
        }
   
        return html`<${tag} .properties=${objectPropConverter(child.props)}
            style=${styleMap(styles)}></${tag}>`
        
       
    }


    render() {
        return html`<div>
           ${this.json?.body?.map(c => this.renderChild(c))}
        </div>`
        
  
    }

}
