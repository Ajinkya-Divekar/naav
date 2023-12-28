// Dashboard.js
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  // USING API (BACKEND NODE)
  // const [questionList, setQuestionList] = useState([]);
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("localhost:3000/api/questions/");
  //       const data = await res.json();
  //       setQuestionList(data);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  //STATIC DATA FOR DEMO
  const questionList = [
    {
      type: "aptitude",
      subtype: "Problems on Trains",
      text: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: [
        {
          label: "A",
          text: "120 metres",
          isCorrect: false,
        },
        {
          id: 26,
          label: "B",
          text: "180 metres",
          isCorrect: false,
        },
        {
          id: 27,
          label: "C",
          text: "324 metres",
          isCorrect: false,
        },
        {
          id: 28,
          label: "D",
          text: "150 metres",
          isCorrect: true,
        },
      ],
      __v: 0,
    },
    {
      type: "aptitude",
      subtype: "Problems on Trains",
      text: "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          id: 25,
          label: "A",
          text: "120 m",
          isCorrect: false,
        },
        {
          id: 26,
          label: "B",
          text: "240 m",
          isCorrect: true,
        },
        {
          id: 27,
          label: "C",
          text: "300 m",
          isCorrect: false,
        },
        {
          id: 28,
          label: "D",
          text: "None of these",
          isCorrect: false,
        },
      ],
      __v: 0,
    },
    {
      id: 3,
      type: "aptitude",
      subtype: "Problems on Trains",
      text: "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          id: 25,
          label: "A",
          text: "120 m",
          isCorrect: false,
        },
        {
          id: 26,
          label: "B",
          text: "240 m",
          isCorrect: true,
        },
        {
          id: 27,
          label: "C",
          text: "300 m",
          isCorrect: false,
        },
        {
          id: 28,
          label: "D",
          text: "None of these",
          isCorrect: false,
        },
      ],
      __v: 0,
    },
    {
      type: "aptitude",
      subtype: "Problems on Trains",
      text: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: [
        {
          label: "A",
          text: "120 metres",
          isCorrect: false,
        },
        {
          label: "B",
          text: "180 metres",
          isCorrect: false,
        },
        {
          label: "C",
          text: "324 metres",
          isCorrect: false,
        },
        {
          label: "D",
          text: "150 metres",
          isCorrect: true,
        },
      ],
      __v: 0,
    },
    {
      type: "aptitude",
      subtype: "Problems on Trains",
      text: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: [
        {
          label: "A",
          text: "120 metres",
          isCorrect: false,
        },
        {
          label: "B",
          text: "180 metres",
          isCorrect: false,
        },
        {
          label: "C",
          text: "324 metres",
          isCorrect: false,
        },
        {
          label: "D",
          text: "150 metres",
          isCorrect: true,
        },
      ],
      __v: 0,
    },
    {
      type: "aptitude",
      subtype: "Problems on Trains",
      text: "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          label: "A",
          text: "120 m",
          isCorrect: false,
        },
        {
          label: "B",
          text: "240 m",
          isCorrect: true,
        },
        {
          label: "C",
          text: "300 m",
          isCorrect: false,
        },
        {
          label: "D",
          text: "None of these",
          isCorrect: false,
        },
      ],
      __v: 0,
    },
  ];

  const correctOptions = questionList
    .map((question) => question.options.find((option) => option.isCorrect))
    .map((correctOption) => correctOption.label);

  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const nextQuestion = () => {
    if (questionIdx < questionList.length - 1) {
      setQuestionIdx(questionIdx + 1);
    }
  };

  const prevQuestion = () => {
    if (questionIdx > 0) {
      setQuestionIdx(questionIdx - 1);
    }
  };

  const selectOption = (option) => {
    // Update selectedOptions list
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIdx] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  const displayBro = () => {
    let res = 0;
    for (let i = 0; i < correctOptions.length; i++) {
      if (correctOptions[i] === selectedOptions[i]) {
        res += 1;
      }
    }
    alert(selectedOptions + "\n" + correctOptions);
    alert(res);
  };

  return (
    <div className="dashboard">
      <div>
        <ul>
          <li key={questionList[questionIdx].id}>
            {questionList[questionIdx].text}
          </li>
        </ul>
        {questionList[questionIdx].options.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              id={option.label}
              name={`question-${questionList[questionIdx].label}`}
              checked={selectedOptions[questionIdx] === option.label}
              onChange={() => selectOption(option.label)}
            />
            <label htmlFor={option.id}>{option.text}</label>
          </div>
        ))}
        <div>
          <button onClick={prevQuestion} disabled={questionIdx === 0}>
            Previous
          </button>
          <button
            onClick={nextQuestion}
            disabled={questionIdx === questionList.length - 1}
          >
            Next
          </button>
          <button onClick={displayBro}>Submit Test</button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
