/*! For license information please see c1ac8402.3766f23a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[873768],{376074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var n=r(824246),u=r(511151);const o={id:"plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketserverpullrequestaction",title:"createPublishBitbucketServerPullRequestAction",description:"API reference for createPublishBitbucketServerPullRequestAction"},c=void 0,i={id:"reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketserverpullrequestaction",title:"createPublishBitbucketServerPullRequestAction",description:"API reference for createPublishBitbucketServerPullRequestAction",source:"@site/../docs/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketserverpullrequestaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketserverpullrequestaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketserverpullrequestaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketserverpullrequestaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketserverpullrequestaction",title:"createPublishBitbucketServerPullRequestAction",description:"API reference for createPublishBitbucketServerPullRequestAction"}},s={},a=[];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",blockquote:"blockquote",strong:"strong",pre:"pre"},(0,u.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-bitbucket",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketserverpullrequestaction",children:(0,n.jsx)(t.code,{children:"createPublishBitbucketServerPullRequestAction"})})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsx)(t.p,{children:"use import from @backstage/plugin-scaffolder-backend-module-bitbucket-server instead"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"createPublishBitbucketServerPullRequestAction: typeof bitbucketServer.createPublishBitbucketServerPullRequestAction\n"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,u.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,t,r)=>{var n=r(827378),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,o={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:u,type:e,key:a,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function k(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||b}function m(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||b}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=k.prototype;var _=v.prototype=new m;_.constructor=v,y(_,k.prototype),_.isPureReactComponent=!0;var g=Array.isArray,S=Object.prototype.hasOwnProperty,P={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var u,o={},c=null,i=null;if(null!=t)for(u in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,u)&&!j.hasOwnProperty(u)&&(o[u]=t[u]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var a=Array(s),l=0;l<s;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(u in s=e.defaultProps)void 0===o[u]&&(o[u]=s[u]);return{$$typeof:r,type:e,key:c,ref:i,props:o,_owner:P.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,u,o,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return c=c(s=e),e=""===o?"."+w(s,0):o,g(c)?(u="",null!=e&&(u=e.replace(E,"$&/")+"/"),C(c,t,u,"",(function(e){return e}))):null!=c&&(x(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,u+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),t.push(c)),1;if(s=0,o=""===o?".":o+":",g(e))for(var a=0;a<e.length;a++){var l=o+w(i=e[a],a);s+=C(i,t,u,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(i=e.next()).done;)s+=C(i=i.value,t,u,l=o+w(i,a++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function q(e,t,r){if(null==e)return e;var n=[],u=0;return C(e,n,"","",(function(e){return t.call(r,e,u++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},A={transition:null},I={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:A,ReactCurrentOwner:P};t.Children={map:q,forEach:function(e,t,r){q(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return q(e,(function(){t++})),t},toArray:function(e){return q(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=k,t.Fragment=u,t.Profiler=c,t.PureComponent=v,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=y({},e.props),o=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=P.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)S.call(t,a)&&!j.hasOwnProperty(a)&&(u[a]=void 0===t[a]&&void 0!==s?s[a]:t[a])}var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){s=Array(a);for(var l=0;l<a;l++)s[l]=arguments[l+2];u.children=s}return{$$typeof:r,type:e.type,key:o,ref:c,props:u,_owner:i}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>o});var n=r(667294);const u=n.createContext({});function o(e){const t=n.useContext(u);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:o(e),n.createElement(u.Provider,{value:i},t)}}}]);