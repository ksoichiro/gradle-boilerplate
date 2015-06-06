package com.github.ksoichiro.groovy.example

class Example {
    static main(args) {
        new Example().execute()
    }

    def execute() {
        def config = new ConfigSlurper().parse(
                new File(getClass().classLoader.getResource("config.groovy").toURI()).text)
        println "Environment: ${config.app.env}"
    }
}
