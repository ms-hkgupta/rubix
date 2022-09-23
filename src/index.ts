import {RubixJsonWebRenderer } from "./components/rbx-json-renderer.js";
import { allComponents,provideFluentDesignSystem } from "@fluentui/web-components";
import { RubixJsonUiPreview } from "./components/rbx-json-ui-preview.js";
import { RubixContainer } from "./controls/rbx-container.js";

provideFluentDesignSystem().register(allComponents);

customElements.define('rbx-container',RubixContainer);
customElements.define('rbx-json-ui-preview',RubixJsonUiPreview);
customElements.define('rbx-json-renderer',RubixJsonWebRenderer);