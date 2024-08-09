/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly SENTRY_AUTH_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
