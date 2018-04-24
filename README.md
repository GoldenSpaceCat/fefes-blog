# [Fefes Blog](https://blog.fefe.de) userscript
custom css for https://blog.fefe.de/

to install the dark theme just click [here](https://github.com/GoldenSpaceCat/fefes-blog/raw/master/dark/style.user.js) after installing [tampermonkey](https://tampermonkey.net) in the browser of your preference.

## todo for releases

1. test css in your browser before pushing. then push.
2. update rawgit url within the userscript  
   *(just change the commit id and DON'T use master except for testing purposes [read here why](https://rawgit.com))*
3. increase version number within the userscript  
   *(else it will not update in peoples browsers)*
4. push to git.
5. profit

## todo in general

- create a travis config or similar to deploy css somewhere outside rawgit so we don't have to constantly do two commits for going live.  
  (also implies that we could just ignore the userscript all together in the process)
- create a theme switcher and more themes.  
  *(the dark theme is too dark if you are in a bright environment like the outside. never go there anyways. it's dangerous)*