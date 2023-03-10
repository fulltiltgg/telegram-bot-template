import chalk from 'chalk';

import { config } from "@/config.ts";

export class Logger {
	level: string;

	constructor(level: string) {
		this.level = level;
	}

	log(...args: any[]) {
		if (['silent'].includes(this.level)) return;

		console.log(...args);
	}

	info(...args: any[]) {
		if (['silent'].includes(this.level)) return;

		const date = new Date();

		console.log(
			chalk.gray(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`),
			chalk.blue(`[INFO]`),
			...args
		);
	}

	warn(...args: any[]) {
		if (['silent, info'].includes(this.level)) return;

		const date = new Date();

		console.log(
			chalk.gray(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`),
			chalk.yellow('[WARN]'),
			...args
		);	
	}

	error(...args: any[]) {
		if (['silent, info'].includes(this.level)) return;

		const date = new Date();

		console.log(
			chalk.gray(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`),
			chalk.red('[ERROR]'),
			...args
		);	
	}
}

export const logger = new Logger(config.LOG_LEVEL);