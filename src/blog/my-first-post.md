---
title_jp: ヘルシンキのレストラン
title_fi: Helsingin ravintolat
templateEngineOverride: njk,md
layout: base.njk
date: "2024-02-26"
---

{% extends 'post.njk' %}

{% block content %}
{{   
langBlock(
    " <ruby>明日<rp>(</rp><rt>あした</rt><rp>)</rp></ruby>は<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きたいで", 
    "suomi Halusan emeenää dfsdflölk asdlök", 
    ""
)}}

{{ langBlock(
    " <ruby>明日<rp>(</rp><rt>あした</rt><rp>)</rp></ruby>は<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きたいで"
    )
}}

{{ centerImage(
"<img class=\"thumbnail\" src=\"../img/nikkori.jpeg\" max-height=\"10\">"
)}}


{{ langBlock(
    " <ruby>明日<rp>(</rp><rt>あした</rt><rp>)</rp></ruby>は<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きたいで", 
    "kuva"
    )
}}


{% endblock %}