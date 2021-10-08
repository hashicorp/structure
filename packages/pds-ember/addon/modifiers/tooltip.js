import Modifier from "ember-modifier";
import tippy, { followCursor } from "tippy.js";

/**
 * Tooltip modifier using Tippy.js
 * https://atomiks.github.io/tippyjs
 *
 * {{tooltip 'Text' options=(hash )}}
 */
export default class Tooltip extends Modifier {
  interval = null;
  needsTabIndex = false;
  tooltip = null;

  constructor(owner) {
    super(...arguments);
  }

  getTooltipProps() {
    let options = this.args.named.options || {};
    let content = this.args.positional[0];
  
    let $anchor = this.element;
  
    // make it easy to specify the modified element as the actual tooltip
    if (typeof options.triggerTarget === "string") {
      let $el = $anchor;
      switch (options.triggerTarget) {
        case "parentNode":
          $anchor = $anchor.parentNode;
          break;
        default:
          $anchor = $anchor.querySelectorAll(options.triggerTarget);
      }
      content = $anchor.cloneNode(true);
      $el.remove();
      this.args.named.options.triggerTarget = undefined;
    }
    // {{tooltip}} will just use the HTML content
    if (typeof content === "undefined") {
      content = $anchor.innerHTML;
      $anchor.innerHTML = "";
    }
    if (options.trigger === "manual") {
      // if we are manually triggering, a out delay means only show for the
      // amount of time specified by the delay
      let delay = options.delay || [];
      if (typeof delay[1] !== "undefined") {
        this.args.named.options.onShown = (tooltip) => {
          clearInterval(this.interval);
          this.interval = setTimeout(() => {
            tooltip.hide();
          }, delay[1]);
        };
      }
    }
    let $trigger = $anchor;
    if (!$trigger.hasAttribute("tabindex")) {
      this.needsTabIndex = true;
      $trigger.setAttribute("tabindex", "0");
    }
    return {
      theme: 'structure',
      triggerTarget: $trigger,
      arrow: true,
      content: () => content,
      plugins: [
        typeof options.followCursor !== "undefined" ? followCursor : undefined,
      ].filter((item) => Boolean(item)),
      ...this.args.named.options,
    };
  }

  createTooltip() {
    let tooltipProps = this.getTooltipProps();
    this.tooltip = tippy(this.element, tooltipProps);
  }

  updateTooltip() {
    let tooltipProps = this.getTooltipProps();
    this.tooltip.setProps(tooltipProps);
  }

  // Lifecycle method on the Modifier class
  didUpdateArguments() {
    this.updateTooltip();
  }

  // Lifecycle method on the Modifier class
  didInstall() {
    this.createTooltip();
  }

  // Lifecycle method on the Modifier class
  willRemove() {
    if (this.needsTabIndex) {
      this.element.removeAttribute("tabindex");
    }
    clearInterval(this.interval);
    this.tooltip.destroy();
  }
} 