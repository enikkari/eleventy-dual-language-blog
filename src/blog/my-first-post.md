---
title_jp: ヘルシンキのレストラン asd
title_fi: Helsingin ravintolat as asdwww
templateEngineOverride: njk,md
layout: base.njk
---

{% extends 'post.njk' %}

{% block content1 %}
   <ruby>明日<rp>(</rp><rt>あした</rt><rp>)</rp></ruby>は<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きたいで
{% endblock %}

{% block content2 %}
    <p>Haluan mennä töihin</p>
{% endblock %}

outside of block

{% block left %}
This is the left side!
{% endblock %}

{% block right %}
This is the right side!
{% endblock %}