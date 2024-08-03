// import _ from "lodash";

const Question = (props) => {
  const { data , index} = props;
  // if (_.isEmpty(data)) {
  //   return (0);
  //   console.log('dada', data)
  // }

  return (
    <>
      <div className="question"> Question {index +1}: {data.questionDescription} ?</div>
      <div className="answer">
        <div className="option">A.asdasda</div>
        <div className="option">B.asdas</div>
        <div className="option">C.sdasda</div>
      </div>
    </>
  );
};

export default Question;
