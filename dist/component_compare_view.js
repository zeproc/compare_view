/*! For license information please see component_compare_view.js.LICENSE.txt */
(()=>{"use strict";var e={408:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),f=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,p={};function v(e,t,r){this.props=e,this.context=t,this.refs=p,this.updater=r||h}function g(){}function k(e,t,r){this.props=e,this.context=t,this.refs=p,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var y=k.prototype=new g;y.constructor=k,m(y,v.prototype),y.isPureReactComponent=!0;var b=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,c={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!M.hasOwnProperty(o)&&(c[o]=t[o]);var s=arguments.length-2;if(1===s)c.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];c.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:r,type:e,key:a,ref:i,props:c,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,c,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return a=a(s=e),e=""===c?"."+T(s,0):c,b(a)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),O(a,t,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(s=0,c=""===c?".":c+":",b(e))for(var l=0;l<e.length;l++){var u=c+T(i=e[l],l);s+=O(i,t,o,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)s+=O(i=i.value,t,o,u=c+T(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function j(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},z={transition:null},C={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:z,ReactCurrentOwner:x};t.Children={map:j,forEach:function(e,t,r){j(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=k,t.StrictMode=c,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)w.call(t,l)&&!M.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:r,type:e.type,key:c,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:_,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},294:(e,t,r)=>{e.exports=r(408)},271:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.choose_cfg=void 0;const n={start_mode:r(419).Mode.circle,circumference_fraction:.005,circle_size:void 0,circle_fraction:.2,show_circle:!0,revolve_imgs_on_click:!0,slider_fraction:.01,slider_time:400,rate_function:function(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},start_slider_pos:.5,show_slider:!0};t.choose_cfg=function(e,t){return null!=e[t]?e[t]:n[t]}},419:(e,t)=>{var r,n;Object.defineProperty(t,"__esModule",{value:!0}),t.Task=t.Mode=void 0,(n=t.Mode||(t.Mode={}))[void 0]="undefined",n.horizontal="horizontal",n.vertical="vertical",n.circle="circle",(r=t.Task||(t.Task={}))[r.none=0]="none",r[r.revolve_imgs=1]="revolve_imgs",r[r.change_mode=2]="change_mode",r[r.update_circle=3]="update_circle",r[r.remove_circle=4]="remove_circle",r[r.start_slider_move=5]="start_slider_move",r[r.possible_instant_slide=6]="possible_instant_slide",r[r.update_slider=7]="update_slider"},870:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.CompareView=void 0;const a=c(r(294)),i=r(787),s=r(33);t.CompareView=e=>{let t=a.default.createRef(),r=a.default.createRef(),n=a.default.createRef(),o=a.default.createRef(),c=a.default.createRef();return(0,a.useEffect)((()=>{var a;let l=null===(a=t.current)||void 0===a?void 0:a.getContext("2d");(0,i.load_cvd)(e.image_urls,l,e.config,(t=>{var a;if(null!=e.config&&(null===(a=e.config)||void 0===a?void 0:a.create_controls)){let e={circle_check:r.current,horizontal_check:n.current,vertical_check:o.current,revolve_imgs_button:c.current};(0,s.attach_control_data)(t,e)}}))}),[]),a.default.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%"}},a.default.createElement("div",null,a.default.createElement("canvas",{style:{width:"100%"},ref:t,tabIndex:1})),null!=e.config&&e.config.create_controls?a.default.createElement("div",{style:{width:"200px"}},a.default.createElement("label",null,a.default.createElement("input",{ref:r,type:"checkbox"}),"Circle"),a.default.createElement("br",null),a.default.createElement("label",null,a.default.createElement("input",{ref:n,type:"checkbox"}),"Horizontal"),a.default.createElement("br",null),a.default.createElement("label",null,a.default.createElement("input",{ref:o,type:"checkbox"}),"Vertical"),a.default.createElement("br",null),a.default.createElement("button",{ref:c},"Revolve Images")):void 0)}},33:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.attach_control_data=t.get_mode_change_callback=t.reload_checkboxes=void 0;const n=r(419),o=r(308);function c(e){var t;if(null!=e.ctrl_data)switch((t=e.ctrl_data).circle_check.checked=!1,t.horizontal_check.checked=!1,t.vertical_check.checked=!1,e.current_mode){case n.Mode.circle:e.ctrl_data.circle_check.checked=!0;break;case n.Mode.horizontal:e.ctrl_data.horizontal_check.checked=!0;break;case n.Mode.vertical:e.ctrl_data.vertical_check.checked=!0;break;default:throw`unsupported mode: ${e.current_mode}`}}function a(e,t){return r=>{r.target.checked?(e.next_mode=t,(0,o.push_task)(e,n.Task.change_mode)):c(e)}}t.reload_checkboxes=c,t.get_mode_change_callback=a,t.attach_control_data=function(e,t){e.ctrl_data=t,t.circle_check.onclick=a(e,n.Mode.circle),t.horizontal_check.onclick=a(e,n.Mode.horizontal),t.vertical_check.onclick=a(e,n.Mode.vertical),t.revolve_imgs_button.onclick=()=>{(0,o.push_task)(e,n.Task.revolve_imgs)}}},949:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.create_key=t.set_mouse_pos=void 0,t.set_mouse_pos=function(e,t){let r=e.canvas.getBoundingClientRect(),n=e.width/r.width,o=e.height/r.height;e.mouse_pos=[(t.clientX-r.left)*n,(t.clientY-r.top)*o]},t.create_key=function(){let e="";for(let t=0;t<12;t++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(36*Math.random()));return e}},850:(e,t)=>{function r(e){var t,r;let n=null===(t=e[0])||void 0===t?void 0:t.element.width,o=null===(r=e[0])||void 0===r?void 0:r.element.height;for(let t of e)t.element.width==n&&t.element.height==o||console.log("Warning: images don't have the same resolution"),n=Math.max(n,t.element.width),o=Math.max(o,t.element.height);return[n,o]}Object.defineProperty(t,"__esModule",{value:!0}),t.revolve_imgs=t.load_images=void 0,t.load_images=function(e,t){if(e.length<2)throw`image_urls must contain at least two images, not ${e.length}`;let n=[],o=0,c=e.length;for(let a=0;a<c;++a){let i={url:e[a],element:document.createElement("img"),label:`${a}`};n.push(i),i.element.onload=()=>{++o,o==c&&t(n,r(n))},i.element.src=i.url}},t.revolve_imgs=function(e){return e.images.unshift(e.images.pop()),!0}},787:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.load_cvd=void 0;const n=r(419),o=r(308),c=r(850),a=r(917),i=r(271);t.load_cvd=function(e,t,r={},s){!function(e){if("y"===e.dataset.in_use)throw`the canvas with the id '${e.id}' is already in use`;e.dataset.in_use="y"}(t.canvas),(0,c.load_images)(e,((e,c)=>{let l={images:e,images_len:e.length,canvas:t.canvas,ctx:t,width:0,height:0,ctrl_data:void 0,mouse_pos:[0,0],held_down:!1,next_mode:(0,i.choose_cfg)(r,"start_mode"),current_mode:n.Mode.undefined,task_stack:[],next_update_queued:!1,circumference_thickness:0,render_circle:!1,circle_size:0,show_circle:(0,i.choose_cfg)(r,"show_circle"),revolve_imgs_on_click:(0,i.choose_cfg)(r,"revolve_imgs_on_click"),touching:!1,slider_thickness:0,slider_pos:(0,i.choose_cfg)(r,"start_slider_pos"),slider_time:(0,i.choose_cfg)(r,"slider_time"),rate_function:(0,i.choose_cfg)(r,"rate_function"),show_slider:(0,i.choose_cfg)(r,"show_slider"),start_timestamp:0,start_pos:0,target_pos:0};(0,a.load_canvas_scaling)(l,c,r),null!=s&&s(l),(0,o.push_task)(l,n.Task.change_mode)}))}},736:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.change_mode=void 0;const n=r(419),o=r(33),c=r(571),a=r(199);t.change_mode=function(e){return function(e){switch(e.current_mode){case n.Mode.undefined:break;case n.Mode.circle:(0,c.terminate_circle_mode)(e);break;case n.Mode.horizontal:case n.Mode.vertical:(0,a.terminate_slider_mode)(e);break;default:throw`unsupported mode: ${e.current_mode}`}}(e),function(e){switch(e.current_mode=e.next_mode,e.next_mode){case n.Mode.circle:(0,c.init_circle_mode)(e);break;case n.Mode.horizontal:case n.Mode.vertical:(0,a.init_slider_mode)(e);break;default:throw`unsupported mode: ${e.current_mode}`}(0,o.reload_checkboxes)(e)}(e),!0}},571:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.render_circle=t.remove_circle=t.update_circle=t.terminate_circle_mode=t.init_circle_mode=void 0;const n=r(419),o=r(308),c=r(949);function a(e,t,r){e.ctx.beginPath(),e.ctx.arc(e.mouse_pos[0],e.mouse_pos[1],e.circle_size,t,r),r-t!=2*Math.PI&&e.ctx.lineTo(e.mouse_pos[0],e.mouse_pos[1]),e.ctx.closePath()}function i(e,t,r,n){var o;a(e,r,n),e.ctx.save(),e.ctx.clip(),e.ctx.drawImage(null===(o=e.images[t])||void 0===o?void 0:o.element,0,0,e.width,e.height),e.ctx.restore(),e.show_circle&&(a(e,r,n),e.ctx.strokeStyle="black",e.ctx.lineWidth=e.circumference_thickness,e.ctx.stroke())}t.init_circle_mode=function(e){e.canvas.onmousemove=t=>{(0,c.set_mouse_pos)(e,t),(0,o.push_task)(e,n.Task.update_circle)},e.canvas.onmouseleave=()=>{(0,o.push_task)(e,n.Task.remove_circle)},e.revolve_imgs_on_click&&(e.canvas.ontouchstart=()=>{e.touching=!0},e.canvas.onmousedown=()=>{e.touching||(0,o.push_task)(e,n.Task.revolve_imgs)}),e.canvas.matches(":hover")&&(0,o.push_task)(e,n.Task.update_circle),e.canvas.onfocus=()=>{document.body.style.userSelect="none"},e.canvas.onblur=()=>{document.body.style.userSelect="text",e.touching=!1}},t.terminate_circle_mode=function(e){e.canvas.onmousemove=null,e.canvas.onmouseleave=null,e.canvas.ontouchstart=null,e.canvas.onmousedown=null,e.canvas.onfocus=null,e.canvas.onblur=null,e.canvas.style.cursor="default",document.body.style.userSelect="text",e.touching=!1,(0,o.push_task)(e,n.Task.remove_circle)},t.update_circle=function(e){return e.render_circle=!0,e.canvas.style.cursor="none",!1},t.remove_circle=function(e){return(0,o.delete_task)(e,n.Task.update_circle),e.canvas.style.cursor="default",!0},t.render_circle=function(e){var t;if(e.render_circle){e.ctx.clearRect(0,0,e.width,e.height),function(e){var t;e.ctx.beginPath(),e.ctx.arc(e.mouse_pos[0],e.mouse_pos[1],e.circle_size-1,0,2*Math.PI),e.ctx.lineTo(e.width,0),e.ctx.lineTo(0,0),e.ctx.lineTo(0,e.height),e.ctx.lineTo(e.width,e.height),e.ctx.lineTo(e.width,0),e.ctx.closePath(),e.ctx.save(),e.ctx.clip(),e.ctx.drawImage(null===(t=e.images[0])||void 0===t?void 0:t.element,0,0,e.width,e.height),e.ctx.restore()}(e);for(let t=1;t<e.images_len;++t)i(e,t,(t-1)*Math.PI*2/(e.images_len-1),t*Math.PI*2/(e.images_len-1))}else e.ctx.clearRect(0,0,e.width,e.height),e.ctx.drawImage(null===(t=e.images[0])||void 0===t?void 0:t.element,0,0,e.width,e.height);e.render_circle=!1}},199:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.render_slider=t.update_slider=t.instant_slide=t.start_slider_move=t.terminate_slider_mode=t.init_slider_mode=void 0;const n=r(419),o=r(308),c=r(949);t.init_slider_mode=function(e){e.canvas.onmousedown=()=>{e.held_down=!0,(0,o.push_task)(e,n.Task.start_slider_move)},e.canvas.onmouseup=()=>{e.held_down=!1},document.onmouseup=()=>{e.held_down=!1},e.canvas.onmousemove=t=>{(0,c.set_mouse_pos)(e,t),(0,o.push_task)(e,n.Task.possible_instant_slide)},e.current_mode==n.Mode.horizontal?e.canvas.onmouseenter=()=>{e.canvas.style.cursor="ew-resize"}:e.canvas.onmouseenter=()=>{e.canvas.style.cursor="ns-resize"},e.canvas.onmouseleave=()=>{e.canvas.style.cursor="default"},e.canvas.onfocus=()=>{document.body.style.userSelect="none"},e.canvas.onblur=()=>{document.body.style.userSelect="text"}},t.terminate_slider_mode=function(e){e.canvas.onmousedown=null,e.canvas.onmouseup=null,document.onmouseup=null,e.canvas.onmouseup=null,e.canvas.onmousemove=null,e.canvas.onmouseenter=null,e.canvas.onmouseleave=null,e.canvas.onfocus=null,e.canvas.onblur=null,e.held_down=!1,e.canvas.style.cursor="default",document.body.style.userSelect="text"},t.start_slider_move=function(e,t){return(0,o.push_task)(e,n.Task.update_slider),e.start_timestamp=t,e.start_pos=e.slider_pos,e.current_mode==n.Mode.horizontal?e.target_pos=e.mouse_pos[0]/e.width:e.target_pos=e.mouse_pos[1]/e.height,!0},t.instant_slide=function(e,t){return e.held_down&&(e.current_mode==n.Mode.horizontal?e.target_pos=e.mouse_pos[0]/e.width:e.target_pos=e.mouse_pos[1]/e.height,e.start_pos=e.target_pos,e.slider_pos=e.target_pos),!0},t.update_slider=function(e,t){let r=(t-e.start_timestamp)/e.slider_time;return r=Math.min(Math.max(r,0),1),r=e.rate_function(r),e.slider_pos=(1-r)*e.start_pos+r*e.target_pos,e.slider_pos==e.target_pos},t.render_slider=function(e){var t;e.ctx.clearRect(0,0,e.width,e.height),e.ctx.drawImage(null===(t=e.images[0])||void 0===t?void 0:t.element,0,0,e.width,e.height),e.show_slider&&function(e){e.ctx.beginPath(),e.current_mode==n.Mode.horizontal?(e.ctx.moveTo(e.slider_pos*e.width,0),e.ctx.lineTo(e.slider_pos*e.width,e.height)):(e.ctx.moveTo(0,e.slider_pos*e.height),e.ctx.lineTo(e.width,e.slider_pos*e.height)),e.ctx.closePath(),e.ctx.strokeStyle="black",e.ctx.lineWidth=e.slider_thickness,e.ctx.stroke()}(e),function(e){var t;e.ctx.beginPath(),e.current_mode==n.Mode.horizontal?e.ctx.rect(e.slider_pos*e.width,0,e.width,e.height):e.ctx.rect(0,e.slider_pos*e.height,e.width,e.height),e.ctx.closePath(),e.ctx.save(),e.ctx.clip(),e.ctx.clearRect(0,0,e.width,e.height),e.ctx.drawImage(null===(t=e.images[1])||void 0===t?void 0:t.element,0,0,e.width,e.height),e.ctx.restore()}(e)}},917:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.load_canvas_scaling=void 0;const n=r(271);t.load_canvas_scaling=function(e,t,r){e.canvas.width=t[0],e.canvas.height=t[1],e.width=e.canvas.width,e.height=e.canvas.height,function(e,t){let r=Math.max(e.canvas.width,e.canvas.height);e.circumference_thickness=r*(0,n.choose_cfg)(t,"circumference_fraction"),e.circle_size=null!=t.circle_size?t.circle_size:r*(0,n.choose_cfg)(t,"circle_fraction"),e.slider_thickness=r*(0,n.choose_cfg)(t,"slider_fraction")}(e,r)}},308:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.contains_task=t.push_task=t.delete_task=void 0;const n=r(419),o=r(850),c=r(736),a=r(571),i=r(199);function s(e){e.next_update_queued=!0,window.requestAnimationFrame((t=>{!function(e,t){!function(e,t){let r=[];for(;e.task_stack.length;){let s,l=e.task_stack.pop();switch(l){case n.Task.none:s=!0;break;case n.Task.change_mode:s=(0,c.change_mode)(e);break;case n.Task.revolve_imgs:s=(0,o.revolve_imgs)(e);break;case n.Task.update_circle:s=(0,a.update_circle)(e);break;case n.Task.remove_circle:s=(0,a.remove_circle)(e);break;case n.Task.start_slider_move:s=(0,i.start_slider_move)(e,t);break;case n.Task.possible_instant_slide:s=(0,i.instant_slide)(e,t);break;case n.Task.update_slider:s=(0,i.update_slider)(e,t);break;default:throw`unknown task: ${l}`}s||r.push(l)}e.task_stack=r}(e,t),function(e){switch(e.current_mode){case n.Mode.circle:(0,a.render_circle)(e);break;case n.Mode.horizontal:case n.Mode.vertical:(0,i.render_slider)(e);break;default:throw`unsupported mode: ${e.current_mode}`}}(e),e.task_stack.length?s(e):e.next_update_queued=!1}(e,t)}))}function l(e,t){let r=e.task_stack.indexOf(t);-1!=r&&e.task_stack.splice(r,1)}t.delete_task=l,t.push_task=function(e,t){l(e,t),e.task_stack.push(t),function(e){e.next_update_queued||s(e)}(e)},t.contains_task=function(e,t){return-1!=e.task_stack.indexOf(t)}}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n].call(c.exports,c,c.exports,r),c.exports}(870);exports.compare_view=r})();