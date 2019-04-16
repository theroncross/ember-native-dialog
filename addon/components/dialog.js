import Component from '@glimmer/component';
import { action } from '@ember/object';
import dialogPolyfill from 'dialog-polyfill'
import { tracked } from '@glimmer/tracking';

export default class DialogComponent extends Component {
  @tracked
  open;

  @action
  showModal() {
    let dialog = document.getElementsByTagName('dialog')[0];
    dialogPolyfill.registerDialog(dialog);

    dialog.showModal();
  }
}
