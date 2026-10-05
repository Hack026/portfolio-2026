import { defineConfig } from 'vite';
import JavaScriptObfuscator from 'javascript-obfuscator';

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    open: false
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    target: 'es2020',
    minify: 'terser',
    cssCodeSplit: true,
    reportCompressedSize: false,
    terserOptions: {
      compress: {
        passes: 2,
        pure_getters: true,
        unsafe: false,
        dead_code: true
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: /You know what you're doing\. Please respect the work\.|Built from original work\. Please don't copy or redistribute the implementation\./i
      }
    },
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  plugins: [
    {
      name: 'production-js-obfuscation',
      apply: 'build',
      generateBundle(_options, bundle) {
        for (const [fileName, asset] of Object.entries(bundle)) {
          if (fileName.endsWith('.js') && asset.type === 'chunk') {
            try {
              const obfuscated = JavaScriptObfuscator.obfuscate(asset.code, {
                compact: true,
                controlFlowFlattening: false,
                deadCodeInjection: false,
                debugProtection: false,
                disableConsoleOutput: false,
                domainLock: [],
                encodeStringArray: true,
                identifierNamesGenerator: 'hexadecimal',
                log: false,
                numbersToExpressions: false,
                renameGlobals: false,
                selfDefending: false,
                simplify: true,
                splitStrings: false,
                stringArray: true,
                stringArrayEncoding: ['base64'],
                stringArrayThreshold: 0.5,
                transformObjectKeys: true,
                unicodeEscapeSequence: false,
                reservedNames: []
              });
              asset.code = obfuscated.getObfuscatedCode();
            } catch (error) {
              console.warn('JavaScript obfuscation skipped for', fileName, error);
            }
          }
        }
      }
    }
  ]
});
