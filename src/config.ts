interface Config {
    version: string;
    mode: string;
}

const version = process.env.VERSION
if (version === undefined) {
    throw new Error('VERSION env var is not defined')
}

const mode = process.env.MODE
if (mode === undefined) {
    throw new Error('MODE env var is not defined')
}

export const config: Config = { version, mode }
