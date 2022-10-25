import React, { Component } from 'react';
import Image from 'next/future/image';
import logo from '../public/logo.svg';
import styles from './Footer.module.css';


interface IProperties {

}

interface IState {
    year: number
}

export default class Footer extends Component<IProperties, IState> {
    constructor(properties: IProperties) {
        super(properties);
        this.state = {
            year: 0
        }
    }

    componentDidMount() {
        var now = new Date();
        this.setState({ year: now.getFullYear() });
    }

    render() {
        const { year } = this.state;
        return (
            <div className="md:flex w-full h-auto md:h-[12rem] rounded-xl justify-center items-center m-1 p-8 md:p-0 bg-zinc-200 dark:bg-zinc-800 bg-opacity-90">
                <div className="md:pl-6 text-center">
                    <a href="https://linkedin.com/in/confessore">
                        <Image className="w-24 h-24 md:w-28 md:h-auto mx-auto md:rounded-none rounded-full" src="https://media-exp1.licdn.com/dms/image/C4E03AQGtqn8CX5_4lQ/profile-displayphoto-shrink_800_800/0/1661729575909?e=1667433600&v=beta&t=MtqXvdTy_4n-_XQfbIEgC_zfrhEsSg2DeGDCRpC11Lo" alt="" width={384} height={512} />
                    </a>
                </div>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <div>
                        <p className="text-lg font-medium">
                            copyright © {year} | all rights reserved
                        </p>
                    </div>
                    <div className="font-medium">
                        <div className="flex justify-center md:justify-start items-center text-indigo-500 dark:text-indigo-400">
                            <a href="https://nextjs.org">made with ☕️</a>
                            &nbsp;
                            <a href="https://github.com/confessore">by steven confessore</a>
                        </div>
                        <div className="text-zinc-700 dark:text-zinc-500">
                            <a href="https://balasolu.com">balasolu | dreams realized</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
