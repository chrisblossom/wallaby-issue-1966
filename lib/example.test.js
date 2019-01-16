'use strict';

const path = require('path');
const fs = require('fs');
const readDirDeep = require('read-dir-deep');

const files = readDirDeep.sync(path.resolve(__dirname, '../'), {
    patterns: ['**/__sandbox__/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
});

test('javascript test file exists', () => {
    expect(files).toEqual([
        'lib/__sandbox__/lib-javascript.js',
        'lib/__sandbox__/lib-javascript.test.js',
        'lib/__sandbox__/lib-typescript.test.ts',
        'lib/__sandbox__/lib-typescript.ts',
        'lib/__sandbox__/nested/lib-nested-javascript.js',
        'lib/__sandbox__/nested/lib-nested-javascript.test.js',
        'lib/__sandbox__/nested/lib-nested-typescript.test.ts',
        'lib/__sandbox__/nested/lib-nested-typescript.ts',
        '__sandbox__/base-javascript.js',
        '__sandbox__/base-javascript.test.js',
        '__sandbox__/base-typescript.test.ts',
        '__sandbox__/base-typescript.ts',
        '__sandbox__/nested/base-nested-javascript.js',
        '__sandbox__/nested/base-nested-javascript.test.js',
        '__sandbox__/nested/base-nested-typescript.test.ts',
        '__sandbox__/nested/base-nested-typescript.ts',
    ]);

    files.forEach(file => {
        const exists = fs.existsSync(file);

        expect(exists).toEqual(true);
    });
});

