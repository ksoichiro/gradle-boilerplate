package com.github.ksoichiro.groovy.example

class Example {
	static main(args) {
		def example = new Example()
        example.execute()
        example.say()
	}

	def execute() {
		def config = new ConfigSlurper().parse(
				new File(getClass().classLoader.getResource("config.groovy").toURI()).text)
		println "Enviromnent: ${config.app.env}"
	}

	def say() {
		println 'Hello, world'
		1
	}
}
