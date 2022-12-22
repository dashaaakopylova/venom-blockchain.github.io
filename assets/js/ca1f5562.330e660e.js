"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[5115],{4137:(e,i,n)=>{n.d(i,{Zo:()=>b,kt:()=>s});var t=n(7294);function l(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function I(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?I(Object(n),!0).forEach((function(i){l(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function Z(e,i){if(null==e)return{};var n,t,l=function(e,i){if(null==e)return{};var n,t,l={},I=Object.keys(e);for(t=0;t<I.length;t++)n=I[t],i.indexOf(n)>=0||(l[n]=e[n]);return l}(e,i);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);for(t=0;t<I.length;t++)n=I[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=t.createContext({}),o=function(e){var i=t.useContext(a),n=i;return e&&(n="function"==typeof e?e(i):d(d({},i),e)),n},b=function(e){var i=o(e.components);return t.createElement(a.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},m=t.forwardRef((function(e,i){var n=e.components,l=e.mdxType,I=e.originalType,a=e.parentName,b=Z(e,["components","mdxType","originalType","parentName"]),m=o(n),s=l,g=m["".concat(a,".").concat(s)]||m[s]||c[s]||I;return n?t.createElement(g,d(d({ref:i},b),{},{components:n})):t.createElement(g,d({ref:i},b))}));function s(e,i){var n=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var I=n.length,d=new Array(I);d[0]=m;var Z={};for(var a in i)hasOwnProperty.call(i,a)&&(Z[a]=i[a]);Z.originalType=e,Z.mdxType="string"==typeof e?e:l,d[1]=Z;for(var o=2;o<I;o++)d[o]=n[o];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3658:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>I,metadata:()=>Z,toc:()=>o});var t=n(7462),l=(n(7294),n(4137));const I={sidebar_position:0,sidebar_label:"Non-Fungible tokens in Venom network"},d="Non-Fungible tokens in Venom network",Z={unversionedId:"build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/non-fungible-tokens-in-venom-network",id:"build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/non-fungible-tokens-in-venom-network",title:"Non-Fungible tokens in Venom network",description:"Non-fungible tokens aka NFT are unique cryptographic tokens that exist on a blockchain and cannot be replicated. Non-fungible is an economic term that you could use to describe things like your picture, a song file, or even your furniture. These things are not interchangeable with other items because they have unique properties.",source:"@site/docs/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/non-fungible-tokens-in-venom-network.md",sourceDirName:"build/development-guides/how-to-create-your-own-non-fungible-tip-4-token",slug:"/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/non-fungible-tokens-in-venom-network",permalink:"/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/non-fungible-tokens-in-venom-network",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Non-Fungible tokens in Venom network"},sidebar:"buildSidebar",previous:{title:"Extend our voting system with backend",permalink:"/build/development-guides/developing-of-simple-voting-system/venom-in-action/extend-our-voting-system-with-backend"},next:{title:"Quick start developing with TIP-4",permalink:"/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/quick-start-developing-with-tip-4"}},a={},o=[{value:"What is TIP-4?",id:"what-is-tip-4",level:2},{value:"ERC721 differences",id:"erc721-differences",level:2}],b={toc:o};function c(e){let{components:i,...I}=e;return(0,l.kt)("wrapper",(0,t.Z)({},b,I,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"non-fungible-tokens-in-venom-network"},"Non-Fungible tokens in Venom network"),(0,l.kt)("p",null,"Non-fungible tokens aka NFT are unique cryptographic tokens that exist on a blockchain and cannot be replicated. Non-fungible is an economic term that you could use to describe things like your picture, a song file, or even your furniture. These things are not interchangeable with other items because they have unique properties."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Follow ",(0,l.kt)("a",{parentName:"p",href:"../how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network"},"this")," guide to explore another type of blockchain tokens - fungible tokens")),(0,l.kt)("p",null,"Venom network uses the standard of fungible tokens ",(0,l.kt)("a",{parentName:"p",href:"/standards/TIP-4/core-description"},"TIP-4")),(0,l.kt)("h2",{id:"what-is-tip-4"},"What is TIP-4?"),(0,l.kt)("p",null,"Same to Ethereum ERC-721 standard, TIP-4 provides similar functionality for Venom Blockchain. As well as TIP-3, TIP-4 was designed to match the distributed system design of the Venom network. It is cost-effective for its fee-paying model."),(0,l.kt)("p",null,"TIP-4 provides the following functionality:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"minting and burning NFTs"),(0,l.kt)("li",{parentName:"ul"},"transferring NFTs from one account to another"),(0,l.kt)("li",{parentName:"ul"},"selling your NFTs")),(0,l.kt)("h2",{id:"erc721-differences"},"ERC721 differences"),(0,l.kt)("p",null,"ERC721 generally is a monolith smart contract, which stores mapping, that shows token owners by token ids. Tokens metadata can be stored here too in another mapping or you can store only ",(0,l.kt)("inlineCode",{parentName:"p"},"tokenUri")," (mapped the same way - by token ids), which can help you to reach token metadata."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ERC721 concept simple scheme",src:n(3472).Z,width:"495",height:"260"})),(0,l.kt)("p",null,"TIP-4 consists of collection contract and personal contracts for each non-fungible token. As a result, users own the concrete amount of NFT contracts, that stores metadata and operate with them for transfers or other actions."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"TIP-4 concept simple scheme",src:n(5361).Z,width:"542",height:"401"})))}c.isMDXComponent=!0},3472:(e,i,n)=>{n.d(i,{Z:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ5NXB4IiBoZWlnaHQ9IjI2MHB4IiB2aWV3Qm94PSItMC41IC0wLjUgNDk1IDI2MCIgY29udGVudD0iJmx0O214ZmlsZSBob3N0PSZxdW90O2FwcC5kaWFncmFtcy5uZXQmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMi0xMi0yMVQxNDozMTowOS4wMjdaJnF1b3Q7IGFnZW50PSZxdW90OzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA3LjAuMC4wIFNhZmFyaS81MzcuMzYmcXVvdDsgdmVyc2lvbj0mcXVvdDsyMC41LjMmcXVvdDsgZXRhZz0mcXVvdDtqN1dvNzk0TU02Y1pDVk5MLS0tSSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtrZ0NxX3Q3bFdzWDhnZ185ajJINyZxdW90OyZndDs3VmhkczVzMkVQMDFubWxlR0pBRW1NZnJqeVFQelV3bW5rN2JSMTJrQytvVnlDUGsyTzZ2N3dMQ0dJUVRta3VuTDNteHhkbVZoUGFjWFJaV2VGdGNQbWg2ekQ4cHh1VUsrZXl5d3JzVlFvaUU4RnNEMXhZSTQ3Z0ZNaTFZQ3dVOWNCQi9jd3Y2RmowSnhxdUJvMUZLR25FY2dxa3FTNTZhQVVhMVZ1ZWgyNHVTdzEyUE5PTU9jRWlwZE5IZkJUTjVpNjVSM09NZnVjanlidWNnU2xwTFFUdG5lNUlxcDB5ZDd5QzhYK0d0VnNxMG8rS3k1YktPWFJlWGR0NzdCOWJialdsZW1qa1RVRHZoSzVVbmV6WjdYK2JhSFZhclU4bDQ3ZSt2OE9hY0M4TVBSNXJXMWpPd0MxaHVDZ2xYQVF4ZmhKUmJKWlZ1NXVMQUQwaXd0dmpCcmtsUFJnR1VhY29FM09hZE85cmpCTFRSMjNaQ0EzOUNsV0N2MUtrTzNxWXlXcjN5YmxhcFNsaHpZNC9CdGVHWGg2RUliZ0VHWVhKVmNLT3Y0TkpOQUpxODJDclRDak9JWWt2VXVlZVpKTmhEMWkrL294bUZsbVZxNVpYZDl1Z1pnSUVsWVpvUTdNU2ZNOUNldlZUYTVDcFRKWlg3SHQzMEROVVU5RDYvS25XMDRGL2NtS3ROSkJ0L3kxcE5LcjhJODhmZCtNOTY3SVgyYW5lNU0rMnU5a0xTWnk0M05IM05tdTFIZkxSV3BSblhJOHVRUGlEZDMrOTJUOUhOMGlWVW95WTFrTWN1ZnZMUnZ2R2syanpWaVF5R1ZOS3FFbWtIdnhleUV5TXZXZWRrTndmRTJ2MmJhT3I0RGlRRFF0T3BoY2hzRldrdXFSRmZoMHROS2NGTy9hd0VyTmlyRHhGL0tMMDRTVHhNb09hRktNSkJ1QjZ1Q0VmTnVMR0xqT1IxdTZ0WmlpTk9DZGgvMmNiMUNmeERBUUdGL3kzd29HbHFIRzFXWjFGSTJvUjJSbUVZRlFCWENad3hHcm04OS9oZGRiR00vbmdWZ2FQWmhDRCtRaFVFNDFINWlFbmloVTRCUWFIdlZvL0E5NytybVM5d0RGcG1FTVIrendnTmRZT3hXN0dDWkdKRFBOcVBTc04xU1EzZjFQbGN2VkZWb2FPcWdoNlBvc3grT1lGa1VSaUJzY0VqV3RSU3lVekRnVThaMDd5cTNzRlFuVXV1NFQ0aVdkdWVOWXdhcjNrTFBWOE5yekI2MS9RR3I3ejhUWXZLMFM5d2JZWTZuWHk2VE9pT1NwSFZla3BCR3h6d1RhMGNBUzNDa3pVVWdqSDVLREdHejlTSHVmR05XbmpMaVZtNkpkL1VMUnFxTm5RRmhJS0o1OTFZUUQveXVJc2NtVUQ4SUZLUG01Qmc2VnF6WEUxNUUwWGZhMDV3NUJFOHFpNTRxcnFzeVZScjhuYXFZb2VxalhyK1NaUkxWT2lObndMcjJHVXA5RHAwYWFMV0RsSGJuR29wZm1iVkhMTFdhREtwL2p1NkVvY3VoeWUza2IzalpVamkvOW1XcjZiNzZSbDgzRVY2cWpmcXNNVjc3TVFuM29qQ3R2dDNHdXNaaTBXSnM5aHlYWHIzNldQUk4vVlJPaS9hWG8va2hBbm01R1dwdElVY1JjNmIrbFRla21nOS9hNU8vbjN6QXBmOWg1bVd3djdyRnQ3L0F3PT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiIGlkPSJteC1ncmFkaWVudC0xMDE0MTgtMS0yZTM5NDUtMS1zLTAiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiByZ2IoMTYsIDIwLCAyNCk7IHN0b3Atb3BhY2l0eTogMTsiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiByZ2IoNDYsIDU3LCA2OSk7IHN0b3Atb3BhY2l0eTogMTsiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Zz48cmVjdCB4PSItMC4yNSIgeT0iMCIgd2lkdGg9IjQ5My4yNSIgaGVpZ2h0PSIyNTkiIGZpbGw9InVybCgjbXgtZ3JhZGllbnQtMTAxNDE4LTEtMmUzOTQ1LTEtcy0wKSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAyMTEuNjMgMTI5LjUgTCAxODAuNTMgMTI5LjUyIFEgMTcwLjUzIDEyOS41MyAxNjAuNTMgMTI5LjQ5IEwgMTIzIDEyOS4zNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVkZGE2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDIxNi44OCAxMjkuNSBMIDIwOS44OCAxMzMgTCAyMTEuNjMgMTI5LjUgTCAyMDkuODggMTI2IFoiIGZpbGw9IiMwZWRkYTYiIHN0cm9rZT0iIzBlZGRhNiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAyMTggMTE5LjUgTCAyMTggNzkuNSBMIDQ2OCA3OS41IEwgNDY4IDExOS41IiBmaWxsPSJub25lIiBzdHJva2U9IiMwZWRkYTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMjE4IDExOS41IEwgMjE4IDE3OS41IEwgNDY4IDE3OS41IEwgNDY4IDExOS41IiBmaWxsPSJub25lIiBzdHJva2U9IiMwZWRkYTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48cGF0aCBkPSJNIDIxOCAxMTkuNSBMIDQ2OCAxMTkuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVkZGE2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KXNjYWxlKDAuOTk5OTk5OTk5OTk5OTk5OSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDElIiBoZWlnaHQ9IjEwMSUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAyNDhweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxMDBweDsgbWFyZ2luLWxlZnQ6IDIxOXB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMGVkZGE2OyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMTQsIDIyMSwgMTY2KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IGZvbnQtd2VpZ2h0OiBib2xkOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5FUkM3MjEgU21hcnQgQ29udHJhY3Q8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMzQzIiB5PSIxMDMiIGZpbGw9IiMwZWRkYTYiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkVSQzcyMSBTbWFydCBDb250cmFjdDwvdGV4dD48L3N3aXRjaD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KXNjYWxlKDAuOTk5OTk5OTk5OTk5OTk5OSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDElIiBoZWlnaHQ9IjEwMSUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAyMTNweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxNDVweDsgbWFyZ2luLWxlZnQ6IDI0NHB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMGVkZGE2OyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMTQsIDIyMSwgMTY2KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPm1hcHBpbmcodWludDI1NiA9Jmd0OyBhZGRyZXNzKSBvd25lcnM8YnIgLz5tYXBwaW5nKHVpbnQyNTYgPSZndDsgYnl0ZXMzMikgdG9rZW5VcmlzPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjM1MSIgeT0iMTQ4IiBmaWxsPSIjMGVkZGE2IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm1hcHBpbmcodWludDI1NiA9Jmd0OyBhZGRyZXNzKSBvd25lcnMuLi48L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjE5LjQzIiB5PSI2OS41IiB3aWR0aD0iODQiIGhlaWdodD0iMjUiIHJ4PSIzLjc1IiByeT0iMy43NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVkZGE2IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSlzY2FsZSgwLjk5OTk5OTk5OTk5OTk5OTkpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAxJSIgaGVpZ2h0PSIxMDElIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogODJweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA4MnB4OyBtYXJnaW4tbGVmdDogMjBweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogIzBlZGRhNjsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDE0LCAyMjEsIDE2Nik7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBub25lOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5BbGljZTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI2MSIgeT0iODYiIGZpbGw9IiMwZWRkYTYiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWxpY2U8L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjE4LjUiIHk9IjExNyIgd2lkdGg9Ijg1Ljg3IiBoZWlnaHQ9IjI1IiByeD0iMy43NSIgcnk9IjMuNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBlZGRhNiIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpc2NhbGUoMC45OTk5OTk5OTk5OTk5OTk5KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMSUiIGhlaWdodD0iMTAxJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDg0cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTMwcHg7IG1hcmdpbi1sZWZ0OiAxOXB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMGVkZGE2OyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMTQsIDIyMSwgMTY2KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkJvYjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI2MSIgeT0iMTMzIiBmaWxsPSIjMGVkZGE2IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJvYjwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMTguNSIgeT0iMTU5LjUiIHdpZHRoPSI4NS44NyIgaGVpZ2h0PSIyNSIgcng9IjMuNzUiIHJ5PSIzLjc1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwZWRkYTYiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KXNjYWxlKDAuOTk5OTk5OTk5OTk5OTk5OSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDElIiBoZWlnaHQ9IjEwMSUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA4NHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDE3MnB4OyBtYXJnaW4tbGVmdDogMTlweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogIzBlZGRhNjsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDE0LCAyMjEsIDE2Nik7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBub25lOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5DaGFybGllPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjYxIiB5PSIxNzYiIGZpbGw9IiMwZWRkYTYiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2hhcmxpZTwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAxMjMgMjM0LjUgTCAxMjMgMjQuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVkZGE2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PHJlY3QgeD0iMTIuMjUiIHk9IjkuNSIgd2lkdGg9IjQ2OC4yNSIgaGVpZ2h0PSIyNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM0M2U0ZiIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48L2c+PHN3aXRjaD48ZyByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiLz48YSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC01KSIgeGxpbms6aHJlZj0iaHR0cHM6Ly93d3cuZGlhZ3JhbXMubmV0L2RvYy9mYXEvc3ZnLWV4cG9ydC10ZXh0LXByb2JsZW1zIiB0YXJnZXQ9Il9ibGFuayI+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPlRleHQgaXMgbm90IFNWRyAtIGNhbm5vdCBkaXNwbGF5PC90ZXh0PjwvYT48L3N3aXRjaD48L3N2Zz4="},5361:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/tip4-07b80242b675c6bd27a1e961c8c24a4f.svg"}}]);