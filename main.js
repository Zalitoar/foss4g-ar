!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),o=a(r),i=n(21),s=a(i),l=n(22),u=a(l),c=n(23),d=a(c),f=n(24),p=a(f);n(25),n(27),n(28),n(30),n(31);var h=n(32),g=a(h),m=n(33),v=a(m),b=n(34),x=a(b);document.body.insertAdjacentHTML("beforeend",(0,o.default)({logo:g.default})),document.body.insertAdjacentHTML("beforeend",(0,s.default)({logo:g.default,geoinquietosLogo:v.default,osmArLogo:x.default})),document.body.insertAdjacentHTML("beforeend",(0,u.default)()),document.body.insertAdjacentHTML("beforeend",(0,d.default)()),document.body.insertAdjacentHTML("beforeend",(0,p.default)()),window.addEventListener("scroll",function(){document.body.scrollTop>300?document.getElementById("homeMenu").style.display="block":document.getElementById("homeMenu").style.display="none"})},function(e,t,n){var a=n(2);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){var o;return'<nav class="navbar">\n  <ul>\n    <li id="homeMenu">\n      <a href="#">\n        <img src="'+e.escapeExpression((o=null!=(o=n.logo||(null!=t?t.logo:t))?o:n.helperMissing,"function"==typeof o?o.call(null!=t?t:{},{name:"logo",hash:{},data:r}):o))+'" class="logo" />\n      </a>\n    </li>\n    <li>\n      <a href="#acerca">\n        <div></div>\n        <span>Acerca de la conferencia</span>\n      </a>\n    </li>\n    <li>\n      <a href="#lugar">\n        <div></div>\n        <span>El lugar</span>\n      </a>\n    </li>\n  </ul>\n</nav>\n'},useData:!0})},function(e,t,n){e.exports=n(3).default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(){var e=new s.HandlebarsEnvironment;return p.extend(e,s),e.SafeString=u.default,e.Exception=d.default,e.Utils=p,e.escapeExpression=p.escapeExpression,e.VM=g,e.template=function(t){return g.template(t,e)},e}t.__esModule=!0;var i=n(4),s=r(i),l=n(18),u=a(l),c=n(6),d=a(c),f=n(5),p=r(f),h=n(19),g=r(h),m=n(20),v=a(m),b=o();b.create=o,v.default(b),b.default=b,t.default=b,e.exports=t.default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},l.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}t.__esModule=!0,t.HandlebarsEnvironment=r;var o=n(5),i=n(6),s=a(i),l=n(7),u=n(15),c=n(17),d=a(c),f="4.0.5";t.VERSION=f;var p=7;t.COMPILER_REVISION=p;var h={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};t.REVISION_CHANGES=h;var g="[object Object]";r.prototype={constructor:r,logger:d.default,log:d.default.log,registerHelper:function(e,t){if(o.toString.call(e)===g){if(t)throw new s.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(o.toString.call(e)===g)o.extend(this.partials,e);else{if("undefined"==typeof t)throw new s.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(o.toString.call(e)===g){if(t)throw new s.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var m=d.default.log;t.log=m,t.createFrame=o.createFrame,t.logger=d.default},function(e,t){"use strict";function n(e){return c[e]}function a(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function r(e,t){for(var n=0,a=e.length;n<a;n++)if(e[n]===t)return n;return-1}function o(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return f.test(e)?e.replace(d,n):e}function i(e){return!e&&0!==e||!(!g(e)||0!==e.length)}function s(e){var t=a({},e);return t._parent=e,t}function l(e,t){return e.path=t,e}function u(e,t){return(e?e+".":"")+t}t.__esModule=!0,t.extend=a,t.indexOf=r,t.escapeExpression=o,t.isEmpty=i,t.createFrame=s,t.blockParams=l,t.appendContextPath=u;var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},d=/[&<>"'`=]/g,f=/[&<>"'`=]/,p=Object.prototype.toString;t.toString=p;var h=function(e){return"function"==typeof e};h(/x/)&&(t.isFunction=h=function(e){return"function"==typeof e&&"[object Function]"===p.call(e)}),t.isFunction=h;var g=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===p.call(e)};t.isArray=g},function(e,t){"use strict";function n(e,t){var r=t&&t.loc,o=void 0,i=void 0;r&&(o=r.start.line,i=r.start.column,e+=" - "+o+":"+i);for(var s=Error.prototype.constructor.call(this,e),l=0;l<a.length;l++)this[a[l]]=s[a[l]];Error.captureStackTrace&&Error.captureStackTrace(this,n),r&&(this.lineNumber=o,this.column=i)}t.__esModule=!0;var a=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error,t.default=n,e.exports=t.default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){i.default(e),l.default(e),c.default(e),f.default(e),h.default(e),m.default(e),b.default(e)}t.__esModule=!0,t.registerDefaultHelpers=r;var o=n(8),i=a(o),s=n(9),l=a(s),u=n(10),c=a(u),d=n(11),f=a(d),p=n(12),h=a(p),g=n(13),m=a(g),v=n(14),b=a(v)},function(e,t,n){"use strict";t.__esModule=!0;var a=n(5);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,n){var r=n.inverse,o=n.fn;if(t===!0)return o(this);if(t===!1||null==t)return r(this);if(a.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){var i=a.createFrame(n.data);i.contextPath=a.appendContextPath(n.data.contextPath,n.name),n={data:i}}return o(t,n)})},e.exports=t.default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(5),o=n(6),i=a(o);t.default=function(e){e.registerHelper("each",function(e,t){function n(t,n,o){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!o,c&&(u.contextPath=c+t)),l+=a(e[t],{data:u,blockParams:r.blockParams([e[t],t],[c+t,null])})}if(!t)throw new i.default("Must pass iterator to #each");var a=t.fn,o=t.inverse,s=0,l="",u=void 0,c=void 0;if(t.data&&t.ids&&(c=r.appendContextPath(t.data.contextPath,t.ids[0])+"."),r.isFunction(e)&&(e=e.call(this)),t.data&&(u=r.createFrame(t.data)),e&&"object"==typeof e)if(r.isArray(e))for(var d=e.length;s<d;s++)s in e&&n(s,s,s===e.length-1);else{var f=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==f&&n(f,s-1),f=p,s++);void 0!==f&&n(f,s-1,!0)}return 0===s&&(l=o(this)),l})},e.exports=t.default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(6),o=a(r);t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var a=n(5);t.default=function(e){e.registerHelper("if",function(e,t){return a.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||a.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],a=0;a<arguments.length-1;a++)t.push(arguments[a]);var r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),t[0]=r,e.log.apply(e,t)})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var a=n(5);t.default=function(e){e.registerHelper("with",function(e,t){a.isFunction(e)&&(e=e.call(this));var n=t.fn;if(a.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&(r=a.createFrame(t.data),r.contextPath=a.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:a.blockParams([e],[r&&r.contextPath])})})},e.exports=t.default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){i.default(e)}t.__esModule=!0,t.registerDefaultDecorators=r;var o=n(16),i=a(o)},function(e,t,n){"use strict";t.__esModule=!0;var a=n(5);t.default=function(e){e.registerDecorator("inline",function(e,t,n,r){var o=e;return t.partials||(t.partials={},o=function(r,o){var i=n.partials;n.partials=a.extend({},i,t.partials);var s=e(r,o);return n.partials=i,s}),t.partials[r.args[0]]=r.fn,o})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var a=n(5),r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=a.indexOf(r.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=r.lookupLevel(e),"undefined"!=typeof console&&r.lookupLevel(r.level)<=e){var t=r.methodMap[e];console[t]||(t="log");for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];console[t].apply(console,a)}}};t.default=r,e.exports=t.default},function(e,t){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){var t=e&&e[0]||1,n=v.COMPILER_REVISION;if(t!==n){if(t<n){var a=v.REVISION_CHANGES[n],r=v.REVISION_CHANGES[t];throw new m.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+a+") or downgrade your runtime to an older version ("+r+").")}throw new m.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function i(e,t){function n(n,a,r){r.hash&&(a=h.extend({},a,r.hash),r.ids&&(r.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,a,r);var o=t.VM.invokePartial.call(this,n,a,r);if(null==o&&t.compile&&(r.partials[r.name]=t.compile(n,e.compilerOptions,t),o=r.partials[r.name](a,r)),null!=o){if(r.indent){for(var i=o.split("\n"),s=0,l=i.length;s<l&&(i[s]||s+1!==l);s++)i[s]=r.indent+i[s];o=i.join("\n")}return o}throw new m.default("The partial "+r.name+" could not be compiled when running in runtime-only mode")}function a(t){function n(t){return""+e.main(r,t,r.helpers,r.partials,i,l,s)}var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=o.data;a._setup(o),!o.partial&&e.useData&&(i=d(t,i));var s=void 0,l=e.useBlockParams?[]:void 0;return e.useDepths&&(s=o.depths?t!==o.depths[0]?[t].concat(o.depths):o.depths:[t]),(n=f(e.main,n,r,o.depths||[],i,l))(t,o)}if(!t)throw new m.default("No environment passed to template");if(!e||!e.main)throw new m.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r={strict:function(e,t){if(!(t in e))throw new m.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,a=0;a<n;a++)if(e[a]&&null!=e[a][t])return e[a][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:h.escapeExpression,invokePartial:n,fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,a,r){var o=this.programs[e],i=this.fn(e);return t||r||a||n?o=s(this,e,i,t,n,a,r):o||(o=this.programs[e]=s(this,e,i)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=h.extend({},t,e)),n},noop:t.VM.noop,compilerInfo:e.compiler};return a.isTop=!0,a._setup=function(n){n.partial?(r.helpers=n.helpers,r.partials=n.partials,r.decorators=n.decorators):(r.helpers=r.merge(n.helpers,t.helpers),e.usePartial&&(r.partials=r.merge(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=r.merge(n.decorators,t.decorators)))},a._child=function(t,n,a,o){if(e.useBlockParams&&!a)throw new m.default("must pass block params");if(e.useDepths&&!o)throw new m.default("must pass parent depths");return s(r,t,e[t],n,0,a,o)},a}function s(e,t,n,a,r,o,i){function s(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i;return i&&t!==i[0]&&(s=[t].concat(i)),n(e,t,e.helpers,e.partials,r.data||a,o&&[r.blockParams].concat(o),s)}return s=f(n,s,e,i,a,o),s.program=t,s.depth=i?i.length:0,s.blockParams=r||0,s}function l(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function u(e,t,n){n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var a=void 0;if(n.fn&&n.fn!==c&&(n.data=v.createFrame(n.data),a=n.data["partial-block"]=n.fn,a.partials&&(n.partials=h.extend({},n.partials,a.partials))),void 0===e&&a&&(e=a),void 0===e)throw new m.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function c(){return""}function d(e,t){return t&&"root"in t||(t=t?v.createFrame(t):{},t.root=e),t}function f(e,t,n,a,r,o){if(e.decorator){var i={};t=e.decorator(t,i,n,a&&a[0],r,o,a),h.extend(t,i)}return t}t.__esModule=!0,t.checkRevision=o,t.template=i,t.wrapProgram=s,t.resolvePartial=l,t.invokePartial=u,t.noop=c;var p=n(5),h=r(p),g=n(6),m=a(g),v=n(4)},function(e,t){(function(n){"use strict";t.__esModule=!0,t.default=function(e){var t="undefined"!=typeof n?n:window,a=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=a),e}},e.exports=t.default}).call(t,function(){return this}())},function(e,t,n){var a=n(2);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){var o,i=null!=t?t:{},s=n.helperMissing,l="function",u=e.escapeExpression;return'<section id="banner" class="banner">\n  <img src="'+u((o=null!=(o=n.logo||(null!=t?t.logo:t))?o:s,typeof o===l?o.call(i,{name:"logo",hash:{},data:r}):o))+'" class="logo" />\n  <h1>FOSS4G＋SOTM Argentina 2017</h1>\n  <h2>Conferencia de Geomática Libre</h2>\n  <h3>23 al 28 de octubre</h3>\n  <h4>Instituto Geográfico Nacional</h4>\n  <div class="organizers">\n    <a href="https://wiki.osgeo.org/wiki/Category:Geoinquietos_Argentina">\n      <img src="'+u((o=null!=(o=n.geoinquietosLogo||(null!=t?t.geoinquietosLogo:t))?o:s,typeof o===l?o.call(i,{name:"geoinquietosLogo",hash:{},data:r}):o))+'" class="geoinquietos" />\n    </a>\n    <a href="http://wiki.openstreetmap.org/wiki/WikiProject_Argentina">\n      <img src="'+u((o=null!=(o=n.osmArLogo||(null!=t?t.osmArLogo:t))?o:s,typeof o===l?o.call(i,{name:"osmArLogo",hash:{},data:r}):o))+'" class="osm-ar" />\n    </a>\n  </div>\n</section>\n'},useData:!0})},function(e,t,n){var a=n(2);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){return'<section id="acerca" class="about">\n  <h2>Acerca de la conferencia</h2>\n  <p>Las <strong>FOSS4G</strong> son conferencias de <strong>Geomática Libre</strong> que se dan todos los años en distintas partes del mundo. Existe una conferencia global organizada por <strong><a target="_blank" href=\'http://www.osgeo.org\' title=\'Open Source Geospatial Foundation\'>OSGeo</a></strong> que en 2017 tendrá lugar en Boston, Estados Unidos. Además de la global, existen otras conferencias locales en: Norte América, Europa, España, Japón, India y otros.</p>\n  <p>La conferencia <strong>State of the Map</strong> (SotM) Argentina es la conferencia nacional de <a target="_blank" href=\'http://www.osm.org\' title=\'OpenStreetMap\'>OpenStreetMap</a>.</p>\n  <p>Esta conferencia pretende reunir a los miembros de la comunidad de geomáticos argentinos y del resto de los países latinoamericanos. Así como en las conferencias globales, esperamos tener una mezcla de talleres prácticos, presentaciones de proyectos y exposiciones de casos de uso de herramientas libres aplicadas a la geomática. Además, es un evento que promueve la interacción entre los usuarios de distintas comunidades y organizaciones.</p>\n  <h4>En los días en que transcurra la conferencia buscaremos:</h4>\n  <ul>\n    <li><strong>Compartir</strong> experiencias, proyectos e ideas en torno a la geomática libre</li>\n    <li><strong>Consolidar</strong> la comunidad para trabajar apostando a la transparencia, la colaboración y el conocimiento compartido</li>\n  </ul>\n  <h4>La conferencia está dirigida a:</h4>\n  <ul>\n    <li>Decisores de distintos organismos de gobierno</li>\n    <li>Empleados estatales relacionados con el SIG</li>\n    <li>Miembros de <a target="_blank" href=\'http://www.idera.gob.ar\' title=\'Infraestructura de Datos Espaciales de la República Argentina\'>IDERA</a></li>\n    <li>Universidades: profesores y alumnos</li>\n    <li>Público general</li>\n  </ul>\n  <h3>¡Nos vemos ahí!</h3>\n  <p>Seguinos en <a target="_blank" href="https://twitter.com/foss4gAR">Twitter</a> para enterarte de las novedades o escribinos a <a target="_blank" href=\'mailto:info@foss4g-ar.org\'>info@foss4g-ar.org</a> por cualquier duda o comentario que tengas.</p>\n</section>\n'},useData:!0})},function(e,t,n){var a=n(2);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){return'<section id="lugar">\n  <h2>El lugar</h2>\n  <p>El <a target="_blank" href=\'http://www.ign.gob.ar\'>Instituto Geográfico Nacional</a> es un organismo público que tiene como misión principal representar el territorio nacional a través de la cartografía oficial y velar para que los mapas de la República Argentina que se confeccionen, ingresen o circulen en el país se ajusten a dicha cartografía oficial.</p>\n  <p>Siendo un organismo tan importante dentro del ambiente de la geomática, es un placer, un orgullo y un honor contar con sus instalaciones para llevar a cabo este evento que busca fortalecer la comunidad en torno a los sistemas de información geográfica y los datos geoespaciales.</p>\n  <p>El IGN cuenta con un auditorio para aproximadamente 180 personas y varias salas pequeñas para desarrollar los talleres prácticos y las exposiciones.</p>\n  <p>Está ubicado sobre la calle Cabildo, en el barrio de Palermo y tiene fácil acceso a través de transporte público.</p>\n</section>\n'},useData:!0})},function(e,t,n){var a=n(2);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){return"<footer>\n  <h5>Notas:</h5>\n  <ul>\n    <li>La conferencia pretende ser un evento libre de discriminación de cualquier tipo y brindar un espacio de intercambio de experiencias sin importar sexo, orientación sexual, discapacidad, apariencia física, tamaño corporal, raza o religión.</li>\n    <li>Los organizadores se reservan el derecho a denegar la entrada o expulsar a cualquier individuo que sea descubierto involucrado en acciones o discursos ofensivos.</li>\n  </ul>\n</footer>\n"},useData:!0})},function(e,t){},,function(e,t){},function(e,t){},,function(e,t){},function(e,t){},function(e,t,n){e.exports=n.p+"e4dfa3f04e4417c2e7138bad2ec576d2.png"},function(e,t,n){e.exports=n.p+"286213d8b6c4187dd6beff068d279dd1.png"},function(e,t,n){e.exports=n.p+"6686e22b12364e1048afe6de273c4009.png"}]);
//# sourceMappingURL=main.js.map