import React, { Component, createRef } from "react";

import Stack from "./components/Stack.jsx";
import ResultBox from "./components/ResultBox.jsx";

import {
  analyzer,
  minifyStr,
  isLeftBrackets,
  isRightBrackets
} from "./utils/string-utils.js";
import { delay } from "./utils/decorators.js";

class App extends Component {
  state = {
    defStrArr: null,
    tmpStr: null,
    result: null,
    showResult: false
  };

  inputRef = createRef();

  handleSubmit = e => {
    e.preventDefault();

    const { value } = this.inputRef.current;
    let defStrArr = [...minifyStr(value)].reverse().map(el => ({
      value: el,
      status: "pending"
    }));

    this.setState(
      {
        defStrArr,
        tmpStr: [],
        result: analyzer(minifyStr(value)),
        showResult: false
      },
      async () => await this.anim.bind(this)()
    );
  };

  anim = async () => {
    const { defStrArr, result } = this.state;
    const delayTime = 1000;
    const arr = [...defStrArr].reverse();

    const step = (elem, status) => {
      if (status === "resolve" && isLeftBrackets(elem.value)) {
        return async () => {
          await this.setState(prevState => ({
            defStrArr: prevState.defStrArr.filter(el => el !== elem),
            tmpStr: prevState.tmpStr.concat({ ...elem, status })
          }));
        };
      } else if (status === "resolve" && isRightBrackets(elem.value)) {
        return async () => {
          await this.setState(prevState => ({
            defStrArr: prevState.defStrArr.filter(el => el !== elem),
            tmpStr: prevState.tmpStr.slice(0, prevState.tmpStr.length - 1)
          }));
        };
      } else if (status === "resolve") {
        return async () => {
          await this.setState(prevState => ({
            defStrArr: prevState.defStrArr.filter(el => el !== elem)
          }));
        };
      } else if (status === "reject") {
        console.log(status, elem.value);
        return async () => {
          await this.setState(prevState => ({
            defStrArr: prevState.defStrArr
              .filter(el => el !== elem)
              .concat({ ...elem, status })
          }));
        };
      }
    };

    const { status, error } = result;

    let steps = arr
      .map((el, index) => {
        if (!status && index === error.index - 1) return step(el, "reject");

        return step(el, "resolve");
      })
      .slice(0, error ? error.index : arr.length)
      .map(el => delay(el, delayTime));

    for (let fn of steps) {
      await fn();
    }

    await this.setState({
      showResult: true
    });
  };

  handleReset = () => {
    this.setState({
      defStrArr: null,
      tmpStr: null,
      result: null,
      showResult: false
    });
  };

  render() {
    const { defStrArr, tmpStr, result, showResult } = this.state;
    return (
      <main>
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <legend className="field is-grouped is-grouped-centered">
            Enter your data:{" "}
          </legend>
          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Input string..."
                ref={this.inputRef}
                //autoFocus
              />
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <button className="button is-danger" type="reset">
                Reset
              </button>
            </div>

            <div className="control">
              <button className="button is-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        <section id="stack-section">
          <Stack data={defStrArr} name="def" type="left" />
          <Stack data={tmpStr} name="tmp" type="left" />
        </section>
        {showResult && <ResultBox {...result} />}
      </main>
    );
  }
}

export default App;
