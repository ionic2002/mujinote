---
layout: post
title: 아이폰 사파리에서 input "Text" 입력 element에서 자동줌 해제
categories: 
- css
- media
tags: [iphone, safari, autozoom, input-element]
updated_at: 2016-01-06
---

# 아이폰 사파리에서 input "Text" 입력 element에서 자동줌 해제

페이지에 적용한 소스코드 : 

~~~
@media screen and (-webkit-min-device-pixel-ratio: 0) {
	textarea, 
	input {
		font-size: 16px;
	}
}
~~~

내용은 stackoverflow 에 등록된 [Disable Auto Zoom in Input “Text” tag - Safari on iPhone](http://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone) 라는 글에서 참고 
