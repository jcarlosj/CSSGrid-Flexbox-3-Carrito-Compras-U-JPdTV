const gulp = require( 'gulp' ),
      sass = require( 'gulp-sass' ),
      autoprefixer = require( 'gulp-autoprefixer' );

/* Task: sass */
gulp .task( 'sass', () => {
   gulp .src( './scss/app.scss' )
      .pipe(
         autoprefixer({

         })
      )
      .pipe(
         sass({
            includePaths: [ 'scss' ]
         })
      )
      .pipe(
         gulp .dest( 'css' )
      );
});
