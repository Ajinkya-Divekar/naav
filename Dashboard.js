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

   const correctOptions = questionList
    .map((question) => question.options.find((option) => option.isCorrect))
    .map((correctOption) => correctOption.label);

  const [questionIdx, setQuestionIdx] = useState(0); //used to navigate between questions
  const [selectedOptions, setSelectedOptions] = useState([]); // a list of all user selected options (A,B,C,D)
  const [selectedGridButtons, setSelectedGridButtons] = useState({}); //Used to manipulate the Question Grid attibutes

  // Move to next question
  const nextQuestion = () => {
    if (questionIdx < questionList.length - 1) {
      setQuestionIdx(questionIdx + 1);
    }
  };

  //Move to previous question
  const prevQuestion = () => {
    if (questionIdx > 0) {
      setQuestionIdx(questionIdx - 1);
    }
  };

  // select an option for a particular question
  const selectOption = (option) => {
    // Update selectedOptions list
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIdx] = option;
    setSelectedOptions(updatedSelectedOptions);

    // Update Grid
    setSelectedGridButtons((prevState) => ({
      ...prevState,
      [questionIdx]: "selected",
    }));
  };

  // Navigate using Grid buttons
  const changeQuestion = (index) => {
    setQuestionIdx(index - 1);
  };

  //calculate result, store wrongly selected subtypes
  const displayBro = () => {
    let res = 0;
    const wrongTypesDictionary = {};

    for (let i = 0; i < correctOptions.length; i++) {
      if (correctOptions[i] !== selectedOptions[i]) {
        const wrongSubtype = questionList[i].subtype;

        // Check if the subtype is already in the dictionary
        if (wrongTypesDictionary.hasOwnProperty(wrongSubtype)) {
          // If yes, increment the count
          wrongTypesDictionary[wrongSubtype] += 1;
        } else {
          // If no, initialize the count to 1
          wrongTypesDictionary[wrongSubtype] = 1;
        }
      } else {
        res += 1; //increase marks by 1 if correct
      }
    }

    // display stuff for debugging
    alert(
      `Selected Options: ${selectedOptions}\nCorrect Options: ${correctOptions}`
    );
    alert("result: " + res);
    alert(`Wrong Types Dictionary: ${JSON.stringify(wrongTypesDictionary)}`);
  };

  // mark question as review in grid
  const reviewMark = () => {
    setSelectedGridButtons((prevState) => ({
      ...prevState,
      [questionIdx]: "review",
    }));
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
          <button className="submit-button" onClick={displayBro}>
            Submit Test
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
