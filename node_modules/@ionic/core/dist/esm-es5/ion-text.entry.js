import { r as registerInstance, h, H as Host } from './index-92848855.js';
import { b as getIonMode } from './ionic-global-23e7365a.js';
import { c as createColorClasses } from './theme-5641d27f.js';
var textCss = ":host(.ion-color){color:var(--ion-color-base)}";
var Text = /** @class */ (function () {
    function Text(hostRef) {
        registerInstance(this, hostRef);
    }
    Text.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        return (h(Host, { class: createColorClasses(this.color, (_a = {},
                _a[mode] = true,
                _a)) }, h("slot", null)));
    };
    return Text;
}());
Text.style = textCss;
export { Text as ion_text };
