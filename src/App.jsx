import "./app.css";
import React, { useState,useEffect,useMemo } from 'react';
import Trivia from "./Components/Trivia";
import Start from "./Components/Start";
import Timer from "./Components/Timer";
function App() {
  const data = [
    {
       id : 1,
       question : "jeene ke hai___din",
       answers : [
         {
            text : "4",
            correct : true,
         },
         {
            text : "8",
            correct : false,
         },
         {
            text : "14",
            correct : false,
         },
         {
            text : "12",
            correct : false,
         }
       ]
    },
    {
      id : 2,
      question : "Aaj kal ke nalle berozgaar apne aap ko kya samajhte hai?",
      answers : [
        {
           text : "Jhule-Jhopdi wale",
           correct : false,
        },
        {
           text : "kothi-bangle wale",
           correct : true,
        },
        {
           text : "bhoot-bangle wale",
           correct : false,
        },
        {
           text : "Beach-Facing-villa wale",
           correct : false,
        }
      ]
   },
   {
    id : 3,
    question : "Agar date pe concert mai jaana ho to kiske concert mai jaoge?",
    answers : [
      {
         text : "B'R'TS",
         correct : false,
      },
      {
         text : "Lord AP Dhillon",
         correct : true,
      },
      {
         text : "NO Direction",
         correct : false,
      },
      {
         text : "Travis Scott(lmao ded)",
         correct : false,
      }
    ]
 },
 {
  id : 4,
  question : "Corona ke badhte cases ko dekh aapka kya kehna hai?",
  answers : [
    {
       text : "i wish i could go out",
       correct : false,
    },
    {
       text : "go and get jabbed",
       correct : false,
    },
    {
       text : "Don't go outside",
       correct : false,
    },
    {
       text : "Mujhe kya mai to Billa hu",
       correct : true,
    }
  ]
},
{
  id : 5,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
{
  id : 6,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
{
  id : 7,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
{
  id : 8,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
{
  id : 9,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
{
  id : 10,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
{
  id : 11,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
{
  id : 12,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
{
  id : 13,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
{
  id : 14,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
{
  id : 15,
  question : "Which one of the following is Correct?",
  answers : [
   {
      text : "Yeh sahi hai",
      correct : true,
   },
   {
      text : "Galat",
      correct : false,
   },
   {
      text : "Nahi Bhai",
      correct : false,
   },
   {
      text : "A is correct",
      correct : false,
   }
  ]
},
  ];
  const moneyPyramid = useMemo( ()=>
    [
      {id : 1,amount:"$ 100"},
      {id : 2,amount:"$ 200"},
      {id : 3,amount:"$ 300"},
      {id : 4,amount:"$ 500"},
      {id : 5,amount:"$ 1000"},
      {id : 6,amount:"$ 2000"},
      {id : 7,amount:"$ 4000"},
      {id : 8,amount:"$ 8000"},
      {id : 9,amount:"$ 16000"},
      {id : 10,amount:"$ 32000"},
      {id : 11,amount:"$ 64000"},
      {id : 12,amount:"$ 125000"},
      {id : 13,amount:"$ 250000"},
      {id : 14,amount:"$ 500000"},
      {id : 15,amount:"$ 1000000"}
    ].reverse(),[]);



  const [questionNumber, setQuestionNumber] = useState(1);
  const [userName, setUserName] = useState(null);
  const [stop,setStop] = useState(false);
  const [earned,setEarned] = useState("$ 0");

  useEffect(()=>{
    questionNumber>1 && setEarned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount);
  },[questionNumber,moneyPyramid])
  
  return (
    <div className="app">
       {
       !userName ? 
        (
          <Start setUserName = {setUserName}/>
        )
          :(
          <>
            <div className="main">
         {stop?<h1 className = "endText">{userName} Earned : {earned}</h1> :( 
         <>
         <div className="top">
           <div className="timer">
             <Timer setStop = {setStop} questionNumber = {questionNumber} />
           </div>
         </div>
         <div className="bottom">
           <Trivia data = {data} questionNumber = {questionNumber} setStop = {setStop} setQuestionNumber = {setQuestionNumber}/>
         </div>
          </>
         )}
       </div> 
       <div className="pyramid">
         <ul className="moneyList">
         {moneyPyramid.map((m) => (
                <li className={
                        questionNumber===m.id ? "moneyListItem active" : "moneyListItem"
                    }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
         </ul>
       </div>
          </>
          )
       }
    </div>
  );
}

export default App;
