import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'backpack/models/test';

F.attach(QUnit);

QUnit.module('backpack functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('backpack main page shows up', function() {
  F('title').text('backpack', 'Title is set');
});
