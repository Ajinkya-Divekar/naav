// Dashboard.js
import React, { useEffect, useState } from "react";

const Dashboard = () => {
 // USING API (BACKEND NODE)
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:3001/api/questions/getQuestions"
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        if (data === undefined) {
          alert("data is undefined");
        }
        setQuestionList(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);


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

   const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedGridButtons, setSelectedGridButtons] = useState({});
  const [questionList, setQuestionList] = useState(
    allQuestions.filter((question) => question.type === "aptitude")
  );

  const correctOptions = questionList
    .map((question) => question.options.find((option) => option.isCorrect))
    .map((correctOption) => correctOption.label);

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

    setSelectedGridButtons((prevState) => ({
      ...prevState,
      [questionIdx]: "selected",
    }));
  };

  const changeQuestion = (index) => {
    setQuestionIdx(index - 1);
  };

  const reviewMark = () => {
    setSelectedGridButtons((prevState) => ({
      ...prevState,
      [questionIdx]: "review",
    }));
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

  const nextSection = () => {
    const moveon = window.confirm(
      "Are you sure you want to go to the next section?"
    );
    if (moveon) {
      displayBro();
      if (questionList[questionIdx].type === "aptitude") {
        setQuestionIdx(0);
        setSelectedGridButtons({});
        setSelectedOptions([]);
        setQuestionList(
          allQuestions.filter((question) => question.type === "logical")
        );
      } else {
        alert("Test Submitted");
      }
    }
  };
 
  return (
    <div className="container">
      <div className="quiz-container">
        <h3>Question Number: {questionIdx + 1}</h3>
        <div className="quiz-questions">
          <h2 className="question-text">{questionList[questionIdx]?.text}</h2>
          <ul className="options-list">
            {questionList[questionIdx]?.options.map((option) => (
              <li
                key={option.id}
                className="option-item"
                style={{ marginTop: "30px" }}
              >
                <input
                  type="radio"
                  id={option.label}
                  name={`question-${questionList[questionIdx]?.label}`}
                  checked={selectedOptions[questionIdx] === option.label}
                  onChange={() => selectOption(option.label)}
                />
                <label htmlFor={option.id} className="option-label">
                  {option.text}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="navigation-buttons">
          <button
            className="previous-button"
            onClick={prevQuestion}
            disabled={questionIdx === 0}
          >
            Previous
          </button>
          <button className="review-button" onClick={reviewMark}>
            Review Later
          </button>
          <button
            className="next-button"
            onClick={nextQuestion}
            disabled={questionIdx === questionList.length - 1}
          >
            Next
          </button>
        </div>
      </div>

      <div className="right-container">
        <h2>Quick Navigation:</h2>
        <div className="navigation-grid">
          {questionList.map((question, index) => (
            <button
              key={index}
              className={selectedGridButtons[index] || ""}
              onClick={() => changeQuestion(index + 1)}
            >
              Q{index + 1}
            </button>
          ))}
        </div>
        <div className="submit-section">
          <button className="submit-button" onClick={nextSection}>
            {questionList[questionIdx]?.type === "aptitude"
              ? "Go to Logical"
              : questionList[questionIdx]?.type === "logical"
              ? "Go to Technical"
              : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
