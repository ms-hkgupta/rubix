import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

export class RubixContainer extends LitElement{
    static styles = css`
        .container{
            display: flex;
            align-items: center;
        }
    `
    
    @property({type:String})
    public layout: 'vertical'|'horizontal';



    connectedCallback(){
        super.connectedCallback();
        if(this.layout != 'horizontal'){
            this.layout = 'vertical'
        }
    }

    render() {
        const styles = {
            'flex-direction': this.layout === 'vertical' ? 'column': 'row'
        }

        return html`<div class="container" style=${styleMap(styles)}>
                        <slot></slot>
                    </div>`
    }
}