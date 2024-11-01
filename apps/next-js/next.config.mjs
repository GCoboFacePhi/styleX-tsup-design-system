import stylexPlugin from "@stylexjs/nextjs-plugin";
import path from "path";

/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@ui/theme", "@ui/flex-container"],
};

const __dirname = new URL(".", import.meta.url).pathname;

export default stylexPlugin({
  rootDir: path.join(__dirname, "../.."),
})(nextConfig);
