import { Fragment, useState } from "react";
import { buildFeedbackPath,extractFeedback } from "../api/feedback/index";

const FeedbackPage = (props) => {
  const [feedbackData, setFeedbackData] = useState();
  function loadFeedBackHandler(id){
    fetch(`/api/feedback/${id}`).then(response => response.json()).then(data =>{
      setFeedbackData(data.feedback);
    }); // /api/some-feedback-id
  }
  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
       <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}<button onClick={loadFeedBackHandler.bind(null, item.id)}>Show Details</button></li>
      ))}
    </ul>
    </Fragment>
   );
}
export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return{
    props: {
      feedbackItems: data,
    },
  }
}
export default FeedbackPage;