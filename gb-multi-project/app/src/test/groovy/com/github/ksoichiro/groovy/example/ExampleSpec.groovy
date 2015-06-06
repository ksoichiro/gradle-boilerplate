package com.github.ksoichiro.groovy.example

import spock.lang.Specification

class ExampleSpec extends Specification {
    def "main"() {
        expect:
        Example.main(null)
    }

    def "say returns 1"() {
        when:
        def result = new Example().say()

        then:
        result == 1
    }
}
