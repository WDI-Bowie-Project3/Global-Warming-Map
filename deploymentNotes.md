# Deployment Notes

heroku.com
  - create new project
  - heroku git toolbelt

create db for heroku same way as last time

go to terminal
  - heroku login
  - add remote
    - heroku git:remote -a namethinghere

    make sure env variables are correct
open package.json
  - "postinstall": "./node_modules/browserify/bin/cmd.js -t [ babelify --presets [ react es2015 ] ] -t uglifyify -d -p [ minifyify --no-map ] ./public/js/app.js -o ./public/bundle.js"

git push heroku master
_____________________________________________________________________________
