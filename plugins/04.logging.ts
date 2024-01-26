export default defineNuxtPlugin((nuxtApp) => {
  const addLog = async (
    level: string,
    logMessage: string,
    logCode: number,
    logUrl?: string,
    logCorrelationContext?: string,
    logBody?: string
  ) => {
    if (process.env.BASE_LOGGING_URL && process.env.NODE_ENV === "production") {
      const loggingEndpoint = `${process.env.BASE_LOGGING_URL}${level}`;
      const logObject: Logging.ILog = {
        errorMessage: logMessage,
        errorCode: logCode,
        url: logUrl,
        correlationContext: logCorrelationContext,
        request: logBody,
      };
      return fetch(loggingEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logObject),
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.debug("missing logging endpoint");
    }
  };

  // Inject in Nuxt Context

  nuxtApp.provide("logging", {
    addLog,
  });
});
