import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { OptimizelyProvider } from "@optimizely/react-sdk";
import * as Sentry from "@sentry/react";

import App from "./App";
import { AppFeatureToggler } from "./AppFeatureToggler";
import { reduxStore } from "./reduxToolkit/store";

Sentry.init({
	dsn: "https://ede8e1b9927bfa0f235bfc9563df5186@o4507249633460224.ingest.de.sentry.io/4507249635950672",
	integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
	tracesSampleRate: 1.0,
	tracePropagationTargets: ["localhost", /^https:\/\/jacob-dolorzo-gourmet-gateway.vercel.app/],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0
});

const root = document.getElementById("root");

if (root) {
	ReactDOM.createRoot(root).render(
		<OptimizelyProvider optimizely={AppFeatureToggler.optimizely} user={AppFeatureToggler.user}>
			<Provider store={reduxStore}>
				<HelmetProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</HelmetProvider>
			</Provider>
		</OptimizelyProvider>
	);
}
