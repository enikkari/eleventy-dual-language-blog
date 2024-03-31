---
title_jp: 初めてページ
title_fi: eka sivuni 
layout: base.njk
templateEngineOverride: njk,md
---

{% include "intro.njk" %}

{% set post = collections.posts | last %}

<meta http-equiv="refresh" content="0; url={{ post.url }}" />

{% include "postlist.njk" %}