'use strict';

const path = require('path');
const fs = require('fs');

test('sandbox test file exists', () => {
    const file = path.resolve(__dirname, '__sandbox__/sandbox.test.js');

    const exists = fs.existsSync(file);

    expect(exists).toEqual(true);
});
