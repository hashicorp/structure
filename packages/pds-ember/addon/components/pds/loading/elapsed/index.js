import Component from '@glimmer/component';
import { run } from '@ember/runloop';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

/**
 * Calculate the time difference between now and given argument.
 *
 * @function
 * @param {number} startTime - Unix Epoch in milliseconds
 * @return {string} elapsed time in `[HH:]MM:SS` format
 */
// TODO: unit test or convert to date-fns (or Temporal)
//       to handle calculation and formatting
function timeSince(startTime) {
  let now = new Date().getTime();
  let diff = now - startTime;
  // TODO: consider using date-fns (or JS:Temporal) to calculate this
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  // TODO: consider using date-fns (or JS:Temporal) to format the duration
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  if (hours == 0) {
    return `${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}

/**
 * @class PdsLoadingElapsed
 */

/**
 * An optional timestamp (in milliseconds since the Unix Epoch) that will be used
 * to calculate elapsed time since.
 *
 * If not provided, defaults to the time when the component renders on screen.
 *
 * @argument startTime
 * @type {number}
 */
export default class PdsLoadingElapsed extends Component {
  timeout = null;
  renderTime = new Date().getTime();

  @tracked elapsed = '--:--';

  @action
  startTimer() {
    this.timeout = this.poll();
  }

  @action
  destroyTimer() {
    clearTimeout(this.timeout);
  }

  poll() {
    return setTimeout(() => {
      run(() => {
        this.elapsed = this.getElapsed();
        this.timeout = this.poll();
      });
    }, 1000);
  }

  get startTime() {
    return this.args.startTime || this.renderTime;
  }

  getElapsed() {
    return timeSince(this.startTime);
  }
}
