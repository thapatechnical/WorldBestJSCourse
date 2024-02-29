<!--* =================================== 
<!--*  Event Propagation: 
<!--* ===================================

<!--* Event propagation refers to the process of how events propagate or travel through the DOM (Document Object Model) hierarchy. 
 <!--? In JavaScript, there are two phases of event  propagation: capturing phase and bubbling phase. Understanding event propagation is crucial for managing and handling events in complex web applications. 
 
<!--* =================================== 
<!--*  Phases of Event Propagation: 
<!--* ===================================
<!-- 
? Capturing Phase:
The event starts from the root of the DOM and goes down to the target element.
Handlers registered for the capturing phase are executed.

? Target Phase:
The event reaches the target element.
The handler registered for the target phase is executed.

? Bubbling Phase:
The event starts from the target element and bubbles up to the root of the DOM.
Handlers registered for the bubbling phase are executed. -->

<!--?  event.stopPropagation() -->
<!-- The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Propagation Example</title>
    <link rel="stylesheet" href="style.css" />
    <style>
      body {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      section {
        width: 72rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      div {
        padding: 6rem 10rem;
        border: 3px solid #1f2544;
        cursor: pointer;
        font-size: 2rem;
        text-transform: uppercase;
        background-color: #c7c8cc;
        color: #1f2544;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
          rgb(51, 51, 51) 0px 0px 0px 3px;
      }

      #inner:hover {
        background-color: #d6417a;
        color: #000;
        z-index: 3;
        position: relative;
      }

      #middle:hover {
        background-color: #9f70fd;
        color: #000;
        z-index: 2;
        position: relative;
      }

      #outer:hover {
        background-color: #9bcf53;
        color: #000;
        position: relative;
        z-index: 1;
      }
    </style>
  </head>
  <body>
    <section>
      <div id="outer">
        Outer
        <div id="middle">
          Middle
          <div id="inner">Inner</div>
        </div>
      </div>
    </section>
    <script>
      const callOuter = (event) => {
        console.table([
          {
            Description: "I am the outer one",
            Target: event.target,
            CurrentTarget: event.currentTarget,
          },
        ]);
      };

      const callMiddle = () => {
        console.table([
          {
            Description: "I am the Middle one",
            Target: event.target,
            CurrentTarget: event.currentTarget,
          },
        ]);
      };

      const callInner = (event) => {
        console.table([
          {
            Description: "I am the Inner one",
            Target: event.target,
            CurrentTarget: event.currentTarget,
          },
        ]);
        // event.stopPropagation();
      };

      //   By default is the bubbling phase
      // document.getElementById("outer").addEventListener("click", callOuter);
      // document.getElementById("middle").addEventListener("click", callMiddle);
      // document.getElementById("inner").addEventListener("click", callInner);

      // To achieve event capturing, you can use the third parameter of the addEventListener method, which specifies whether the event should be captured during the capturing phase. Setting it to true will activate the capturing phase.
      document
        .getElementById("outer")
        .addEventListener("click", callOuter, true);
      document
        .getElementById("inner")
        .addEventListener("click", callInner, true);
      document
        .getElementById("middle")
        .addEventListener("click", callMiddle, true);
    </script>
  </body>
</html>
