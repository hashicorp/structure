import { modifier } from "ember-modifier";
import tippy, { followCursor } from "tippy.js";

/**
 * Tooltip modifier using Tippy.js
 * https://atomiks.github.io/tippyjs
 *
 * {{tooltip 'Text' options=(hash )}}
 */
export default modifier(($element, [content], hash = {}) => {
  let options = hash.options || {};

  let $anchor = $element;

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
    hash.options.triggerTarget = undefined;
  }
  // {{tooltip}} will just use the HTML content
  if (typeof content === "undefined") {
    content = $anchor.innerHTML;
    $anchor.innerHTML = "";
  }
  let interval;
  if (options.trigger === "manual") {
    // if we are manually triggering, a out delay means only show for the
    // amount of time specified by the delay
    let delay = options.delay || [];
    if (typeof delay[1] !== "undefined") {
      hash.options.onShown = (tooltip) => {
        clearInterval(interval);
        interval = setTimeout(() => {
          tooltip.hide();
        }, delay[1]);
      };
    }
  }
  let $trigger = $anchor;
  let needsTabIndex = false;
  if (!$trigger.hasAttribute("tabindex")) {
    needsTabIndex = true;
    $trigger.setAttribute("tabindex", "0");
  }
  let tooltip = tippy($anchor, {
    theme: 'structure',
    triggerTarget: $trigger,
    arrow: true,
    content: () => content,
    plugins: [
      typeof options.followCursor !== "undefined" ? followCursor : undefined,
    ].filter((item) => Boolean(item)),
    ...hash.options,
  });
  return () => {
    if (needsTabIndex) {
      $trigger.removeAttribute("tabindex");
    }
    clearInterval(interval);
    tooltip.destroy();
  };
});