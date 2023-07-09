"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5987],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={description:"Handling request",slug:"/request",sidebar_position:9},o="Request",l={unversionedId:"guide/request",id:"guide/request",title:"Request",description:"Handling request",source:"@site/docs/guide/request.md",sourceDirName:"guide",slug:"/request",permalink:"/docs/request",draft:!1,editUrl:"https://github.com/labstack/echox/blob/master/website/docs/guide/request.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Handling request",slug:"/request",sidebar_position:9},sidebar:"docsSidebar",previous:{title:"IP Address",permalink:"/docs/ip-address"},next:{title:"Response",permalink:"/docs/response"}},s={},u=[{value:"Retrieve Data",id:"retrieve-data",level:2},{value:"Form Data",id:"form-data",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Binding Data",id:"binding-data",level:3},{value:"Validate Data",id:"validate-data",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"request"},"Request"),(0,n.kt)("h2",{id:"retrieve-data"},"Retrieve Data"),(0,n.kt)("h3",{id:"form-data"},"Form Data"),(0,n.kt)("p",null,"Form data can be retrieved by name using ",(0,n.kt)("inlineCode",{parentName:"p"},"Context#FormValue(name string)"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// Handler\nfunc(c echo.Context) error {\n  name := c.FormValue("name")\n  return c.String(http.StatusOK, name)\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X POST http://localhost:1323 -d 'name=Joe'\n")),(0,n.kt)("p",null,"To bind a custom data type, you can implement ",(0,n.kt)("inlineCode",{parentName:"p"},"Echo#BindUnmarshaler")," interface."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type Timestamp time.Time\n\nfunc (t *Timestamp) UnmarshalParam(src string) error {\n  ts, err := time.Parse(time.RFC3339, src)\n  *t = Timestamp(ts)\n  return err\n}\n")),(0,n.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,n.kt)("p",null,"Query parameters can be retrieved by name using ",(0,n.kt)("inlineCode",{parentName:"p"},"Context#QueryParam(name string)"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// Handler\nfunc(c echo.Context) error {\n  name := c.QueryParam("name")\n  return c.String(http.StatusOK, name)\n})\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"curl \\\n  -X GET \\\n  http://localhost:1323\\?name\\=Joe\n")),(0,n.kt)("p",null,"Similar to form data, custom data type can be bind using ",(0,n.kt)("inlineCode",{parentName:"p"},"Context#QueryParam(name string)"),"."),(0,n.kt)("h3",{id:"path-parameters"},"Path Parameters"),(0,n.kt)("p",null,"Registered path parameters can be retrieved by name using ",(0,n.kt)("inlineCode",{parentName:"p"},"Context#Param(name string) string"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'e.GET("/users/:name", func(c echo.Context) error {\n  name := c.Param("name")\n  return c.String(http.StatusOK, name)\n})\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"curl http://localhost:1323/users/Joe\n")),(0,n.kt)("h3",{id:"binding-data"},"Binding Data"),(0,n.kt)("p",null,"Also binding of request data to native Go structs and variables is supported.\nSee ","[Binding Data]",'({{< ref "guide/binding.md">}})'),(0,n.kt)("h2",{id:"validate-data"},"Validate Data"),(0,n.kt)("p",null,"Echo doesn't have built-in data validation capabilities, however, you can register\na custom validator using ",(0,n.kt)("inlineCode",{parentName:"p"},"Echo#Validator")," and leverage third-party ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/avelino/awesome-go#validation"},"libraries"),"."),(0,n.kt)("p",null,"Example below uses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-playground/validator"},"https://github.com/go-playground/validator")," framework for validation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "net/http"\n\n  "github.com/go-playground/validator"\n  "github.com/labstack/echo/v4"\n  "github.com/labstack/echo/v4/middleware"\n)\n\ntype (\n  User struct {\n    Name  string `json:"name" validate:"required"`\n    Email string `json:"email" validate:"required,email"`\n  }\n\n  CustomValidator struct {\n    validator *validator.Validate\n  }\n)\n\nfunc (cv *CustomValidator) Validate(i interface{}) error {\n  if err := cv.validator.Struct(i); err != nil {\n    // Optionally, you could return the error to give each route more control over the status code\n    return echo.NewHTTPError(http.StatusBadRequest, err.Error())\n  }\n  return nil\n}\n\nfunc main() {\n  e := echo.New()\n  e.Validator = &CustomValidator{validator: validator.New()}\n  e.POST("/users", func(c echo.Context) (err error) {\n    u := new(User)\n    if err = c.Bind(u); err != nil {\n      return echo.NewHTTPError(http.StatusBadRequest, err.Error())\n    }\n    if err = c.Validate(u); err != nil {\n      return err\n    }\n    return c.JSON(http.StatusOK, u)\n  })\n  e.Logger.Fatal(e.Start(":1323"))\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST http://localhost:1323/users \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"name":"Joe","email":"joe@invalid-domain"}\'\n{"message":"Key: \'User.Email\' Error:Field validation for \'Email\' failed on the \'email\' tag"}\n')))}p.isMDXComponent=!0}}]);