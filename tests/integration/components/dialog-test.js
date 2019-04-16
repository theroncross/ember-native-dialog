import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | dialog', function(hooks) {
  setupRenderingTest(hooks);

  test('it opens and closes', async function(assert) {
    this.set('open', false);
    await render(hbs`
      <Dialog id="dialog" @open={{this.open}}>
        template block text
      </Dialog>
    `);

    assert.equal(this.element.textContent.trim(), '');

    this.set('open', true);
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
