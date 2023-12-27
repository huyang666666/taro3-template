import type { UserConfigExport } from "@tarojs/cli";

export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {
    devServer: {
      // disableHostCheck: true,
      allowedHosts: [".csb.app"], // <  Copy and paste the domain from the URL Codebox provides for your runtime here
    },
  },
} satisfies UserConfigExport;
