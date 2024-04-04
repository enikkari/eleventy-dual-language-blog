---
title_jp: "Example post title <japanese title>"
title_fi: Esimerkki postaus otsikko
templateEngineOverride: njk,md
layout: base.njk
date: "2024-04-04"
---
{% extends 'post.njk' %}

{% block content %}

{{
subTitleLangBlock(
"Subtitle 1",
"Alaotsikko 1"
)
}}

{{langBlock(
"This block cn contain html <a target="_blank" href="https://github.com/enikkari/eleventy-dual-language-blog">
github</a>",
"Tämä blocki voi sisältää html:ää "
)}}

{{langBlock(
"asd",
"asd"
)}}


{{
subTitleLangBlock(
"Subtitle 2",
"Alaotsikko 2"
)
}}

{{langBlock(
"Add an instagram post",
"Lisää instagram postaus"
)}}

{{
instagram("")
}}

{% endblock %}