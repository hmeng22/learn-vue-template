module.exports = {
    apps: [
        {
            name: "App",
            script: "./build/server",
            watch: true,
            ignore_watch: ["node_modules"]
        }
    ]
}
