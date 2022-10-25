import { Component } from "react"

interface IProps {

}

interface IState {
    key: string
}

export default class FTest extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            key: ''
        }
    }

    render() {
        const { key } = this.state;
        return (<div>{key}</div>)
    }
}