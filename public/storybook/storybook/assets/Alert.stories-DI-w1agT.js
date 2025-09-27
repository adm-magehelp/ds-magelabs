import{j as e}from"./jsx-runtime-CQK1N-t5.js";import{c as l,a as u}from"./utils-DEz_iieQ.js";import"./iframe-DsjLW7Yf.js";import"./preload-helper-D9Z9MdNV.js";const m=u("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function s({className:r,variant:t,...d}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:l(m({variant:t}),r),...d})}function i({className:r,...t}){return e.jsx("div",{"data-slot":"alert-title",className:l("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",r),...t})}function c({className:r,...t}){return e.jsx("div",{"data-slot":"alert-description",className:l("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",r),...t})}s.__docgenInfo={description:"",methods:[],displayName:"Alert"};i.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};c.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const v={title:"Components/Alert",component:s,tags:["autodocs"]},a={render:()=>e.jsxs(s,{children:[e.jsx(i,{children:"Aviso"}),e.jsx(c,{children:"Este é um alerta padrão para chamar atenção do usuário."})]})},o={render:()=>e.jsxs(s,{className:"border-green-500 text-green-700",children:[e.jsx(i,{children:"Sucesso"}),e.jsx(c,{children:"A operação foi concluída com sucesso!"})]})},n={render:()=>e.jsxs(s,{variant:"destructive",children:[e.jsx(i,{children:"Erro"}),e.jsx(c,{children:"Algo deu errado, tente novamente."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
      <AlertTitle>Aviso</AlertTitle>
      <AlertDescription>
        Este é um alerta padrão para chamar atenção do usuário.
      </AlertDescription>
    </Alert>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="border-green-500 text-green-700">
      <AlertTitle>Sucesso</AlertTitle>
      <AlertDescription>
        A operação foi concluída com sucesso!
      </AlertDescription>
    </Alert>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive">
      <AlertTitle>Erro</AlertTitle>
      <AlertDescription>
        Algo deu errado, tente novamente.
      </AlertDescription>
    </Alert>
}`,...n.parameters?.docs?.source}}};const f=["Default","Success","Error"];export{a as Default,n as Error,o as Success,f as __namedExportsOrder,v as default};
