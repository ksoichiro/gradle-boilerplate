# Groovy-Example

Examples of Groovy and Gradle codes.

## Features

* Develop with Eclipse
* Multiproject structure
* Tests with Spock
* Code coverage with Cobertura

## Setup

* JDK 7
* Eclipse 4.4 Luna
* Groovy-Eclipse (for 4.4)
* Gradle IDE Pack
* Set `GRADLE_USER_HOME` classpath variable to `/path/to/home/.gradle`

## Test

```
./gradlew clean test
```

To see the report, open `app/build/reports/tests/index.html`.

## Cobertura

```
./gradlew clean cobertura
```

To see the report, open `app/build/reports/cobertura/index.html`.

## License

Copyright (c) 2015 Soichiro Kashima  
Licensed under MIT license.  
See the bundled [LICENSE](LICENSE) file for details.
