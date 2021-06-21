(this["webpackJsonpreact-dapp"]=this["webpackJsonpreact-dapp"]||[]).push([[0],{139:function(e,t,n){},253:function(e,t){},261:function(e,t){},265:function(e,t,n){"use strict";n.r(t);var r,c=n(8),s=n.n(c),a=n(56),o=n.n(a),i=n(280),j=n(282),l=n(279),d=(n(139),n(26)),b=n(281),p=n(283),u=n(33),h=n(13),O=n(6);var x,v=function(e){var t=e.match.params.id,n=Object(b.a)(r||(r=Object(d.a)(["\n    query getProposal($id: ID) {\n      proposal(id: $id) {\n        id\n        state\n        title\n        shortDescription\n      }\n    }"])));function c(){console.log(e),console.log(t);var r=Object(p.a)(n,{variables:{id:t}}),c=r.loading,s=r.error,a=r.data;return c?Object(O.jsx)("p",{children:"Loading..."}):s?(console.log(s),Object(O.jsx)("p",{children:"Error :("})):(console.log(a),Object(O.jsxs)("div",{children:[Object(O.jsxs)("b",{children:["ID: ",a.proposal.id,", State: ",a.proposal.state]}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:a.proposal.title}),Object(O.jsx)("br",{}),Object(O.jsx)("i",{children:a.proposal.shortDescription}),Object(O.jsx)("br",{})]}))}return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{children:["Aave Governance Proposal ",t," "]}),Object(O.jsx)(c,{})]})};var g,m=function(){var e=Object(b.a)(x||(x=Object(d.a)(["\n    query getAllProposals {\n      proposals(first: 10) {\n        id\n        state\n        title\n        shortDescription\n      }\n    }"])));function t(){var t=Object(p.a)(e),n=t.loading,r=t.error,c=t.data;return n?Object(O.jsx)("p",{children:"Loading..."}):r?(console.log(r),Object(O.jsx)("p",{children:"Error :("})):Object(O.jsxs)("ul",{children:[" ",c.proposals.map((function(e,t){return Object(O.jsxs)("li",{children:[" ",Object(O.jsxs)(u.b,{to:"/aave/"+e.id,target:"_blank",children:[" ",e.id,", ",e.state,", ",e.title,", ",e.shortDescription," "]})," "]},e.id)}))]})}return Object(O.jsx)(u.a,{children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Aave Governance Proposals"}),Object(O.jsx)(t,{})]})}),Object(O.jsx)(h.a,{path:"/aave/:id",component:v})]})})},f=n(64),w=n.n(f);var k,y=function(e){var t=e.match.params.id,n=Object(b.a)(g||(g=Object(d.a)(["\n    query getProposal($id: ID) {\n      proposal(id: $id) {\n        id\n        status\n        description\n      }\n    }"])));function r(){console.log(e),console.log(t);var r=Object(p.a)(n,{variables:{id:t}}),c=r.loading,s=r.error,a=r.data;return c?Object(O.jsx)("p",{children:"Loading..."}):s?(console.log(s),Object(O.jsx)("p",{children:"Error :("})):(console.log(a),Object(O.jsxs)("div",{children:[Object(O.jsxs)("b",{children:["ID: ",a.proposal.id,", State: ",a.proposal.status]}),Object(O.jsx)("br",{}),Object(O.jsx)(w.a,{children:a.proposal.description}),Object(O.jsx)("br",{})]}))}return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{children:["Compound Governance Proposal ",t," "]}),Object(O.jsx)(r,{})]})};var P,B=function(){var e=Object(b.a)(k||(k=Object(d.a)(["\n    query getAllProposals {\n      proposals(where: {status: ACTIVE}) {\n        id\n        status\n        description\n      }\n    }"])));function t(){var t=Object(p.a)(e),n=t.loading,r=t.error,c=t.data;return n?Object(O.jsx)("p",{children:"Loading..."}):r?Object(O.jsx)("p",{children:"Error :("}):Object(O.jsxs)("ul",{children:[" ",c.proposals.map((function(e,t){return Object(O.jsxs)("li",{children:[" ",Object(O.jsxs)(u.b,{to:"/compound/"+e.id,target:"_blank",children:[" ",e.id,", ",e.status,", ",e.description.substring(1,20),"... "]})," "]},e.id)}))]})}return Object(O.jsx)(u.a,{children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Compound Governance Proposals"}),Object(O.jsx)(t,{})]})}),Object(O.jsx)(h.a,{path:"/compound/:id",component:y})]})})};var C,E=function(e){var t=e.match.params.id,n=Object(b.a)(P||(P=Object(d.a)(["\n    query getProposal($id: ID) {\n      proposal(id: $id) {\n        id\n        status\n        endBlock\n        description\n      }\n    }"])));function r(){console.log(e),console.log(t);var r=Object(p.a)(n,{variables:{id:t}}),c=r.loading,s=r.error,a=r.data;return c?Object(O.jsx)("p",{children:"Loading..."}):s?(console.log(s),Object(O.jsx)("p",{children:"Error :("})):(console.log(a),Object(O.jsxs)("div",{children:[Object(O.jsxs)("b",{children:["ID: ",a.proposal.id,", State: ",a.proposal.status]}),Object(O.jsx)("br",{}),"Voting ends on block: ",a.proposal.endBlock,".",Object(O.jsx)(w.a,{children:a.proposal.description}),Object(O.jsx)("br",{})]}))}return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{children:["Uniswap Governance Proposal ",t," "]}),Object(O.jsx)(r,{})]})};var I=function(){var e=Object(b.a)(C||(C=Object(d.a)(["\n    query getAllProposals {\n      proposals(first: 20) {\n        id\n        status\n        endBlock\n        description\n      }\n    }"])));function t(){var t=Object(p.a)(e),n=t.loading,r=t.error,c=t.data;return n?Object(O.jsx)("p",{children:"Loading..."}):r?(console.log(r),Object(O.jsx)("p",{children:"Error :("})):Object(O.jsxs)("ul",{children:[" ",c.proposals.map((function(e,t){return Object(O.jsxs)("li",{children:[" ",Object(O.jsxs)(u.b,{to:"/uniswap/"+e.id,target:"_blank",children:[" ",e.id,", ",e.status,", ",e.endBlock,", ",e.description.substring(1,20),"... "]})," "]},e.id)}))]})}return Object(O.jsx)(u.a,{children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Uniswap Governance Proposals"}),Object(O.jsx)(t,{})]})}),Object(O.jsx)(h.a,{path:"/uniswap/:id",component:E})]})})},A=n(2),D=n.n(A),L=n(82),q=n(85),G=n(132);var S=function(){var e=Object(c.useState)(),t=Object(q.a)(e,2),n=t[0],r=t[1];function s(){return(s=Object(L.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=12;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:t=e.sent,r(t[0]),console.log(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}window.ethereum.on("accountsChanged",(function(e){r(e[0])}));var a=new G.a.providers.Web3Provider(window.ethereum),o=Object(c.useState)(),i=Object(q.a)(o,2),j=i[0],l=i[1];function d(){return(d=Object(L.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,a.getBlockNumber();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("button",{onClick:function(){return s.apply(this,arguments)},children:"Connect Wallet"}),Object(O.jsx)("br",{}),"Connected account: ",n,Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:function(){return d.apply(this,arguments)},children:"Current Block Number"}),Object(O.jsx)("br",{}),"Current Block Number: ",j,Object(O.jsx)("br",{})]})})},$=new i.a({uri:"https://api.thegraph.com/subgraphs/name/aave/governance-v2",cache:new j.a}),N=new i.a({uri:"https://api.thegraph.com/subgraphs/name/protofire/compound-governance",cache:new j.a}),_=new i.a({uri:"https://api.thegraph.com/subgraphs/name/messari/uniswap-governance",cache:new j.a});o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("wallet")),o.a.render(Object(O.jsx)(l.a,{client:$,children:Object(O.jsx)(m,{})}),document.getElementById("AaveList")),o.a.render(Object(O.jsx)(l.a,{client:N,children:Object(O.jsx)(B,{})}),document.getElementById("CompoundList")),o.a.render(Object(O.jsx)(l.a,{client:_,children:Object(O.jsx)(I,{})}),document.getElementById("UniswapList"))}},[[265,1,2]]]);
//# sourceMappingURL=main.01b696ce.chunk.js.map