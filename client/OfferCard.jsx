import React, { useState, useEffect } from "react";
function OfferCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/offer-card", { method: "post" })
      .then((response) => response.json())
      .then((res) => {
        //Move add and removal of script to custom hook
        var extractscript = /<script[\s\S]*?>[\s\S]*?<\/script>/gi.exec(
          res.offerData
        );
        var x = res.offerData.replace(extractscript[0], "");
        setData(x);
        var newStr = extractscript[0].replace(/(<([^>]+)>)/gi, "");
        var elem = document.getElementById("offerScript");
        //Remove the tag if it already there
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
        //append script tag. We can also add script source also instead of content.
        if (newStr) {
          var newScript = document.createElement("script");
          newScript.async = true;
          newScript.setAttribute("id", "offerScript");
          var inlineScript = document.createTextNode(newStr);
          newScript.appendChild(inlineScript);
          document.body.appendChild(newScript);
          //garbage collection
          return () => {
            document.body.removeChild(newScript);
          };
        }
      });
  }, []);

  //Use this click handler based on need
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   alert(e.target.text);
  // };

  return (
    <div
      //onClick={handleClick}
      dangerouslySetInnerHTML={{
        __html: data ? data : "<p1>Loading</p>",
      }}
    />
  );
}

export default OfferCard;
