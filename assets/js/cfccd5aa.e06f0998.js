/*! For license information please see cfccd5aa.e06f0998.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[983088],{461092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(824246),o=r(511151);const i={id:"proxying",title:"Proxying",description:"Documentation on Proxying"},a=void 0,s={id:"plugins/proxying",title:"Proxying",description:"Documentation on Proxying",source:"@site/../docs/plugins/proxying.md",sourceDirName:"plugins",slug:"/plugins/proxying",permalink:"/docs/plugins/proxying",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/proxying.md",tags:[],version:"current",frontMatter:{id:"proxying",title:"Proxying",description:"Documentation on Proxying"},sidebar:"docs",previous:{title:"Validate your OpenAPI spec against test data",permalink:"/docs/openapi/test-case-validation"},next:{title:"Backend plugins",permalink:"/docs/plugins/backend-plugin"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Configuration",id:"configuration",level:2}];function u(e){const t=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["The Backstage backend comes packaged with a basic HTTP proxy, that can aid in\nreaching backend service APIs from frontend plugin code. See\n",(0,n.jsx)(t.a,{href:"/docs/plugins/call-existing-api",children:"Call Existing API"})," for a description of when the proxy\ncan be the best choice for communicating with an API."]}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(t.p,{children:"The plugin is already added to a default Backstage project."}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.code,{children:"packages/backend/src/index.ts"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const proxyEnv = useHotMemoize(module, () => createEnv('proxy'));\n\nconst service = createServiceBuilder(module)\n  .loadConfig(configReader)\n  /** ... other routers ... */\n  .addRouter('/proxy', await proxy(proxyEnv));\n"})}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["Configuration for the proxy plugin lives under a ",(0,n.jsx)(t.code,{children:"proxy"})," root key of your\n",(0,n.jsx)(t.code,{children:"app-config.yaml"})," file."]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"# in app-config.yaml\nproxy:\n  endpoints:\n    /simple-example: http://simple.example.com:8080\n    '/larger-example/v1':\n      target: http://larger.example.com:8080/svc.v1\n      headers:\n        Authorization: ${EXAMPLE_AUTH_HEADER}\n        # ...or interpolating a value into part of a string,\n        # Authorization: Bearer ${EXAMPLE_AUTH_TOKEN}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Each key under the proxy configuration entry is a route to match, below the\nprefix that the proxy plugin is mounted on. If it does not start with a slash,\none will be prefixed automatically. For example, if the backend mounts the proxy\nplugin as ",(0,n.jsx)(t.code,{children:"/proxy"}),", the above configuration will lead to the proxy acting on\nbackend requests to ",(0,n.jsx)(t.code,{children:"/api/proxy/simple-example/..."})," and\n",(0,n.jsx)(t.code,{children:"/api/proxy/larger-example/v1/..."}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The value inside each route is either a simple URL string, or an object on the\nformat accepted by\n",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/http-proxy-middleware",children:"http-proxy-middleware"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"If the value is a string, it is assumed to correspond to:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"target: <the string>\nchangeOrigin: true\npathRewrite:\n  '^<url prefix><the string>/': '/'\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When the target is an object, it is given verbatim to ",(0,n.jsx)(t.code,{children:"http-proxy-middleware"}),"\nexcept with the following caveats for convenience:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If ",(0,n.jsx)(t.code,{children:"changeOrigin"})," is not specified, it is set to ",(0,n.jsx)(t.code,{children:"true"}),". This is the most\ncommonly useful value."]}),"\n",(0,n.jsxs)(t.li,{children:["If ",(0,n.jsx)(t.code,{children:"pathRewrite"})," is not specified, it is set to a single rewrite that removes\nthe entire prefix and route. In the above example, a rewrite of\n",(0,n.jsx)(t.code,{children:"'^/api/proxy/larger-example/v1/': '/'"})," is added. That means that a request to\n",(0,n.jsx)(t.code,{children:"/api/proxy/larger-example/v1/some/path"})," will be translated to a request to\n",(0,n.jsx)(t.code,{children:"http://larger.example.com:8080/svc.v1/some/path"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"There are also additional settings:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"allowedMethods"}),": Limit the forwarded HTTP methods. For example\n",(0,n.jsx)(t.code,{children:"allowedMethods: ['GET']"})," enforces read-only access."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"allowedHeaders"}),": A list of headers that should be forwarded to and received\nfrom the target."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["By default, the proxy will only forward safe HTTP request headers to the target.\nThose are based on the headers that are considered safe for CORS and includes\nheaders like ",(0,n.jsx)(t.code,{children:"content-type"})," or ",(0,n.jsx)(t.code,{children:"last-modified"}),", as well as all headers that are\nset by the proxy. If the proxy should forward other headers like\n",(0,n.jsx)(t.code,{children:"authorization"}),", this must be enabled by the ",(0,n.jsx)(t.code,{children:"allowedHeaders"})," config, for\nexample ",(0,n.jsx)(t.code,{children:"allowedHeaders: ['Authorization']"}),". This should help to not\naccidentally forward confidential headers (",(0,n.jsx)(t.code,{children:"cookie"}),", ",(0,n.jsx)(t.code,{children:"X-Auth-Request-User"}),") to\nthird-parties."]}),"\n",(0,n.jsx)(t.p,{children:"The same logic applies to headers that are sent from the target back to the\nfrontend."})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function m(e,t,r){this.props=e,this.context=t,this.refs=x,this.updater=r||h}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=x,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var b=v.prototype=new g;b.constructor=v,y(b,m.prototype),b.isPureReactComponent=!0;var j=Array.isArray,_=Object.prototype.hasOwnProperty,w={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,o)&&!k.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:s,props:i,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===i?"."+P(c,0):i,j(a)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),C(a,t,o,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),t.push(a)),1;if(c=0,i=""===i?".":i+":",j(e))for(var l=0;l<e.length;l++){var u=i+P(s=e[l],l);c+=C(s,t,o,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=C(s=s.value,t,o,u=i+P(s,l++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},A={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)_.call(t,l)&&!k.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||a:i(e),n.createElement(o.Provider,{value:s},t)}}}]);