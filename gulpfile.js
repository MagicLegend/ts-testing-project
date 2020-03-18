const gulp = require('gulp');
const tsc = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const eslint = require('gulp-eslint');
const logger = require('gulplog');
const notify = require('gulp-notify');
const nodemon = require('gulp-nodemon');
const changedInPlace = require('gulp-changed-in-place');
const mocha = require('gulp-mocha');

const tsProject = tsc.createProject('tsconfig.dev.json');
const tsTestProject = tsc.createProject('tsconfig.json');

const config = {
    source: './',
    sourceMapToSource: '../src',
    sourceMapToTest: '../test',
    get sourceApp() { return `${this.source}src/`; },
    get tsOutputPath() { return `${this.source}bin/`; },
    get tsTestOutputPath() { return `${this.source}bin/`; },
    get allJavaScript() { return `${this.source}bin/**/*.js`; },
    get allTypeScript() { return `${this.sourceApp}**/*.ts`; },
    get serverTests() { return `${this.tsTestOutputPath}**/*.test.js`; },
    MAX_WARNINGS: 1,
    DEBUG: false,
};

// Stolen from https://weblogs.asp.net/dwahlin/creating-a-typescript-workflow-with-gulp
// Gulp notify not working? Try https://stackoverflow.com/a/31431504/7193940

/**
 * Lint all TypeScript files.
 */
gulp.task('eslint', () => gulp.src(config.allTypeScript)
    .pipe(changedInPlace())
    .pipe(eslint())
    // Outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError({ message: 'There is a JS error, please look the console for details.' })));

/**
 * Transpile all TypeScript in the project and store the output + sourcemaps in the config.tsOutputPath folder.
 */
gulp.task('transpile-ts', () => tsProject.src()
    // .pipe(changedInPlace({ firstPass: true }))
    .on('finish', () => logger.info('Starting compilation...'))
    .pipe(sourcemaps.init())
    .on('finish', () => logger.info('Sourcemap init complete'))
    .pipe(tsProject())
    .on('finish', () => logger.info('tsProject complete'))
    .pipe(sourcemaps.write('.', { sourceRoot: '.', includeContent: false }))
    // .pipe(sourcemaps.write())
    .on('finish', () => logger.info('Sourcemap write complete'))
    .pipe(gulp.dest(config.tsOutputPath))
    .on('finish', () => logger.info('Ts write complete')));

/**
 * Transpile all TypeScript in the project, including the tests.
 * Note that the mocha task does not require transpiled TS.
 */
gulp.task('transpile-test-ts', () => tsTestProject.src()
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(sourcemaps.init())
    .pipe(tsTestProject())
    .on('finish', () => logger.info('tsTestProject complete'))
    .pipe(sourcemaps.write('.', { sourceRoot: config.sourceMapToTest, includeContent: false }))
    .pipe(gulp.dest(config.tsTestOutputPath))
    .on('finish', () => logger.info('Ts test write complete')));

/**
 * Remove all generated JavaScript files and sourcemaps from TypeScript compilation.
 */
gulp.task('clean-ts', (cb) => {
    const typeScriptGenFiles = [
        `${config.tsOutputPath}/**/*.js`, // path to all JS files auto gen'd by editor
        `${config.tsOutputPath}/**/*.js.map`, // path to all sourcemap files auto gen'd by editor
        // `!${config.tsOutputPath}/lib`,
    ];

    // delete the files
    return del(typeScriptGenFiles, cb);
});

gulp.task('mocha', () => {
    return gulp.src(['test/**/*.test.ts']).pipe(mocha({ require: 'ts-node/register', reporter: 'nyan' }));
});

gulp.task('mocha-js', () => {
    return gulp.src(['test/**/*.test.js']).pipe(mocha({ reporter: 'nyan' }));
});

/**
 * Utilize nodemon to run the node server.
 */
gulp.task('start-node', () => nodemon({
    // the script to run the app
    script: `${config.tsOutputPath}index.js`,
    // this listens to changes in any of these files/routes and restarts the application
    watch: [config.sourceApp],
    tasks: ['transpile'],
    ext: 'ts,js',
    env: {
        NODE_ENV: 'development',
    },
})
    // .on('start', ['transpile'])
    // .on('change', ['watch-no-lint'])
    .on('restart', () => {
        if (config.DEBUG) {
            gulp.src()
                .pipe(notify('Restarting node server...'));
        }
    }).on('crash', () => {
        gulp.src()
            .pipe(notify('Nodemon has crashed!'));
    }));

gulp.task('transpile', gulp.series('clean-ts', 'transpile-ts'));

gulp.task('watch', () => {
    gulp.watch([config.allTypeScript], gulp.series('eslint', 'clean-ts', 'transpile-ts'));
});

gulp.task('watch-no-lint', () => {
    gulp.watch([config.allTypeScript], gulp.series('clean-ts', 'transpile-ts'));
});

gulp.task('default', gulp.series('transpile', 'start-node'));
