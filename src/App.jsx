import React, { Component, createRef } from "react";

import Stack from "./components/Stack";
import ResultBox from "./components/ResultBox";

import analyzer from "./utils/analyzer";
import { delay, minifyStr, getRandomArbitrary } from "./utils/func-utils";
import { isLeftBrackets, isRightBrackets } from "./utils/predicates";
import { state } from "./utils/consts";

const { resolve, reject, pending } = state;

const initialState = {
	defStrArr: null,
	tmpStr: null,
	result: null,
	showResult: false,
};

class App extends Component {
	state = { ...initialState };

	inputRef = createRef();

	handleSubmit = e => {
		e.preventDefault();

		const { value } = this.inputRef.current;
		let defStrArr = [...minifyStr(value)].reverse().map(el => ({
			value: el,
			status: pending,
			key: getRandomArbitrary(),
		}));

		this.setState(
			{
				defStrArr,
				tmpStr: [],
				result: analyzer(minifyStr(value)),
				showResult: false,
			},
			() => this.anim.bind(this)(),
		);
	};

	step = (elem, status) => {
		if (status === resolve && isLeftBrackets(elem.value)) {
			return async () => {
				await this.setState(prevState => ({
					defStrArr: prevState.defStrArr.filter(el => el.key !== elem.key),
					tmpStr: prevState.tmpStr.concat({ ...elem, status }),
				}));
			};
		} else if (status === resolve && isRightBrackets(elem.value)) {
			return async () => {
				await this.setState(prevState => ({
					defStrArr: prevState.defStrArr.filter(el => el.key !== elem.key),
					tmpStr: prevState.tmpStr.slice(0, prevState.tmpStr.length - 1),
				}));
			};
		} else if (status === resolve) {
			return async () => {
				await this.setState(prevState => ({
					defStrArr: prevState.defStrArr.filter(el => el.key !== elem.key),
				}));
			};
		} else if (status === reject) {
			return async () => {
				await this.setState(prevState => ({
					defStrArr: prevState.defStrArr
						.filter(el => el.key !== elem.key)
						.concat({ ...elem, status }),
				}));
			};
		}
	};

	anim = async () => {
		const { defStrArr, result } = this.state;
		const delayTime = 1000;
		const arr = [...defStrArr].reverse();
		const { status, error } = result;

		const steps = arr
			.map((el, index) => {
				if (!status && index === error.index - 1) return this.step(el, reject);

				return this.step(el, resolve);
			})
			.slice(0, error ? error.index : arr.length)
			.map(el => delay(el, delayTime));

		for (let fn of steps) {
			await fn();
		}

		this.setState({
			showResult: true,
		});
	};

	handleReset = () => this.setState({ ...initialState });

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
