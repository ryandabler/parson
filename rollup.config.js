import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

export default [
    {
        input: 'src/main.ts',
        output: {
            dir: 'lib',
            format: 'esm',
        },
        plugins: [typescript()],
    },
    {
        input: './lib/main.d.ts',
        output: [{ file: 'lib/main.d.ts', format: 'es' }],
        plugins: [
            dts(),
            del({ targets: ['lib/*.d.ts'], ignore: ['lib/main.d.ts'] }),
        ],
    },
];
