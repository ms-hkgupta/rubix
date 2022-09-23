import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { JsonChildElement, JsonModel } from "../models/json-model";
import { objectPropConverter } from "../directives/object-prop";
import testJson from '../json/test.json';
import { parse,stringify } from "yaml";

export class RubixJsonUiPreview extends LitElement{

    static styles = css`
        .preview{
            display:flex;
            height: 100%;
        }
        .renderer{
            flex: 1;
        }
        .text{
            flex: 1;
            height: 100%;
            width:100%;
        }
        #json-text::part(control){
            height: 90vh;
            width:100%;
        }
    `

    @property({ type: Object})
    public json:JsonModel = testJson;

    connectedCallback(){
        super.connectedCallback();

    }

    onApplyClick(){
        const textArea = this.renderRoot.querySelector<HTMLTextAreaElement>('#json-text')!
        const jsonText = textArea.value;
        this.json = parse(jsonText);
    }

    render() {
        //return html`<span></span>`

        return html`
        <div class="preview">
           <div class="renderer">
                <div>Preview</div>
                <rbx-json-renderer .json=${this.json}></rbx-json-renderer>
           </div>

           <div class="text">
                <div>yaml</div>
                <div>
                <fluent-text-area id="json-text" .value=${stringify(this.json,null,2)} rows=100 cols=100></fluent-text-area>
                </div>
                
                <fluent-button @click=${this.onApplyClick} appearance="accent">Apply</fluent-button>
            </div>
           
        </div>`
        
  
    }

}
