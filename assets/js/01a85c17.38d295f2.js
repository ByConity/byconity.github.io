"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4013],{1492:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(9496),n=a(5924),r=a(6187),s=a(9361),i=a(3048),c=a(5455);const m={sidebar:"sidebar_J5VD",sidebarItemTitle:"sidebarItemTitle_ZkTY",sidebarItemList:"sidebarItemList_Jaez",sidebarItem:"sidebarItem_mMbS",sidebarItemLink:"sidebarItemLink_LJmi",sidebarItemLinkActive:"sidebarItemLinkActive_nl4s"};function o(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var b=a(4166);function u(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(b.Zo,{component:u,props:e})}function d(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(o,{sidebar:t}):null}function E(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(d,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},5094:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(9496),n=a(5924),r=a(823),s=a(7724),i=a(7685),c=a(1492),m=a(7972),o=a(284);function b(e){let{tags:t,sidebar:a}=e;const b=(0,r.M)();return l.createElement(s.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogTagsListPage)},l.createElement(s.d,{title:b}),l.createElement(o.Z,{tag:"blog_tags_list"}),l.createElement(c.Z,{sidebar:a},l.createElement("h1",null,b),l.createElement(m.Z,{tags:t})))}},1113:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9496),n=a(5924),r=a(3048);const s={tag:"tag_sQub",tagRegular:"tagRegular_dfhI",tagWithCount:"tagWithCount_LeOP"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}},7972:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(9496),n=a(823),r=a(1113);const s={tag:"tag_AjlK"};function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s.tag},l.createElement(r.Z,e))))),l.createElement("hr",null))}function c(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))}},823:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(5455);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);