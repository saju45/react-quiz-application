import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // database related works
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}

// import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
// import { useEffect, useState } from "react";

// export default function useQuestions(videoId) {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     async function fetchQuestions() {
//       //database related works
//       const db = getDatabase();
//       const quizRef = ref(db, "quiz/" + videoId + "/questions");
//       const questionsQuary = query(quizRef, orderByKey());

//       try {
//         setLoading(true);
//         setError(false);
//         const snapshot = await get(questionsQuary);
//         setLoading(false);

//         if (snapshot.exists()) {
//           setQuestions((prevQuestions) => {
//             return [...prevQuestions, ...Object.values(snapshot.val())];
//           });
//         }
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//         setError(true);
//       }
//     }

//     fetchQuestions();
//   }, [videoId]);
//   return {
//     loading,
//     error,
//     questions,
//   };
// }
