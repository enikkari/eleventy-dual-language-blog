# Japanese-Finnish dual-language blog template

This project contains a template to create a dual languge 11ty static site generator based web page.
Each chapter is divided into blocks, so that the two corresponding languages will stack together on smaller screens, and next to each other on bigger screen.
You can also add images or social media posts in between the blocks without disturbing the order.

See an example here:
[nikkori.fi/](https://nikkori.fi/noru-matkustaminen/)

Some features of this template:
- Two different languages in blocks that stack on smaller screens and can have images/instagram posts between blocks
- index.html redirects to the latest blog post
- Toggle off languages
- introduction block on top of all pages
- Add instagram posts with just their id
- Listing of all previous blogs at the end of the page


```
npm init -y
npm install @11ty/eleventy
# start
npm start 
```

## Dependencies

This project was using the eleventy static site generator
https://www.11ty.dev/

This project uses the Foundation css library
https://foundation.app/

You can add umami site tracking by adding your own umami cloud id in src/_includes/base.njk and uncommenting the code

## Extending to other languages

Currently you can easily extend this template to any languages by searching and replacing all occurences of 
>lang="fi"
>lang="jp"

with your preferred languages

## Furigana

This project was used to help genetate the ryby blocks of furigana text. Future development considerations would be to automate this process.

https://github.com/mornir/get-furigana