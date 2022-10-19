import React from "react";


export default function Synonyms(props) {
  if (props.synonyms) {
    return (
        <div className="Synonyms">
            
      <ul><em><strong>Synonyms:</strong>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
        </em>
     </ul>
      </div>
    );
  } else {
    return null;
  }
}