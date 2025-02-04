import gulp from "gulp";
import browserSyncPkg from "browser-sync";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import { deleteAsync } from "del";
import { spawn } from "child_process";
import path from "path";

const browserSync = browserSyncPkg.create();
const sassCompiler = gulpSass(dartSass);

// Paths
const paths = {
    styles: "./src/styles/**/*.scss",
    html: "./public/index.html",
    dist: "./dist",
};

// Clean Task
gulp.task("clean", async () => {
    await deleteAsync(["dist/**/*"]);
});

gulp.task("scripts", (done) => {
    const webpackCliPath = path.resolve("node_modules/webpack-cli/bin/cli.js"); // Use webpack-cli

    const webpackProcess = spawn(process.execPath, [webpackCliPath, "--config", "webpack.config.js"], { stdio: "inherit" });

    webpackProcess.on("close", (code) => {
        if (code !== 0) {
            console.error("❌ Webpack build failed!");
            done(new Error("Webpack process failed"));
        } else {
            console.log("✅ Webpack build completed!");
            done();
        }
    });
});

// SCSS Compilation Task
gulp.task("styles", () => {
    return gulp
        .src(paths.styles)
        .pipe(sassCompiler().on("error", sassCompiler.logError))
        .pipe(gulp.dest(paths.dist + "/styles"))
        .pipe(browserSync.stream());
});

// Copy HTML to dist
gulp.task("html", () => {
    return gulp.src(paths.html).pipe(gulp.dest(paths.dist)).pipe(browserSync.stream());
});

// Watch Files
gulp.task("watch", () => {
    browserSync.init({
        server: { baseDir: paths.dist },
        port: 3000,
    });

    gulp.watch("./src/**/*.js", gulp.series("scripts"));
    gulp.watch(paths.styles, gulp.series("styles"));
    gulp.watch(paths.html, gulp.series("html"));
});

// Default Task
gulp.task("default", gulp.series("clean", gulp.parallel("scripts", "styles", "html"), "watch"));
