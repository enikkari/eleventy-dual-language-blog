---
title_jp: "Example post title <japanese title>"
title_fi: Esimerkki postaus otsikko
templateEngineOverride: njk,md
layout: base.njk
date: "2024-04-04"
---
{% extends 'post.njk' %}

{% block content %}

{{langBlock(
"Welcome to the example document",
"Tervetuloa esimerkkidokumenttiin"
)}}

{{
subTitleLangBlock(
"Subtitle 1",
"Alaotsikko 1"
)
}}

{{langBlock(
"This block can contain html <a target='_blank' href='https://github.com/enikkari/eleventy-dual-language-blog'>
https://github.com/enikkari/eleventy-dual-language-blog</a>. Just make sure the quotation marks don't clash",
"Tämä blokki voi sisältää html:ää <a target='_blank' href='https://github.com/enikkari/eleventy-dual-language-blog'>
https://github.com/enikkari/eleventy-dual-language-blog</a>. Varmista etteivät lainausmerkit vaikuta blokkiin"
)}}


{{
subTitleLangBlock(
"Adding instgram embeds and images",
"Lisää instagram postauksia ja kuvia"
)
}}

{{langBlock(
"Add an instagram post with only the id. The post and images are centered in between the columns.",
"Lisää instagram postaus pelkällä id:llä. Postaus ja kuvat ovat keskitetty columnien keskelle"
)}}

{{
instagram("C5TdRfEt25u")
}}

{{langBlock(
"Add an instagram post with only the id. The post and images are centered in between the columns.",
"Lisää instagram postaus pelkällä id:llä. Postaus ja kuvat ovat keskitetty columnien keskelle"
)}}

{{
centerImage("/img/profile_image.jpg")
}}

{{langBlock(
"Add an instagram post with only the id. The post and images are centered in between the columns.",
"Lisää instagram postaus pelkällä id:llä. Postaus ja kuvat ovat keskitetty columnien keskelle"
)}}

{% endblock %}
