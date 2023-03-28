import React from "react"

const Overlay = function (proops)
{

   //

   const message = proops.message

   //
   return <div
      style=
      {
         {
            width: "100%",
            height: "100%",
            padding: "0",
            border: "0",
            margin: "0",

            display: "grid",
            gridTemplateColumns: "auto",
            placeContent: "center center",
            placeItems: "center center",

            position: "absolute",
            left: "0",
            top: "0",

            backgroundColor:"rgba(140, 140, 140, 0.9)"
         }
      }
   >

      <span
         style=
         {
            {
               fontSize: "1em",
               fontWeight: "bold"
            }
         }
      >
         {message}</span>

   </div>
}

export default Overlay