"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[3635],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?o.createElement(f,s(s({ref:n},d),{},{components:t})):o.createElement(f,s({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(4137));const r={sidebar_position:1,sidebar_label:"Ways of code enhancing"},s="Venom In Action. Ways of code enhancing",i={unversionedId:"build/development-guides/developing-of-simple-voting-system/venom-in-action/ways-of-code-enhancing",id:"build/development-guides/developing-of-simple-voting-system/venom-in-action/ways-of-code-enhancing",title:"Venom In Action. Ways of code enhancing",description:"Let's dive into some best practices and good tone coding.&#x20;",source:"@site/docs/build/development-guides/developing-of-simple-voting-system/venom-in-action/ways-of-code-enhancing.md",sourceDirName:"build/development-guides/developing-of-simple-voting-system/venom-in-action",slug:"/build/development-guides/developing-of-simple-voting-system/venom-in-action/ways-of-code-enhancing",permalink:"/build/development-guides/developing-of-simple-voting-system/venom-in-action/ways-of-code-enhancing",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Ways of code enhancing"},sidebar:"buildSidebar",previous:{title:"Voting system contracts",permalink:"/build/development-guides/developing-of-simple-voting-system/venom-in-action/voting-system-contracts"},next:{title:"Extend our voting system with backend",permalink:"/build/development-guides/developing-of-simple-voting-system/venom-in-action/extend-our-voting-system-with-backend"}},l={},c=[],d={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"venom-in-action-ways-of-code-enhancing"},"Venom In Action. Ways of code enhancing"),(0,a.kt)("p",null,"Let's dive into some best practices and good tone coding."," "),(0,a.kt)("p",null,"First of all, if your contract deploys some other contracts, it's advisable to have a view method for returning the new contract address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'lineNumbers="true"',lineNumbers:'"true"'},"function getBallotAddress(address owner) \n    external\n    view\n    responsible\n    returns (address)\n{\n    TvmCell ballotStateInit = tvm.buildStateInit({\n        contr: Ballot,\n        varInit: {\n            _vote: address(this),\n            _managerPublicKey: _managerPublicKey,\n            _owner: owner\n        },\n        code: _ballotCode\n    });\n    return{value: 0, bounce: false, flag: 64} address(tvm.hash(ballotStateInit));\n}\n")),(0,a.kt)("p",null,"As you can see we used some keywords and syntax, that hasn't been discussed before. If the function is marked with ",(0,a.kt)("inlineCode",{parentName:"p"},"responsible")," keyword, this function will generate an outbound message for the caller with the value, bounce and flag you set. It's preferable to use exactly ",(0,a.kt)("inlineCode",{parentName:"p"},"{value: 0, bounce: false, flag: 64}")," for this function. Do you remember TIP-3 wallet deploying from our TIP-3 ",(0,a.kt)("a",{parentName:"p",href:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/simple-tokensale"},"guide"),"? Function deployEmptyWallet is responsible too. That's why we can set a callback parameter there."),(0,a.kt)("p",null,"The next important point is success/unsuccess callbacks or events. Enhancing your contract with event emitting wouldn't be amiss. Especially when you deploy something or end some case. For example, we can add ",(0,a.kt)("inlineCode",{parentName:"p"},"NewBallot")," event (when the new ballot is deployed) and ",(0,a.kt)("inlineCode",{parentName:"p"},"VoteAccepted")," event (after ",(0,a.kt)("inlineCode",{parentName:"p"},"onBallotUsed")," callback)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Vote.sol" lineNumbers="true"',title:'"Vote.sol"',lineNumbers:'"true"'},"...\ncontract Vote {\n    event NewBallot(address owner);\n    event VoteAccepted(address ballot, bool accept);\n    ...\n    function deployBallot(address owner, address sendRemainingGasTo) external view {\n        ...\n        emit NewBallot(owner);\n        sendRemainingGasTo.transfer({value: 0, flag: 128, bounce: false});\n        ...\n    }\n    ...\n    function onBallotUsed(address owner, address sendRemainingGasTo, bool accept) external {\n        ...\n        emit VoteAccepted(expectedAddress, accept);\n        sendRemainingGasTo.transfer({value: 0, flag: 128, bounce: false});\n        ...\n    }\n...\n}\n")),(0,a.kt)("p",null,"There is another small hack for helping frontend developers. You can transfer a small number of nanotons (1,2,3.., etc) to the owner's address. For example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"owner.transfer({value: 1, flag: 1, bounce: false))")," "),(0,a.kt)("p",null,"Frontend developers can subscribe to incoming transactions to the user's wallet and use these small values to detect contract behavior. For example, we can send 1 nanovenom, if the vote has been accepted"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Vote.sol" lineNumbers="true"',title:'"Vote.sol"',lineNumbers:'"true"'},"...\ncontract Vote {\n\n    ...\n    function onBallotUsed(address owner, address sendRemainingGasTo, bool accept) external {\n        ...\n        owner.transfer({value: 1, flag: 1, bounce: false})\n        emit VoteAccepted(expectedAddress, accept);\n        sendRemainingGasTo.transfer({value: 0, flag: 128, bounce: false});\n    }\n...\n}l\n")),(0,a.kt)("p",null,"Pay attention, that events and small value callbacks should be instantiated before any transfers with 128 flag."))}u.isMDXComponent=!0}}]);