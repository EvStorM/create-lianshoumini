/*
 * @Date: 2021-06-23 15:05:26
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-08 11:28:23
 * @Description:
 * @FilePath: /gulpfile.js
 */
/* eslint-disable no-undef */
const gulp = require('gulp');
const px2rpx = require('gulp-px2rpx');
const ts = require('gulp-typescript');
const sass = require('gulp-sass')(require('node-sass'));
const cached = require('gulp-cached');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const replace = require('gulp-replace');
const changed = require('gulp-changed');
const del = require('del');

const copySrc = ['./src/**/*.{js,json,wxss,wxml,wxs}', './src/images/**'];
const tsProject = ts.createProject('./tsconfig.json');
gulp.task('clean', () => del('./dist'));
// 编译 SCSS
gulp.task('wxss', () =>
  gulp
    .src('./src/**/[^_]*.scss')
    .pipe(changed('dist', { extension: '.wxss' }))
    .pipe(cached('wxss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(px2rpx())
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest('./dist'))
);

gulp.task('wxss:watch', () => gulp.watch('./src/**/*.scss', gulp.series('wxss')));

gulp.task('scripts', () =>
  tsProject
    .src()
    .pipe(tsProject())
    .on('error', () => {
      /* Ignore compiler errors */
    })
    .js.pipe(gulp.dest('./dist'))
);

gulp.task('scripts:watch', () => {
  gulp.watch('./src/**/*.ts', gulp.series('scripts'));
});
// 复制 WXML
gulp.task('wxml', () =>
  gulp
    .src('./src/**/*.html')
    .pipe(changed('dist', { extension: '.wxml' }))
    .pipe(cached('wxml'))
    .pipe(rename({ extname: '.wxml' }))
    .pipe(
      replace(/<(\/?)(div|span|img)\b((?:[^>"']|"[^"]*"|'[^']*')*)>/g, (...args) =>
        [
          '<',
          args[1],
          {
            div: 'view',
            span: 'text',
            img: 'image'
          }[args[2]],
          args[3],
          '>'
        ].join('')
      )
    )
    .pipe(gulp.dest('./dist'))
);

gulp.task('wxml:watch', () => gulp.watch('./src/**/*.html', gulp.series('wxml')));

// 复制其它文件
gulp.task('copy', () => gulp.src(copySrc, { base: './src' }).pipe(changed('dist')).pipe(cached('copy')).pipe(gulp.dest('./dist')));

gulp.task('copy:watch', () => gulp.watch(copySrc, gulp.series('copy')));

gulp.task('img', () => {
  connect.server({
    root: './assets',
    host: '0.0.0.0',
    port: 2088
  });
});
gulp.task('build', gulp.parallel('wxss', 'copy', 'wxml', 'scripts'));
gulp.task('watch', gulp.parallel('wxss:watch', 'scripts:watch', 'wxml:watch', 'copy:watch'));
gulp.task('default', gulp.parallel('build', 'watch', 'img'));
gulp.task('rebuild', gulp.series('clean', 'default'));

