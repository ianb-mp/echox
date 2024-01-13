"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={description:"Static middleware"},o="Static",l={unversionedId:"middleware/static",id:"middleware/static",title:"Static",description:"Static middleware",source:"@site/docs/middleware/static.md",sourceDirName:"middleware",slug:"/middleware/static",permalink:"/docs/middleware/static",draft:!1,editUrl:"https://github.com/labstack/echox/blob/master/website/docs/middleware/static.md",tags:[],version:"current",frontMatter:{description:"Static middleware"},sidebar:"docsSidebar",previous:{title:"Session",permalink:"/docs/middleware/session"},next:{title:"Timeout",permalink:"/docs/middleware/timeout"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Custom Configuration",id:"custom-configuration",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Default Configuration",id:"default-configuration",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"static"},"Static"),(0,a.kt)("p",null,"Static middleware can be used to serve static files from the provided root directory."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := echo.New()\ne.Use(middleware.Static("/static"))\n')),(0,a.kt)("p",null,"This serves static files from ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," directory. For example, a request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/js/main.js"),"\nwill fetch and serve ",(0,a.kt)("inlineCode",{parentName:"p"},"static/js/main.js")," file."),(0,a.kt)("h2",{id:"custom-configuration"},"Custom Configuration"),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := echo.New()\ne.Use(middleware.StaticWithConfig(middleware.StaticConfig{\n  Root:   "static",\n  Browse: true,\n}))\n')),(0,a.kt)("p",null,"This serves static files from ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," directory and enables directory browsing. "),(0,a.kt)("p",null,"Default behavior when using with non root URL paths is to append the URL path to the filesystem path. "),(0,a.kt)("h4",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'group := root.Group("somepath")\ngroup.Use(middleware.Static(filepath.Join("filesystempath")))\n// When an incoming request comes for `/somepath` the actual filesystem request goes to `filesystempath/somepath` instead of only `filesystempath`. \n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To turn off this behavior set the ",(0,a.kt)("inlineCode",{parentName:"p"},"IgnoreBase")," config param to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,a.kt)("h4",{id:"example-2"},"Example 2"),(0,a.kt)("p",null,"Serve SPA assets from embbeded filesystem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//go:embed web\nvar webAssets embed.FS\n\nfunc main() {\n    e := echo.New()\n\n    e.Use(middleware.StaticWithConfig(middleware.StaticConfig{\n        HTML5:      true,\n        Root:       "web", // because files are located in `web` directory in `webAssets` fs\n        Filesystem: http.FS(webAssets),\n    }))\n    api := e.Group("/api")\n    api.GET("/users", func(c echo.Context) error {\n        return c.String(http.StatusOK, "users")\n    })\n\n    if err := e.Start(":8080"); err != nil && !errors.Is(err, http.ErrServerClosed) {\n        log.Fatal(err)\n    }\n}\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'StaticConfig struct {\n  // Skipper defines a function to skip middleware.\n  Skipper Skipper\n\n  // Root directory from where the static content is served.\n  // Required.\n  Root string `json:"root"`\n\n  // Index file for serving a directory.\n  // Optional. Default value "index.html".\n  Index string `json:"index"`\n\n  // Enable HTML5 mode by forwarding all not-found requests to root so that\n  // SPA (single-page application) can handle the routing.\n  // Optional. Default value false.\n  HTML5 bool `json:"html5"`\n\n  // Enable directory browsing.\n  // Optional. Default value false.\n  Browse bool `json:"browse"`\n  \n  // Enable ignoring of the base of the URL path.\n  // Example: when assigning a static middleware to a non root path group,\n  // the filesystem path is not doubled\n  // Optional. Default value false.\n  IgnoreBase bool `yaml:"ignoreBase"`\n\n  // Filesystem provides access to the static content.\n  // Optional. Defaults to http.Dir(config.Root)\n  Filesystem http.FileSystem `yaml:"-"`\n}\n')),(0,a.kt)("h3",{id:"default-configuration"},"Default Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'DefaultStaticConfig = StaticConfig{\n  Skipper: DefaultSkipper,\n  Index:   "index.html",\n}\n')))}u.isMDXComponent=!0}}]);